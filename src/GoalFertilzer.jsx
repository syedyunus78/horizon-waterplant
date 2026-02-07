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


const GoalFertilzer = () => {
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
  title: "Industrial Evaporator Systems",
  content: `Industrial Evaporator Systems are designed to concentrate and reduce wastewater volume by removing water through controlled evaporation. These systems are ideal for industries requiring high-efficiency water recovery and reduced liquid waste generation.

Our evaporator solutions support sustainable operations by enabling water reuse, lowering disposal costs, and ensuring compliance with environmental regulations.`,
  img: img12
},
{
  id: 2,
  title: "Resort & Hospitality Evaporator Solutions",
  content: `Resort & Hospitality Evaporator Solutions help manage wastewater and high-salinity streams by reducing discharge through efficient evaporation processes. Treated water can be recovered for reuse in non-potable applications such as landscaping and cooling systems.

These solutions contribute to eco-friendly resort operations while maintaining hygiene, efficiency, and environmental responsibility.`,
  img: img11
},
{
  id: 3,
  title: "Commercial & Factory Evaporator Systems",
  content: `Commercial & Factory Evaporator Systems are engineered to support zero or minimal liquid discharge goals by significantly reducing wastewater volumes. The systems handle complex effluents while maximizing water recovery.

By integrating advanced evaporator technology, facilities can minimize environmental impact, optimize resource usage, and achieve long-term sustainability objectives.`,
  img: img13
}


  ];



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

export default GoalFertilzer
