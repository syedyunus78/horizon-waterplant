import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";

import img6 from "../src/images/ROdrinkingSystem/WhatsApp Image 2026-01-22 at 9.48.24 PM.jpeg";
import img7 from "../src/images/ROdrinkingSystem/WhatsApp Image 2026-01-22 at 9.48.40 PM.jpeg";
import img8 from "../src/images/ROdrinkingSystem/WhatsApp Image 2026-01-22 at 9.48.42 PM.jpeg";
import img9 from "../src/images/ROdrinkingSystem/WhatsApp Image 2026-01-22 at 9.48.43 PM.jpeg";
import img10 from "../src/images/ROdrinkingSystem/WhatsApp Image 2026-01-22 at 9.48.49 PM.jpeg";

const Roplants = () => {

  const swiperImages = [
    { img: img8, subHeading: "A safe sustainable", extra: "solution" },
    { img: img9, subHeading: "it all comes from our", extra: "passion for water" },
    { img: img10, subHeading: "RO Drinking Water", extra: "Advanced Solutions" }
  ];

  const sections = [
    {
      id: 1,
      title: "About Our RO Plants",
      content: `We specialize in advanced Reverse Osmosis (RO) water treatment solutions for industrial, commercial, and municipal applications. Our systems are designed to provide high-quality, safe drinking water while optimizing energy and operational costs.`,
      img: img6
    },
    {
      id: 2,
      title: "Our RO Solutions",
      content: `We provide complete RO plant services including system design, supply, installation, commissioning, operation, and after-sales support including spare parts and chemical dosing.`,
      img: img7
    },
    {
      id: 3,
      title: "Get in Touch",
      content: `Our team is ready to assist you with customized RO solutions tailored to your water needs. We ensure reliable and efficient water treatment services.`,
      img: img9
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add("show"));
    }, { threshold: 0.3 });

    document.querySelectorAll(".section-wrapper").forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="features-page">

      <Swiper modules={[Autoplay]} autoplay={{ delay: 3000 }} loop className="hero-swiper">
        <Link to="/home" className="back-home-tag">← Back to Home</Link>

        {swiperImages.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="slide-content" style={{ "--bg-image": `url(${slide.img})` }}>
              <img src={slide.img} alt="" />
              <div className="overlay">
                <h3>{slide.subHeading}</h3>
                <h4>{slide.extra}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <br /><br />

      {sections.map(item => (
        <div key={item.id} className="section-wrapper">
          <div className="wm-section">
            <div className="wm-text">
              <span className="h-line"></span><br />
              <div className="section-bar">
                <h2>{item.title}</h2>
              </div>
              <p>{item.content}</p>
              <button className="wm-btn">DISCOVER MORE</button>
            </div>

            <div className="wm-image">
              <img src={item.img} alt={item.title} />
            </div>
          </div>

          <br /><br />
          <svg width="100%" height="40" viewBox="0 0 1000 40" preserveAspectRatio="none">
            <polyline
              className="zigzag-line"
              points="0,38 750,38 760,2 1000,3"
              fill="none"
              stroke="#6b7f2a"
              strokeWidth="3"
            />
          </svg>
          <br /><br />
        </div>
      ))}

    </div>
  );
};

export default Roplants;
