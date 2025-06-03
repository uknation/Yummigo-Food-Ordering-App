import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
             <img src={assets.logo} alt="Logo" style={{ width: "150px" }} />
            <p>Our food ordering app offers a seamless and intuitive way for users to browse, order, and enjoy delicious meals from local restaurants. With real-time order tracking, secure payments, and a wide selection of cuisines, it brings convenience and flavor to your fingertips. Whether you're craving fast food, traditional dishes, or gourmet meals, our app connects you with trusted eateries in just a few taps.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-9856321478</li>
                <li>contact@yummigo.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 © Yummigo.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
