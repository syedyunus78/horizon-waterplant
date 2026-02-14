



import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import img11 from "../src/images/Fish-Bone-Meal-Fertilizer-Batch-Cooker-for-Customized-Capacity.avif";
import img12 from "../src/images/Industrial water treatment setup in warehouse.png";


const Waterfertilzer = () => {
  const swiperImages = [
    { img: img11 },
    { img: img12 },

  ]
    ;

  const sections = [
    {
      id: 1,
     title: "About Our Cooker Solutions",

      content: {
        en: `Industrial cooker systems play a crucial role in water treatment and Zero Liquid Discharge (ZLD) processes by enabling efficient evaporation and concentration of wastewater. Our cooker solutions are engineered to handle high-salinity and high-contaminant water streams, ensuring optimal recovery and environmental compliance.

Designed with advanced thermal technology and energy-efficient components, our systems maximize evaporation efficiency while minimizing operational costs. We provide customized solutions tailored to different industrial applications, ensuring durability, performance, and sustainable water management.`
,

      ar: `تلعب أنظمة الطهي الصناعية دورًا مهمًا في معالجة المياه وعمليات التصريف الصفري (ZLD) من خلال تمكين التبخير الفعّال وتركيز مياه الصرف. تم تصميم حلول الطهي لدينا للتعامل مع المياه ذات الملوحة العالية والمحتوى العالي من الملوثات، مما يضمن كفاءة التشغيل والامتثال البيئي.

تم تطوير أنظمتنا باستخدام تقنيات حرارية متقدمة ومكونات موفرة للطاقة لتحقيق أعلى كفاءة تبخير مع تقليل تكاليف التشغيل. نوفر حلولاً مخصصة تناسب مختلف التطبيقات الصناعية، مع ضمان المتانة والأداء وإدارة مستدامة للمياه.`
},
      img: img11
    },
    {
      id: 2,
      title: " Fertilizer Solutions",
      content: {
        en: `Fertilizers play a vital role in modern agriculture by supplying essential nutrients that improve soil fertility and enhance crop growth and productivity. Our fertilizer solutions are developed to support sustainable farming practices by ensuring balanced nutrition, higher yields, and improved crop quality across different agricultural applications.

Our fertilizer products are formulated to meet the specific nutritional requirements of various crops and soil conditions. By using advanced production techniques and quality-controlled raw materials, we help farmers optimize nutrient absorption, reduce nutrient losses, and achieve consistent agricultural performance while supporting environmental responsibility.`,

        ar: `تلعب الأسمدة دورًا أساسيًا في الزراعة الحديثة من خلال تزويد التربة بالعناصر الغذائية اللازمة التي تعمل على تحسين خصوبتها وتعزيز نمو المحاصيل وزيادة إنتاجيتها. تم تصميم حلول الأسمدة لدينا لدعم الممارسات الزراعية المستدامة من خلال ضمان توازن العناصر الغذائية، وزيادة الغلة، وتحسين جودة المحاصيل في مختلف التطبيقات الزراعية.

تُصنع منتجاتنا لتلبية الاحتياجات الغذائية الخاصة بمختلف المحاصيل وظروف التربة. ومن خلال استخدام تقنيات إنتاج متقدمة ومواد خام عالية الجودة، نساعد المزارعين على تحسين امتصاص العناصر الغذائية، وتقليل الفاقد، وتحقيق أداء زراعي مستمر مع الحفاظ على المسؤولية البيئية.`
      },
      img: img12
    }
    ,





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

export default Waterfertilzer

