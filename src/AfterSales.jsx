



import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import img11 from "../src/images/serviceprovider.jpg";
import img12 from "../src/images/spare-parts-1200x800.jpg";
import img13 from "../src/images/water-treatment-chemicals-500x500.webp";
import img14 from "../src/images/amc.jpeg";


const AfterSales = () => {
 const swiperImages = [
    { img: img11 },
    { img: img12 },
    { img: img13 },

  ]
    ;

  const sections = [
    {
  id: 1,
  title: "AMC ", // ANNUAL MAINTENANCE CONTRACT FOR WATER PLANTS
  content: {
    en: `Our Annual Maintenance Contract (AMC) services are designed to ensure the continuous, safe, and efficient operation of water treatment plants throughout the year. We provide scheduled inspections, preventive maintenance, system performance monitoring, troubleshooting, and timely replacement of critical components to minimize downtime and extend equipment life.

Our AMC solutions help clients maintain optimal plant performance, comply with operational standards, and reduce unexpected repair costs, ensuring long-term reliability and peace of mind.`,
    
    ar: `تم تصميم خدمات عقد الصيانة السنوية (AMC) لدينا لضمان التشغيل المستمر والآمن والفعّال لمحطات معالجة المياه على مدار العام. نقدم فحوصات دورية، وصيانة وقائية، ومراقبة أداء الأنظمة، ومعالجة الأعطال، والاستبدال في الوقت المناسب للمكونات الحيوية، بما يساهم في تقليل فترات التوقف وإطالة العمر التشغيلي للمعدات.

تساعد حلول الصيانة السنوية التي نقدمها عملاءنا على الحفاظ على الأداء الأمثل للمحطات، والالتزام بالمعايير التشغيلية، وتقليل تكاليف الإصلاح غير المتوقعة، مما يضمن موثوقية طويلة الأمد وراحة البال.`
  },
  img: img14
},
{
  id: 2,
  title: "SERVICE PROVIDE ", // SERVICE PROVIDE WATER PLANT
  content: {
    en: `Our Water Plant Solutions are designed to provide safe, reliable, and efficient water treatment for industrial, commercial, and municipal applications. These plants effectively remove impurities, suspended solids, and harmful contaminants to ensure high-quality treated water suitable for various purposes.

We focus on sustainable water management, reducing water wastage, and ensuring compliance with environmental standards, providing turnkey solutions from design to installation and maintenance.`,
    ar: `تم تصميم حلول محطات المياه لدينا لتوفير معالجة مياه آمنة وموثوقة وفعّالة للتطبيقات الصناعية والتجارية والحضرية. تقوم هذه المحطات بإزالة الشوائب والمواد الصلبة العالقة والملوثات الضارة بكفاءة لضمان الحصول على مياه معالجة عالية الجودة مناسبة لمختلف الاستخدامات.

نركز على إدارة مستدامة للمياه، وتقليل الهدر، وضمان الامتثال للمعايير البيئية، مع تقديم حلول شاملة من التصميم إلى التركيب والصيانة.`
  },
  img: img11
},
{
  id: 3,
  title: "Spare Parts ", // SPARE PARTS SERVICE FOR WATER PLANT
  content: {
    en: `We provide high-quality spare parts and components for all types of water treatment plants, ensuring optimal performance and longevity of your systems. Our inventory includes pumps, valves, filters, membranes, and other essential equipment needed for smooth operation and maintenance.

By choosing our spare parts solutions, clients benefit from reduced downtime, increased efficiency, and reliable water treatment operations.`,
    ar: `نقدم قطع غيار ومكونات عالية الجودة لجميع أنواع محطات معالجة المياه لضمان الأداء الأمثل وطول عمر أنظمتكم. يشمل مخزوننا المضخات والصمامات والفلاتر والغشاء وأجهزة أخرى ضرورية لتشغيل وصيانة سلسة.

باختيار حلول قطع الغيار لدينا، يستفيد العملاء من تقليل وقت التوقف، وزيادة الكفاءة، وضمان عمليات معالجة مياه موثوقة.`
  },
  img: img12
},
{
  id: 4,
  title: "Chemical Substance", // CHEMICAL SUBSTANCE WATER PLANT
  content: {
   en: `Our Chemical and Water Treatment Solutions are designed to handle industrial water challenges, including the removal of harmful chemicals, scale formation, and corrosion control. We supply and utilize a wide range of water treatment chemicals such as Sodium Hypochlorite, Sodium Bisulfite, Caustic Soda (Sodium Hydroxide), Alum, Ferric Chloride, Polymers, Anti-scalants, Biocides, and pH control chemicals, tailored to specific industrial requirements.

We offer customized treatment programs for industrial processes, ensuring that water quality meets safety, regulatory, and operational standards. Our solutions help industries maintain system efficiency, protect equipment, and achieve sustainable water management practices.`,
ar: `تم تصميم حلول المعالجة الكيميائية ومعالجة المياه لدينا للتعامل مع تحديات المياه الصناعية، بما في ذلك إزالة المواد الكيميائية الضارة، ومنع تكوّن الترسبات، والسيطرة على التآكل. نقوم بتوريد واستخدام مجموعة واسعة من كيماويات معالجة المياه مثل هيبوكلوريت الصوديوم، وبيسلفيت الصوديوم، والصودا الكاوية (هيدروكسيد الصوديوم)، والشبة، وكلوريد الحديديك، والبوليمرات، ومانعات الترسبات، والمواد الحيوية المقاومة للبكتيريا، ومواد التحكم في درجة الحموضة، وذلك وفقًا لمتطلبات كل عملية صناعية.

نقدم برامج معالجة مخصصة للعمليات الصناعية لضمان أن جودة المياه تلبي معايير السلامة واللوائح التنظيمية والمتطلبات التشغيلية. وتساعد حلولنا الصناعات على الحفاظ على كفاءة الأنظمة، وحماية المعدات، وتحقيق ممارسات مستدامة لإدارة المياه.`

     },
  img: img13
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

            <div className="wm-image">
              <img src={item.img} alt={item.title} />
            </div>
          </div>
        </div>
      ))}


    </div>
  );
}

export default AfterSales

