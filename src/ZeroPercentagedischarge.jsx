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

const ZeroPercentagedischarge = () => {
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
  title: "Zero Liquid Discharge for Industrial Facilities",
  content: `Zero Liquid Discharge (ZLD) solutions for industrial facilities are designed to eliminate wastewater discharge by recovering and reusing water within the process. Advanced treatment technologies ensure maximum water recovery while safely handling salts and residues.

These systems help industries comply with strict environmental regulations, reduce freshwater consumption, and achieve sustainable, closed-loop water management.`,
  img: img12
},
{
  id: 2,
  title: "Zero Liquid Discharge for Resorts & Hospitality",
  content: `Zero Liquid Discharge solutions for resorts and hospitality environments focus on treating and reusing wastewater for landscaping, cooling, and non-potable applications. The process minimizes water wastage while maintaining hygiene and environmental standards.

By adopting ZLD systems, resorts can significantly reduce their environmental footprint, lower water procurement costs, and promote eco-conscious tourism.`,
  img: img11
},
{
  id: 3,
  title: "Zero Liquid Discharge for Commercial & Infrastructure Projects",
  content: `Zero Liquid Discharge solutions for commercial and infrastructure projects ensure complete wastewater recovery with no discharge to the environment. Treated water is reused efficiently, supporting sustainable operations in large facilities and developments.

These systems contribute to long-term water security, regulatory compliance, and responsible environmental stewardship.`,
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

export default ZeroPercentagedischarge
