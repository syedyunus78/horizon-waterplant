
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

const DesigningBuild = () => {

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
      title: "College Sewage Treatment Plant",
      content: `Our College Sewage Treatment Plants are designed to efficiently treat wastewater generated from hostels, classrooms, laboratories, and common facilities. The system ensures safe disposal and reuse of treated water for gardening, flushing, and other non-potable applications.

The plant is engineered to meet environmental regulations, reduce freshwater consumption, and promote sustainable water management within educational campuses.`,
      img: img12
    },
    {
      id: 2,
      title: "School Sewage Treatment Plant",
      content: `School Sewage Treatment Plants are specially designed to handle wastewater from washrooms, cafeterias, and playground facilities. Our systems operate safely, quietly, and hygienically to protect the health of students and staff.

Treated water can be reused for landscaping and toilet flushing, ensuring compliance with environmental standards while promoting water conservation.`,
      img: img11
    },
    {
      id: 3,
      title: "Resort Sewage Treatment Plant",
      content: `Resort Sewage Treatment Plants are designed to manage wastewater from guest rooms, kitchens, swimming pools, and recreational areas. The system ensures odor-free operation and high-quality treated water suitable for irrigation and landscaping.

Our solutions help resorts maintain luxury standards while adhering to environmental regulations and sustainability goals.`,
      img: img13
    },
    {
      id: 4,
      title: "Industrial Sewage Treatment Plant",
      content: `Industrial Sewage Treatment Plants are engineered to treat wastewater generated from manufacturing processes, utilities, and domestic sources within industrial facilities.

Our plants ensure effective removal of contaminants, safe discharge, and water reuse possibilities, helping industries comply with environmental norms and reduce operational water costs.`,
      img: img14
    },
    {
      id: 5,
      title: "Hospital Sewage Treatment Plant",
      content: `Hospital Sewage Treatment Plants are designed to safely treat wastewater containing biological contaminants, chemicals, and medical residues from healthcare facilities.

Our systems ensure hygienic treatment, odor control, and compliance with health and environmental regulations, allowing safe reuse of treated water for non-potable applications.`,
      img: img15
    },
    {
      id: 6,
      title: "Beach Resort Sewage Treatment Plant",
      content: `Beach Resort Sewage Treatment Plants are designed to operate efficiently in coastal environments, handling wastewater from guest accommodations, restaurants, and recreational facilities.

The system ensures environmentally safe treatment, protects marine ecosystems, and enables reuse of treated water for landscaping while maintaining the resort’s eco-friendly image.`,
      img: img16
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
};

export default DesigningBuild;
