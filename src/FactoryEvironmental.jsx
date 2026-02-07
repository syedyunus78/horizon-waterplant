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


const FactoryEvironmental = () => {
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
  title: "Factory Green Infrastructure Solutions",
  content: `Factory Green Infrastructure Solutions focus on developing sustainable green spaces within industrial premises. These solutions improve environmental quality, enhance visual appeal, and help regulate temperature while supporting eco-friendly industrial environments.`,
  img: img12
},
{
  id: 2,
  title: "Factory Water Management & Reuse Solutions",
  content: `Factory Water Management & Reuse Solutions are designed to optimize water consumption through efficient treatment, recycling, and reuse systems. These solutions reduce dependency on freshwater sources while supporting sustainable factory operations.`,
  img: img11
},
{
  id: 3,
  title: "Factory Waste Reduction & Environmental Control",
  content: `Factory Waste Reduction & Environmental Control Solutions help industries minimize waste generation and manage environmental impact effectively. These systems support cleaner production processes and improved environmental performance.`,
  img: img13
},
{
  id: 4,
  title: "Factory Energy-Efficient Environmental Systems",
  content: `Factory Energy-Efficient Environmental Systems focus on reducing energy consumption through smart technologies and optimized environmental controls. These systems support cost savings while lowering the carbon footprint of industrial facilities.`,
  img: img12
},
{
  id: 5,
  title: "Factory Environmental Compliance & Sustainability",
  content: `Factory Environmental Compliance & Sustainability Solutions ensure that industrial operations meet environmental regulations and sustainability standards. These solutions help factories achieve long-term environmental responsibility and operational excellence.`,
  img: img11
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

export default FactoryEvironmental
