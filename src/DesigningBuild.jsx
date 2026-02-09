
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import img11 from "../src/images/schoolstp.webp";
import img12 from "../src/images/collegestp1.2.jpg";
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
  content: {
    en: `Our College Sewage Treatment Plants are designed to efficiently treat wastewater generated from hostels, classrooms, laboratories, and common facilities. The system ensures safe disposal and reuse of treated water for gardening, flushing, and other non-potable applications.

The plant is engineered to meet environmental regulations, reduce freshwater consumption, and promote sustainable water management within educational campuses.`,
    ar: `تم تصميم محطات معالجة مياه الصرف الصحي في الكلية لمعالجة مياه الصرف الناتجة عن المساكن الطلابية والفصول الدراسية والمختبرات والمرافق المشتركة بكفاءة عالية. يضمن النظام التخلص الآمن وإعادة استخدام المياه المعالجة لأغراض الحدائق، والمرحاض، وغيرها من الاستخدامات غير الصالحة للشرب.

تم هندسة المحطة لتلبية اللوائح البيئية، وتقليل استهلاك المياه العذبة، وتعزيز إدارة المياه المستدامة داخل الحرم الجامعي.`
  },
  img: img12
},
{
  id: 2,
  title: "School Sewage Treatment Plant",
  content: {
    en: `School Sewage Treatment Plants are specially designed to handle wastewater from washrooms, cafeterias, and playground facilities. Our systems operate safely, quietly, and hygienically to protect the health of students and staff.

Treated water can be reused for landscaping and toilet flushing, ensuring compliance with environmental standards while promoting water conservation.`,
    ar: `تم تصميم محطات معالجة مياه الصرف الصحي في المدارس خصيصًا للتعامل مع مياه الصرف القادمة من دورات المياه والكافيتريات ومرافق الملاعب. تعمل أنظمتنا بأمان وهدوء وبطريقة صحية لحماية صحة الطلاب والموظفين.

يمكن إعادة استخدام المياه المعالجة للحدائق ولغرض الترشيد في المراحيض، مما يضمن الامتثال للمعايير البيئية مع تعزيز الحفاظ على المياه.`
  },
  img: img11
},
{
  id: 3,
  title: "Resort Sewage Treatment Plant",
  content: {
    en: `Resort Sewage Treatment Plants are designed to manage wastewater from guest rooms, kitchens, swimming pools, and recreational areas. The system ensures odor-free operation and high-quality treated water suitable for irrigation and landscaping.

Our solutions help resorts maintain luxury standards while adhering to environmental regulations and sustainability goals.`,
    ar: `تم تصميم محطات معالجة مياه الصرف الصحي للمنتجعات لإدارة مياه الصرف من غرف الضيوف والمطابخ وحمامات السباحة والمناطق الترفيهية. يضمن النظام تشغيلًا خالٍ من الروائح ومياه معالجة عالية الجودة مناسبة للري والحدائق.

تساعد حلولنا المنتجعات على الحفاظ على معايير الرفاهية مع الالتزام باللوائح البيئية وتحقيق أهداف الاستدامة.`
  },
  img: img13
},
{
  id: 4,
  title: "Industrial Sewage Treatment Plant",
  content: {
    en: `Industrial Sewage Treatment Plants are engineered to treat wastewater generated from manufacturing processes, utilities, and domestic sources within industrial facilities.

Our plants ensure effective removal of contaminants, safe discharge, and water reuse possibilities, helping industries comply with environmental norms and reduce operational water costs.`,
    ar: `تم تصميم محطات معالجة مياه الصرف الصحي الصناعية لمعالجة المياه الناتجة عن عمليات التصنيع والمرافق والمصادر المنزلية داخل المنشآت الصناعية.

تضمن محطاتنا إزالة فعّالة للملوثات، والتصريف الآمن، وإمكانية إعادة استخدام المياه، مما يساعد الصناعات على الامتثال للمعايير البيئية وتقليل تكاليف المياه التشغيلية.`
  },
  img: img14
},
{
  id: 5,
  title: "Hospital Sewage Treatment Plant",
  content: {
    en: `Hospital Sewage Treatment Plants are designed to safely treat wastewater containing biological contaminants, chemicals, and medical residues from healthcare facilities.

Our systems ensure hygienic treatment, odor control, and compliance with health and environmental regulations, allowing safe reuse of treated water for non-potable applications.`,
    ar: `تم تصميم محطات معالجة مياه الصرف الصحي في المستشفيات لمعالجة المياه التي تحتوي على ملوثات بيولوجية ومواد كيميائية وبقايا طبية من المرافق الصحية بأمان.

تضمن أنظمتنا معالجة صحية، والتحكم في الروائح، والامتثال للوائح الصحية والبيئية، مما يسمح بإعادة استخدام المياه المعالجة بأمان في التطبيقات غير الصالحة للشرب.`
  },
  img: img15
},
{
  id: 6,
  title: "Beach Resort Sewage Treatment Plant",
  content: {
    en: `Beach Resort Sewage Treatment Plants are designed to operate efficiently in coastal environments, handling wastewater from guest accommodations, restaurants, and recreational facilities.

The system ensures environmentally safe treatment, protects marine ecosystems, and enables reuse of treated water for landscaping while maintaining the resort’s eco-friendly image.`,
    ar: `تم تصميم محطات معالجة مياه الصرف الصحي للمنتجعات الشاطئية لتعمل بكفاءة في البيئات الساحلية، وتعالج مياه الصرف من أماكن إقامة الضيوف والمطاعم والمرافق الترفيهية.

يضمن النظام معالجة آمنة بيئيًا، وحماية النظم البيئية البحرية، وتمكين إعادة استخدام المياه المعالجة للحدائق مع الحفاظ على الصورة الصديقة للبيئة للمنتجع.`
  },
  img: img16
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
};

export default DesigningBuild;
