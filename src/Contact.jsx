import React from "react";


export default function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">CONTACT US</h2>

      <form className="contact-form">
        <div className="row">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>

        <div className="row">
          <select>
            <option>Nationality</option>
            <option>Indian</option>
            <option>UAE</option>
            <option>Qatar</option>
            <option>USA</option>
          </select>

          <select>
            <option>Which country would you like to contact?</option>
            <option>India</option>
            <option>UAE</option>
            <option>Qatar</option>
          </select>
        </div>

        <div className="row">
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone" />
        </div>

        <div className="row">
          <textarea placeholder="Message"></textarea>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}
