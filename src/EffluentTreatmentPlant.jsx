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

const EffluentTreatmentPlant = () => {
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
  title: "Industrial Wastewater Treatment",
  content: `Industrial Wastewater Treatment systems are designed to treat effluents generated from manufacturing units, processing plants, and industrial operations. These systems effectively remove suspended solids, oils, chemicals, and organic pollutants before safe discharge or reuse.

Our solutions ensure compliance with environmental regulations, reduce water consumption, and support sustainable industrial operations.`,
  img: img12
},
{
  id: 2,
  title: "Poultry Farm Wastewater Treatment",
  content: `Poultry Farm Wastewater Treatment Plants are designed to handle wastewater containing high organic load, blood residues, fats, and nutrients generated from poultry processing and cleaning activities.

The treatment process minimizes odor, controls pathogens, and enables safe disposal or reuse of treated water while maintaining hygienic and environmental standards.`,
  img: img11
},
{
  id: 3,
  title: "Leather Processing Wastewater Treatment",
  content: `Leather Processing Wastewater Treatment Plants are engineered to treat effluents containing chemicals such as chromium, sulfides, lime, and high organic content generated during tanning and leather finishing processes.

Our systems ensure effective removal of toxic contaminants, safe discharge, and compliance with strict environmental norms.`,
  img: img13
},
{
  id: 4,
  title: "Garment Industry Wastewater Treatment",
  content: `Garment Industry Wastewater Treatment Plants are designed to treat effluents generated from dyeing, washing, bleaching, and finishing processes. These effluents typically contain color, chemicals, and dissolved solids.

The treatment system ensures color removal, water recovery, and environmentally safe discharge, supporting sustainable textile operations.`,
  img: img14
},




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

export default EffluentTreatmentPlant
