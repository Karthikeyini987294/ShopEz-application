import mongoose from 'mongoose';
import { Product } from '../../schema.js';
import { readFile } from 'fs/promises';

const seed = async () => {
  try {
    // Read and parse the JSON file manually
    const data = await readFile('./server/models/product.json', 'utf-8');
    const products = JSON.parse(data);

    console.log(`🧾 Parsed ${products.length} products from JSON`);
    products.forEach((p, i) => console.log(`${i + 1}. ${p.title}`));

    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/MYDB');

    // Insert into DB (allow unordered so one bad product doesn't stop others)
    await Product.insertMany(products, { ordered: false })
      .then(() => {
        console.log('✅ Seeding done');
      })
      .catch((err) => {
        console.error('❌ Some inserts failed:');
        if (err.writeErrors) {
          err.writeErrors.forEach((e, i) => {
            console.error(`⛔ Failed product #${i + 1}:`, e.err?.op?.title || 'Unknown');
            console.error(e.errmsg || e.message);
          });
        } else {
          console.error(err.message);
        }
      });

    // Disconnect
    await mongoose.disconnect();
  } catch (err) {
    console.error('❌ Error during seeding:', err);
  }
};

seed();
