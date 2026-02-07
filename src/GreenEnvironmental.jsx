import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import img11 from "../src/images/Untitled-design-2025-12-15T165617.621 (1).webp";
import img12 from "../src/images/wastewater-treatment-plants-1000x1000college.webp";
import img13 from "../src/images/Sewage-Treatment-For-Resorts-1024x768resort.webp";
import img14 from "../src/images/stpindustries.jpg"
import img15 from "../src/images/stp-plant-for-hospitals-1000x1000.jpg"
import img16 from "../src/images/water-and-sewage-treatment-plant-service-1000x1000beach.png"

const GreenEnvironmental = () => {
 const swiperImages = [
    { img: img11 },
    { img: img12 },
    { img: img13 },
    { img: img14 },
    { img: img15 },
    { img: img16 }
  ]
    ;

  const sections = [
   {
  id: 1,
  title: "Garden Green Environmental Solutions",
  content: `Garden Green Environmental Solutions focus on creating sustainable, eco-friendly landscapes for residential, commercial, and public spaces. Our systems promote efficient water usage, healthy soil management, and long-lasting greenery through smart irrigation and environmentally responsible practices.

These solutions enhance aesthetic appeal, improve air quality, and support a greener, healthier environment.`,
  img: img12
},
{
  id: 2,
  title: "Resort Green Environmental Solutions",
  content: `Resort Green Environmental Solutions are designed to maintain lush landscapes while conserving natural resources. Our approach integrates water-efficient systems, recycled water usage, and sustainable landscaping techniques to preserve the natural beauty of resorts and hospitality environments.

This ensures an eco-conscious guest experience while reducing operational costs and environmental impact.`,
  img: img11
},
{
  id: 3,
  title: "Factories Green Environmental Solutions",
  content: `Factories Green Environmental Solutions aim to support industrial facilities in adopting sustainable environmental practices. These solutions help improve green cover, manage water responsibly, and reduce the ecological footprint of factory premises.

By integrating green infrastructure and resource-efficient systems, factories can achieve environmental compliance while contributing to a cleaner and more sustainable future.`,
  img: img13
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


            </div>
          </SwiperSlide>
        ))}
      </Swiper>




      {sections.map((item, index) => (
        <div
          key={item.id}
          className={`section-wrapper ${index % 2 !== 0 ? "reverse" : ""}`}
        >
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

          <div className="wm-section">
            <div className="wm-text">

              <div className="section-bar">
                <h2>{item.title}</h2>
              </div>
              <p>{item.content}</p>
            </div>

            <div className="wm-image">
              <img src={item.img} alt={item.title} />
            </div>
          </div>
        </div>
      ))}


    </div>
  );
}

export default GreenEnvironmental
