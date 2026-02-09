import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";

import img11 from "../src/images/ETPTORO/etptoro7 (3).jpeg"
import img12 from "../src/images/wastewater-treatment-plants-1000x1000college.webp";

import img14 from "../src/images/textile-industry-wastewater-treatment-plant-1000x1000.jpg"

const EffluentTreatmentPlant = () => {
 const swiperImages = [
    { img: img11 },
    { img: img12 },
    { img: img14 },
    
  ]
    ;

  const sections = [
 {
  id: 1,
  title: "Industrial  Treatment plant",
  content: {
    en: `Industrial  Treatment systems are designed to treat effluents generated from manufacturing units, processing plants, and industrial operations. These systems effectively remove suspended solids, oils, chemicals, and organic pollutants before safe discharge or reuse.

Our solutions ensure compliance with environmental regulations, reduce water consumption, and support sustainable industrial operations.`,
    ar: `تم تصميم أنظمة معالجة مياه الصرف الصناعي لمعالجة المخلفات الناتجة عن الوحدات الإنتاجية والمصانع والعمليات الصناعية. تقوم هذه الأنظمة بإزالة المواد الصلبة العالقة والزيوت والمواد الكيميائية والملوثات العضوية بشكل فعال قبل التصريف الآمن أو إعادة الاستخدام.

تضمن حلولنا الامتثال للوائح البيئية، وتقليل استهلاك المياه، ودعم العمليات الصناعية المستدامة.`
  },
  img: img12
},
{
  id: 2,
  title: "Poultry Farm  Treatment plant",
  content: {
    en: `Poultry Farm  Treatment Plants are designed to handle  containing high organic load, blood residues, fats, and nutrients generated from poultry processing and cleaning activities.

The treatment process minimizes odor, controls pathogens, and enables safe disposal or reuse of treated water while maintaining hygienic and environmental standards.`,
    ar: `تم تصميم محطات معالجة مياه الصرف لمزارع الدواجن للتعامل مع مياه الصرف التي تحتوي على حمولة عضوية عالية وبقايا دم ودهون وعناصر غذائية ناتجة عن عمليات تجهيز وتنظيف الدواجن.

تقلل عملية المعالجة من الروائح وتتحكم في مسببات الأمراض، وتمكّن من التخلص الآمن من المياه المعالجة أو إعادة استخدامها مع الحفاظ على المعايير الصحية والبيئية.`
  },
  img: img11
},

{
  id: 3,
  title: "Garment Industry  Treatment plant",
  content: {
    en: `Garment Industry  Treatment Plants are designed to treat effluents generated from dyeing, washing, bleaching, and finishing processes. These effluents typically contain color, chemicals, and dissolved solids.

The treatment system ensures color removal, water recovery, and environmentally safe discharge, supporting sustainable textile operations.`,
    ar: `تم تصميم محطات معالجة مياه الصرف لصناعة الملابس لمعالجة المخلفات الناتجة عن عمليات الصباغة والغسيل والتبييض والتشطيب. تحتوي هذه المخلفات عادة على ألوان ومواد كيميائية ومواد صلبة ذائبة.

يضمن نظام المعالجة إزالة الألوان، واستعادة المياه، والتصريف البيئي الآمن، لدعم العمليات النسيجية المستدامة.`
  },
  img: img14
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


              <p>{item.content.en}</p>
              <p>{item.content.ar}</p>
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
