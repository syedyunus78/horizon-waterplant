import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import img11 from "../src/images/Fish-Bone-Meal-Fertilizer-Batch-Cooker-for-Customized-Capacity.avif";
import img12 from "../src/images/watersolublefertilzer.jpeg";



const fertilzer = () => {
 const swiperImages = [
    { img: img11 },
    { img: img12 },
   
  ]
    ;

  const sections = [
{
  id: 1,
  title: "About Our Fertilizer Solutions",
  content: {
    en: `Fertilizers play a vital role in modern agriculture by supplying essential nutrients that improve soil fertility and enhance crop growth and productivity. Our fertilizer solutions are developed to support sustainable farming practices by ensuring balanced nutrition, higher yields, and improved crop quality across different agricultural applications.

Our fertilizer products are formulated to meet the specific nutritional requirements of various crops and soil conditions. By using advanced production techniques and quality-controlled raw materials, we help farmers optimize nutrient absorption, reduce nutrient losses, and achieve consistent agricultural performance while supporting environmental responsibility.`,
    
    ar: `تلعب الأسمدة دورًا أساسيًا في الزراعة الحديثة من خلال توفير العناصر الغذائية الضرورية التي تعمل على تحسين خصوبة التربة وتعزيز نمو المحاصيل وزيادة إنتاجيتها. تم تطوير حلول الأسمدة التي نقدمها لدعم الممارسات الزراعية المستدامة من خلال ضمان تغذية متوازنة، وزيادة الغلة، وتحسين جودة المحاصيل في مختلف التطبيقات الزراعية.

يتم تصنيع منتجات الأسمدة لدينا لتلبية الاحتياجات الغذائية المحددة لمختلف المحاصيل وظروف التربة. وباستخدام تقنيات إنتاج متقدمة ومواد خام عالية الجودة، نساعد المزارعين على تحسين امتصاص العناصر الغذائية وتقليل الفاقد وتحقيق أداء زراعي مستقر مع الحفاظ على المسؤولية البيئية.`
  },
  img: img11
},
{
  id: 2,
  title: "Water Soluble Fertilizer Solutions",
  content: {
    en: `Water soluble fertilizers are specially formulated to dissolve completely in water, ensuring rapid nutrient availability and efficient absorption by plants. These fertilizers are ideal for modern irrigation systems such as drip irrigation, fertigation, and foliar application, providing precise and uniform nutrient delivery to crops.

Our water soluble fertilizer solutions enhance plant growth, improve root development, and boost crop yield and quality. Designed for high solubility and compatibility, they minimize clogging in irrigation systems and allow farmers to apply nutrients accurately based on crop growth stages. By choosing our water soluble fertilizers, growers benefit from improved efficiency, reduced fertilizer wastage, and sustainable agricultural productivity.`,
    
    ar: `تم تصميم الأسمدة القابلة للذوبان في الماء خصيصًا لتذوب بالكامل في الماء، مما يضمن توفر العناصر الغذائية بسرعة وسهولة امتصاصها من قبل النباتات. وتُعد هذه الأسمدة مثالية لأنظمة الري الحديثة مثل الري بالتنقيط، والتسميد عبر الري، والرش الورقي، حيث توفر توزيعًا دقيقًا ومتجانسًا للعناصر الغذائية على المحاصيل.

تسهم حلول الأسمدة القابلة للذوبان في الماء التي نقدمها في تعزيز نمو النباتات، وتحسين تطور الجذور، وزيادة إنتاجية وجودة المحاصيل. وقد تم تطويرها بدرجة ذوبان عالية وتوافق ممتاز لتقليل انسداد أنظمة الري وتمكين المزارعين من تطبيق العناصر الغذائية بدقة وفقًا لمراحل نمو المحاصيل. ومن خلال استخدام أسمدتنا القابلة للذوبان في الماء، يحقق المزارعون كفاءة أعلى، وتقليل الهدر، وزراعة مستدامة ذات إنتاجية محسّنة.`
  },
  img: img12
}
,


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

export default fertilzer
