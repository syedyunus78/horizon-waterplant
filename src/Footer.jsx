import React from 'react'
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
          <Link to="/history/history">History</Link>
        </li>

        <li>
          <Link to="/history/mission">Mission & Vision</Link>
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
                        <Link to="/ourcustomer"> Our Customers</Link>
                       </li>
                    
                      <li>
                        <Link to="/designandbuild">Design & build</Link>
                        </li>
                      <li>
                        <Link to="/aftersales">After-sales</Link>
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
