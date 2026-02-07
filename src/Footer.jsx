import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
     <div>
             <footer className="footer">
                <div className="footer-top">
                  <div className="footer-col">
                    <h3>HORIZION</h3>
                    <ul>
                      
                      <li>
                          <Link to="/History">History</Link>
                      </li>
                      <li>
                        <Link to="/History"> Mission & Vision</Link>
                       </li>
                    
                      <li>
                        <Link to="/contact"> Contact us</Link>
                       </li>
                    </ul>
                  </div>
          
                  <div className="footer-col">
                    <h3>Wellness</h3>
                    <ul>
                      
                      <li>
                        <Link to="/History"> Our Customers</Link>
                       </li>
                    
                      <li>
                        <Link to="/History">Design & build</Link>
                        </li>
                      <li>
                        <Link to="/History">After-sales</Link>
                      </li>
                      
                    </ul>
                  </div>
          
                  <div className="footer-col">
                    <h3>Zero Percent Discharge</h3>
                    <ul>
                    
                     
                      <li>
                        <Link to="/evaporator"> Evaporator</Link>
                       </li>
                      <li>
                        <Link to="/fertilzer">Fertilizer</Link>
                        </li>
                    
                    </ul>
                  </div>
          
                  <div className="footer-col">
                    <h3>Green Environmental</h3>
                    <ul>
                      <li>
                        <Link to="/sewagetreatmentplant"> Sewage Treatment Plant(STP)</Link>
                       </li>
                      <li>
                        <Link to="/effluentTreatmentPlant">Effluent Treatment Plant (ETP)</Link>
                        </li>
                     
                     
                     
                    </ul>
                  </div>
                </div>
          
                <div className="footer-bottom">
                  <p>HORIZON © 2026 All rights reserved</p>
                  
                </div>
              </footer>
        </div>
  )
}

export default Footer
