import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
     <div>
             <footer className="footer">
                <div className="footer-top">
                  <div className="footer-col">
                    <h3>HORIZION</h3>
                    <ul>
                      <li>History</li>
                      <li>Mission & Vision</li>
                      <li>Values</li>
                      <li>Goals</li>
                      <li>Contact us</li>
                    </ul>
                  </div>
          
                  <div className="footer-col">
                    <h3>Wellness</h3>
                    <ul>
                      <li>What we do</li>
                      <li>Our Customers</li>
                      <li>The Ultimate SPA Experience</li>
                      <li>Design & build</li>
                      <li>After-sales</li>
                      <li>Partners</li>
                      <li>References</li>
                    </ul>
                  </div>
          
                  <div className="footer-col">
                    <h3>Landscape</h3>
                    <ul>
                      <li>What we do</li>
                      <li>Our Scope of Products</li>
                      <li>A Memorable Water Show</li>
                      <li>Design & build</li>
                      <li>After-sales</li>
                      <li>Partners</li>
                      <li>References</li>
                    </ul>
                  </div>
          
                  <div className="footer-col">
                    <h3>Water & Treatment</h3>
                    <ul>
                      <li>What we do</li>
                      <li>Our Services</li>
                      <li>Successful Project Delivery</li>
                      <li>Design & build</li>
                      <li>After-sales</li>
                      <li>Partners</li>
                      <li>References</li>
                    </ul>
                  </div>
                </div>
          
                <div className="footer-bottom">
                  <p>HORIZON © 2026 All rights reserved</p>
                  <div className="social">
                    <FaFacebookF />
                    <FaInstagram />
                    <FaLinkedinIn />
                    <FaYoutube />
                    <FaTwitter />
                  </div>
                </div>
              </footer>
        </div>
  )
}

export default Footer
