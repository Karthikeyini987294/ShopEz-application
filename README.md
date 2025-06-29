
## 🛠️ Tech Stack

- **Frontend**: React, Context API, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Other Tools**: 
  - `nodemon` for auto-reloading
  - `dotenv` for environment variables
  - `axios` for API calls

---

## 🚀 Features

- 🛒 Product listings by category
- 🔥 Flash sales support
- 🔐 User authentication (Register & Login)
- 🖼️ Product image carousel
- 💾 MongoDB data seeding

---

## 🧑‍💻 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/mern-ecommerce.git
cd SHOPEZ


2. Install dependencies
cd server
npm install

cd ../client
npm install

4. Seed the database 
cd server
node models/seed.mjs

5. Run the application (index.js and seed.mjs database name should be same)
Start Backend:
cd server
npm start

Start Frontend:
cd ../client
npm start


📦 API Endpoints (Sample)
Method	Endpoint	Description
GET	/api/products	Fetch all products
POST	/api/register	Register new user
POST	/api/login	Authenticate user

