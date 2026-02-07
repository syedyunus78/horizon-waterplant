
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import img11 from "../src/images/Evaporators-in-Wastewater-Treatment-1024x538.jpg";
import img12 from "../src/images/evaporatorn2.2.jpg";


const WaterEvaporator = () => {
 const swiperImages = [
    { img: img11 },
    { img: img12 },
   
  ]
    ;

  const sections = [
    {
  id: 1,
  title: "About our Evaporator Systems",
   content: {
            en: `Evaporators are increasingly used as an effective alternative for wastewater treatment across various industries. These systems operate by concentrating or eliminating dissolved salts, heavy metals, and other hazardous substances through controlled evaporation, significantly reducing wastewater volume....`,
            ar: `تُستخدم أنظمة التبخير بشكل متزايد كحل فعّال لمعالجة مياه الصرف الصناعي في مختلف القطاعات. تعمل هذه الأنظمة على تركيز أو إزالة الأملاح الذائبة والمعادن الثقيلة والمواد الخطرة الأخرى من خلال عملية تبخير مُتحكَّم بها، مما يؤدي إلى تقليل حجم مياه الصرف بشكل كبير`
          },
  img: img11
},
{
  id: 2,
  title: "Concrete bed Evaporator Solutions",
   content: {
            en: `Industrial evaporator systems also enable the concentration of liquid waste prior to further treatment or disposal and allow for the recovery of valuable byproducts from process streams. When water conservation is a priority, evaporator technology produces high-quality reusable distillate, making it a critical solution for sustainable industrial operations....`,
            ar: `كما تتيح أنظمة المبخرات الصناعية تركيز المخلفات السائلة قبل معالجتها أو التخلص منها، مع إمكانية استرجاع منتجات ثانوية قيّمة من تيارات العمليات الصناعية. وعندما يكون ترشيد استهلاك المياه أولوية، توفّر تقنية التبخير مُقطَّرًا عالي الجودة قابلًا لإعادة الاستخدام، مما يجعلها حلاً أساسيًا للعمليات الصناعية المستدامة....`
          },
  img: img12
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


              <p>{item.content.en}</p>
              <p>{item.content.ar}</p>
            </div>

             <div className={`wm-image ${index === 0 ? "first-image" : ""}`} key={index}>
              <img src={item.img} alt={item.title} />
            </div>
          </div>
        </div>
      ))}


    </div>
  );
}

export default WaterEvaporator
