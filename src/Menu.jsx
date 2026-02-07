import React, { useState } from 'react'
import { Link } from "react-router-dom";
const Menu = () => {
    const [open, setOpen] = useState(false);
  return (
    <div>
      {/* Only show the menu icon if menu is closed */}
      {!open && (
        <div className="menu-icon" onClick={() => setOpen(true)}>
          ☰
        </div>
      )}

      {open && (
        <div className="menu-overlay">
          {/* Close button */}
          <div className="close-btn" onClick={() => setOpen(false)}>✕</div>

          <div className="menu-content">
             <span className="active" onClick={() => setOpen(false)}>
    <Link to="/home">HOME</Link>
  </span>
<Link to="/Horizon" onClick={() => setOpen(false)}>
  <span>Horzion-Features</span>
</Link>
<Link to="/Roplant" onClick={() => setOpen(false)}>
            <span>RO-PLANT</span>
            </Link>
            <span>DESIGN & BUILD</span>
            <Link to="/History" onClick={() => setOpen(false)}>
            <span>HISTORY & MISSION VISSON</span>
            </Link>
             <Link to="/contact" onClick={() => setOpen(false)}>
            <span>CONTACT-US</span> 
            </Link>
           
            <Link to="/designingbuild" onClick={() => setOpen(false)}>
            <span> Designingbuild</span> 
            </Link>

            <span>REFERENCES</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Menu
