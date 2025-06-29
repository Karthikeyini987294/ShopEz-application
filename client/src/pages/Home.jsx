import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import HomeBanner from '../images/home-banner-2.png'
import Products from '../components/Products'
import Footer from '../components/Footer'
import FlashSale from '../components/FlashSale'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = () => {

  const navigate = useNavigate();

  const [bannerImg, setBannerImg] = useState();

  useEffect(()=>{
    fetchBanner();
  }, [])

  const fetchBanner = async() =>{
    await axios.get('http://localhost:6001/fetch-banner').then(
      (response)=>{
        setBannerImg(response.data);
      }
    )
  }

  return (
    <div className="HomePage">
      <div className="home-banner">
       <img src={HomeBanner} alt="Banner 2" className="banner-img" />
       </div>

      <div className="home-categories-container">

        <div className="home-category-card" onClick={() => navigate('/all-products', { state: { category: 'Fashion' } })}> 
          <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h5>Fashion</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/all-products',{ state: {category : 'Electronics'}})}>
          <img src="https://5.imimg.com/data5/ANDROID/Default/2023/1/SE/QC/NG/63182719/product-jpeg-500x500.jpg" alt="" />
          <h5>Electronics</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/all-products',{ state: {category : 'mobiles'}})}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jUW7v1WFJL9Ylax9a4vazyKXwG-ktSinI4Rd7qi7MkhMr79UlIyyrNkbiK0Cz5u6WYw&usqp=CAU" alt="" />
          <h5>Mobiles</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/all-products',{ state: {category : 'Groceries' }})}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXbpV_yQ_zCtZt_1kNebjvFqXvdDnLuuJPsQ&usqp=CAU" alt="" />
          <h5>Groceries</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/all-products',{ state: {category : 'Sports-Equipment'}})}>
          <img src="https://a.storyblok.com/f/112937/568x464/82f66c3a21/all_the_english-_football_terms_you_need_to_know_blog-hero-low.jpg/m/620x0/filters:quality(70)/" alt="" />
          <h5>Sports Equipments</h5>
        </div>

      </div>


      <div id='products-body'></div>
      <Products category = 'all'  />


      <Footer />
    </div>
  )
}

export default Home