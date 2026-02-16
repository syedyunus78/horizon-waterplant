import React, { useState } from "react";

export default function Contact() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nationality: "",
    country: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Include country code (91 for India), no +, no spaces
    const whatsappNumber = "966557060608";

    const text = `
*Contact Form Details*
--------------------
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Nationality: ${formData.nationality}
Country: ${formData.country}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}
  `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };


  return (
    <>
      <div className="contact-container">
        <h2 className="contact-title">CONTACT US</h2>

        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="row">
            <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
          </div>

          <div className="row">
            <input
              type="text"
              name="nationality"
              placeholder="Nationality"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="country"
              placeholder="Which country would you like to contact?"
              onChange={handleChange}
              required
            />
          </div>

          <div className="row">
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
          </div>

          <div className="row">
            <textarea name="message" placeholder="Message" onChange={handleChange} required></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>

        </form>
      </div>

      <div className="office-info-container big-info">
        <h2 className="office-title">
          📍 Head Office Location &nbsp; | &nbsp; موقع المكتب الرئيسي
        </h2>


        <div className="office-info">
          <p className="company-name">HORIZON &nbsp; | &nbsp; تاريخنا</p>

          {/* Phone Numbers */}
          <p className="office-line">
            <span>📞</span>
            +966 557 060 608 &nbsp; | &nbsp;
            <span style={{ direction: "ltr", unicodeBidi: "bidi-override" }}>
              +٩٦٦ ٥٥٧ ٠٦٠ ٦٠٨
            </span>
          </p>

          {/* Landline */}
          <p className="office-line">
            <span>☎️</span>
            012-6930524 &nbsp; | &nbsp;
            <span style={{ direction: "ltr", unicodeBidi: "bidi-override" }}>
              ٠١٢-٦٩٣٠٥٢٤
            </span>
          </p>

          {/* Email */}
          <p className="office-line">
            <span>📧</span>
            Horizon-des@hotmail.com &nbsp; ;

          </p>

          {/* English Address */}
          <p className="office-address">
            <span>📍</span>
            Postal Code 23762, Ahmad Nazreen Street, Al Falah District, Jeddah city, Kingdom of Saudi Arabia
          </p>

          {/* Arabic Address */}
          <p className="office-address">
            <span>📍</span>
            الرمز البريدي ٢٣٧٦٢، شارع أحمد نازرين، حي الفلاح، مدينة جدة، المملكة العربية السعودية
          </p>
        </div>
      </div>



      <div className="map-container">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.7576229212445!2d39.194001!3d21.7896397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c17b7659d15b9d%3A0x68fcab06b7508740!2z2KPYrdmF2K8g2YbYp9i42LHZitmGLCBBbCBGYWxhaCwgSmVkZGFoIDIzNzYyLCBTYXVkaSBBcmFiaWE!5e0!3m2!1sen!2sin!4v1770470772893!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>


      </div>
    </>
  );
}
