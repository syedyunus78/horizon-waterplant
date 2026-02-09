
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import img11 from "../src/images/electrical.jpeg";
import img12 from "../src/images/mechanical.jpeg";
import img13 from "../src/images/Civil-Constructed-STPs.webp";


const Designandbuild = () => {
 const swiperImages = [
    { img: img11 },
    { img: img12 },
    { img: img13 },

  ]
    ;

  const sections = [
{
  id: 1,
  title: "Electrical",
  content: {
    en: `Electrical systems play a critical role in the reliable and safe operation of water and wastewater treatment plants. These systems include power distribution networks, motor control centers (MCC), electrical panels, cabling, lighting, earthing, and protection systems, designed to support continuous plant operation.

Our electrical solutions ensure efficient power management for pumps, blowers, mixers, and other equipment, while integrating control and automation systems to enhance operational reliability, energy efficiency, and safety. All electrical works are executed in compliance with international standards and local regulations, supporting sustainable and uninterrupted plant performance.`,
    
    ar: `تلعب الأنظمة الكهربائية دورًا أساسيًا في التشغيل الآمن والموثوق لمحطات معالجة المياه ومياه الصرف الصحي. وتشمل هذه الأنظمة شبكات توزيع الطاقة، ولوحات التحكم بالمحركات (MCC)، واللوحات الكهربائية، وأنظمة الكابلات، والإضاءة، والتأريض، وأنظمة الحماية، والتي تم تصميمها لدعم التشغيل المستمر للمحطة.

تضمن حلولنا الكهربائية إدارة فعّالة للطاقة للمضخات والمنافخ والخلاطات وغيرها من المعدات، إلى جانب تكامل أنظمة التحكم والأتمتة لتعزيز موثوقية التشغيل وكفاءة استهلاك الطاقة ومستويات السلامة. ويتم تنفيذ جميع الأعمال الكهربائية وفقًا للمعايير الدولية واللوائح المحلية، بما يضمن أداءً مستدامًا وغير منقطع للمحطات.`
  },
  img: img11
}
,
{
  id: 2,
  title: "Mechanical",
  content: {
    en: `Mechanical systems form the backbone of water and wastewater treatment plants. These systems include pumps, blowers, mixers, screens, clarifiers, sludge handling equipment, and mechanical aeration units, designed to ensure efficient hydraulic flow and reliable plant operation.

Our mechanical solutions support the effective treatment of wastewater containing organic loads, fats, oils, and suspended solids generated from municipal and industrial sources. They help optimize treatment performance, reduce odors, control pathogens, and ensure safe discharge or reuse of treated water in compliance with hygienic and environmental standards.`,
    
    ar: `تُعد الأنظمة الميكانيكية العمود الفقري لمحطات معالجة المياه ومياه الصرف الصحي. وتشمل هذه الأنظمة المضخات، والمنافخ، والخلاطات، والمصافي، وأحواض الترسيب، ومعدات معالجة الحمأة، ووحدات التهوية الميكانيكية، والتي تم تصميمها لضمان التدفق الهيدروليكي السليم والتشغيل الموثوق للمحطة.

تدعم حلولنا الميكانيكية المعالجة الفعّالة لمياه الصرف التي تحتوي على أحمال عضوية، ودهون، وزيوت، ومواد صلبة عالقة ناتجة عن المصادر البلدية والصناعية. كما تسهم في تحسين كفاءة المعالجة، وتقليل الروائح، والسيطرة على مسببات الأمراض، وضمان التصريف الآمن أو إعادة استخدام المياه المعالجة بما يتوافق مع المعايير الصحية والبيئية.`
  },
  img: img12
},

{
  id: 3,
  title: "Civil",
  content: {
    en: `Civil Water  are designed to serve municipal, residential, and public infrastructure projects. These systems handle domestic sewage, stormwater, and greywater generated from housing complexes, commercial buildings, institutions, and urban developments.

Our civil solutions include sewage treatment plants (STP), pumping stations, pipelines, drainage networks, and water supply systems. They ensure effective treatment, safe disposal or reuse of treated water, and full compliance with local and international environmental standards, contributing to sustainable urban water management.`,
    
    ar: `تم تصميم أنظمة المياه والصرف الصحي المدنية لخدمة المشاريع البلدية والسكنية ومشاريع البنية التحتية العامة. تقوم هذه الأنظمة بمعالجة مياه الصرف الصحي المنزلية، ومياه الأمطار، والمياه الرمادية الناتجة عن المجمعات السكنية والمباني التجارية والمؤسسات والتطويرات الحضرية.

تشمل حلولنا المدنية محطات معالجة مياه الصرف الصحي (STP)، ومحطات الضخ، وخطوط الأنابيب، وشبكات التصريف، وأنظمة إمداد المياه. وتضمن هذه الأنظمة المعالجة الفعّالة، والتصريف الآمن أو إعادة استخدام المياه المعالجة، والامتثال الكامل للمعايير البيئية المحلية والدولية، بما يسهم في تحقيق إدارة مستدامة لموارد المياه في المدن.`
  },


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

export default Designandbuild
