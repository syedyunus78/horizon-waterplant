import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import img1 from "../src/images/CONTAINERIZED & DESALINATION SYSTEMS-images/WhatsApp Image 2026-01-22 at 10.38.50 PM.jpeg";

import img3 from "../src/images/CONTAINERIZED & DESALINATION SYSTEMS-images/WhatsApp Image 2026-01-22 at 10.39.12 PM.jpeg";
import img4 from "../src/images/CONTAINERIZED & DESALINATION SYSTEMS-images/WhatsApp Image 2026-01-22 at 10.40.15 PM (1).jpeg";
import img5 from "../src/images/CONTAINERIZED & DESALINATION SYSTEMS-images/WhatsApp Image 2026-01-22 at 10.40.15 PM.jpeg"

import img6 from "../src/images/ROdrinkingSystem/WhatsApp Image 2026-01-22 at 9.48.24 PM.jpeg"
import img7 from "../src/images/ROdrinkingSystem/WhatsApp Image 2026-01-22 at 9.48.40 PM.jpeg"
import img8 from "../src/images/ROdrinkingSystem/WhatsApp Image 2026-01-22 at 9.48.42 PM.jpeg"
import img9 from "../src/images/ROdrinkingSystem/WhatsApp Image 2026-01-22 at 9.48.43 PM.jpeg"
import img10 from "../src/images/ROdrinkingSystem/WhatsApp Image 2026-01-22 at 9.48.49 PM.jpeg"
import img11 from "../src/images/ROdrinkingSystem/WhatsApp Image 2026-01-22 at 9.49.04 PM.jpeg"
import img12 from "../src/images/ROdrinkingSystem/WhatsApp Image 2026-01-22 at 9.49.12 PM.jpeg"
import img13 from "../src/images/ROdrinkingSystem/WhatsApp Image 2026-01-22 at 9.49.12 PM.jpeg"
import img14 from "../src/images/ROdrinkingSystem/WhatsApp Image 2026-01-22 at 9.49.32 PM.jpeg"
import img15 from "../src/images/ULTRAFILTRATIONSYSTEM/WhatsApp Image 2026-01-22 at 10.39.14 PM.jpeg"
import img16 from "../src/images/ULTRAFILTRATIONSYSTEM/WhatsApp Image 2026-01-22 at 10.38.39 PM.jpeg"
import img17 from "../src/images/ULTRAFILTRATIONSYSTEM/WhatsApp Image 2026-01-22 at 10.39.09 PM.jpeg"









const Features = () => {

    const { service } = useParams();

    const serviceMap = {
        "ultra-filtration": "ULTRA FILTRATION SYSTEM",
        "landscaping-water-features": "LANDSCAPING & RO DRINKING WATER FEATURES",
        "containerized-desalination-systems": "CONTAINERIZED & DESALINATION SYSTEMS"
    };

    const selectedService = serviceMap[service];
    const serviceData = {
        "ULTRA FILTRATION SYSTEM": {
           swiper: [
                { img: img17, heading: "WHO WE ARE,", subHeading: "A safe sustainable", extra: "solution" },
                { img: img15, heading: "WHAT WE DO,", subHeading: "it all comes from our", extra: "passion for water" },
                { img: img16, heading: "HEAR FROM YOU,", subHeading: "over 3000 projects with in water treatment", extra: "each with a tailor made engineering approach" },
                { img: img13, heading: "HEAR FROM YOU,", subHeading: "Hydrotherapy Solutions", extra: "eFountain systems" },
                 { img: img12, heading: "HEAR FROM YOU,", subHeading: "RO Solutions", extra: "CONTAINERIZED & DESALINATION SYSTEMS" },
            ],
            sections: [
                {
    id: 1,
    title: "About Our Ultra Filtration Systems",
    content: {
      en: `We specialize in advanced Ultra Filtration (UF) water treatment systems designed to remove suspended solids, bacteria, viruses, and colloidal particles from water. Our UF solutions provide high-quality, safe, and clear water for industrial, commercial, and municipal applications, ensuring reliable performance with low operating cost.`,
      ar: `نحن متخصصون في أنظمة الترشيح الفائق (Ultra Filtration - UF) المتقدمة المصممة لإزالة المواد العالقة والبكتيريا والفيروسات والجزيئات الدقيقة من المياه. توفر حلولنا مياه عالية الجودة وآمنة للتطبيقات الصناعية والتجارية والبلدية مع كفاءة عالية وتكلفة تشغيل منخفضة.`
    },
    img: img15
  },
  {
    id: 2,
    title: "Our UF Solutions",
    content: {
      en: `We provide complete Ultra Filtration plant services including:
- Design of UF systems for high water clarity and microbial removal.
- Supply, installation, and commissioning of UF membrane units.
- Continuous operation and performance monitoring.
- Maintenance and after-sales support with membrane replacement, spare parts, and chemical cleaning to ensure long service life.`,
      ar: `نقدم خدمات متكاملة لمحطات الترشيح الفائق تشمل:
- تصميم أنظمة UF لتحقيق أعلى نقاء للمياه وإزالة الملوثات الميكروبية.
- توريد وتركيب وتشغيل وحدات أغشية UF.
- التشغيل المستمر ومراقبة الأداء.
- الصيانة وخدمات ما بعد البيع بما في ذلك استبدال الأغشية وقطع الغيار والتنظيف الكيميائي لضمان عمر تشغيلي طويل.`
    },
    img: img16
  },
  {
    id: 3,
    title: "Contact Us for UF Solutions",
    content: {
      en: `Our experts are ready to support you with customized Ultra Filtration solutions based on your water source and quality requirements. From system selection and design to installation and after-sales service, we ensure efficient and reliable UF water treatment systems.`,
      ar: `خبراؤنا على استعداد لدعمكم بحلول ترشيح فائق مخصصة حسب مصدر المياه ومتطلبات الجودة. من اختيار النظام وتصميمه إلى التركيب وخدمات ما بعد البيع، نضمن أنظمة معالجة مياه UF فعّالة وموثوقة.`
    },
    img: img17
  }
            ]
        },



        "LANDSCAPING & RO DRINKING WATER FEATURES": {
          swiper: [
                { img: img8, heading: "WHO WE ARE,", subHeading: "A safe sustainable", extra: "solution" },
                { img: img9, heading: "WHAT WE DO,", subHeading: "it all comes from our", extra: "passion for water" },
              
                { img: img12, heading: "HEAR FROM YOU,", subHeading: "Hydrotherapy Solutions", extra: "eFountain systems" },
                 { img: img14, heading: "HEAR FROM YOU,", subHeading: "RO Solutions", extra: "CONTAINERIZED & DESALINATION SYSTEMS" },
            ],
           sections: [
  {
    id: 1,
    title: "About Our RO Plants",
    content: {
      en: `We specialize in advanced Reverse Osmosis (RO) water treatment solutions for industrial, commercial, and municipal applications. Our systems are designed to provide high-quality, safe drinking water while optimizing energy and operational costs. With years of experience and multiple successful projects worldwide, we offer turnkey solutions from design to commissioning.`,
      ar: `نحن متخصصون في حلول معالجة المياه المتقدمة باستخدام تقنية التناضح العكسي (RO) للتطبيقات الصناعية والتجارية والبلدية. تم تصميم أنظمتنا لتوفير مياه شرب عالية الجودة وآمنة مع تحسين استهلاك الطاقة وتكاليف التشغيل. مع سنوات من الخبرة والعديد من المشاريع الناجحة حول العالم، نقدم حلول متكاملة من التصميم إلى التشغيل.`
    },
    img: img6
  },
  {
    id: 2,
    title: "Our RO Solutions",
    content: {
      en: `We provide complete RO plant services including:
- System design for optimal water recovery and energy efficiency.
- Supply, installation, and commissioning of RO units.
- Regular operation and monitoring for consistent performance.
- Maintenance and after-sales support including spare parts and chemical dosing to ensure long-term reliability.`,
      ar: `نقدم خدمات متكاملة لمحطات RO تشمل:
- تصميم النظام لتحقيق أعلى نسبة استرجاع للمياه وكفاءة الطاقة.
- توريد وتركيب وتشغيل وحدات RO.
- التشغيل والمراقبة لضمان أداء مستمر.
- الصيانة وخدمات ما بعد البيع بما في ذلك قطع الغيار وتطبيق المواد الكيميائية لضمان موثوقية طويلة الأمد.`
    },
    img: img10
  },
  {
    id: 3,
    title: "Get in Touch",
    content: {
      en: `Our team is ready to assist you with customized RO solutions tailored to your water needs. Whether it’s consultation, project design, or after-sales support, we ensure reliable and efficient water treatment services.`,
      ar: `فريقنا جاهز لمساعدتك بحلول RO مخصصة تلبي احتياجاتك المائية. سواء كانت استشارة، تصميم المشروع، أو خدمات ما بعد البيع، نحن نضمن خدمات معالجة مياه موثوقة وفعّالة.`
    },
    img: img11
  }
]

        },

        "CONTAINERIZED & DESALINATION SYSTEMS": {
            swiper: [
                { img: img1, heading: "WHO WE ARE,", subHeading: "A safe sustainable", extra: "solution" },
                { img: img4, heading: "WHAT WE DO,", subHeading: "it all comes from our", extra: "passion for water" },
                { img: img3, heading: "HEAR FROM YOU,", subHeading: "over 3000 projects with in water treatment", extra: "each with a tailor made engineering approach" },
                { img: img8, heading: "HEAR FROM YOU,", subHeading: "Hydrotherapy Solutions", extra: "eFountain systems" },
                 { img: img7, heading: "HEAR FROM YOU,", subHeading: "RO Solutions", extra: "CONTAINERIZED & DESALINATION SYSTEMS" },
            ],
            sections: [
                {
                    id: 1,
                    title: "Who we are",
                    content: {
                        en: `Horizon is a market-leading company that specializes in water-related projects encompassing Water Features and Water / Waste Water Treatment. 
With over 6,000 completed projects around the world and three branches in Lebanon, Qatar and UAE, we have the in-house capabilities and resources to undertake and deliver turnkey projects from A to Z as a complete solution provider.`,
                        ar: `تُعد شركة هورايزن شركة رائدة في السوق ومتخصصة في المشاريع المتعلقة بالمياه، بما في ذلك ميزات المياه ومعالجة مياه الشرب ومياه الصرف الصحي.
ومع أكثر من 6000 مشروع تم تنفيذه حول العالم وثلاثة فروع في لبنان وقطر والإمارات العربية المتحدة، نمتلك القدرات والموارد الداخلية لتنفيذ وتسليم المشاريع المتكاملة بنظام تسليم المفتاح من الألف إلى الياء بصفتنا مزود حلول متكاملة.`
                    },
                    img: img1
                },

                {
                    id: 2,
                    title: "What we do",
                    content: {
                        en: `Design of a treatment system for optimized performance and cost-effective operation.
Plant supply, installation & commissioning.
Plant operation.
After-sales support through specialized maintenance, including spare parts supply and chemical application to ensure high efficiency and long equipment life.`,
                        ar: `تصميم نظام المعالجة لتحقيق أفضل أداء وتكلفة تشغيلية فعّالة.
توريد وتركيب وتشغيل محطات المعالجة.
تشغيل المحطات.
خدمات ما بعد البيع من خلال صيانة متخصصة تشمل توريد قطع الغيار وتطبيق المواد الكيميائية لضمان أعلى كفاءة وإطالة عمر المعدات.`
                    },
                    img: img3
                },

                {
                    id: 3,
                    title: "Hear from you",
                    content: {
                        en: `Horizon is here to provide you with more information, answer any questions you may have, and create a complete solution tailored to your needs.`,
                        ar: `هورايزن هنا لتزويدكم بمزيد من المعلومات، والإجابة على جميع استفساراتكم، وتقديم حل متكامل مصمم خصيصاً لتلبية احتياجاتكم.`
                    },
                    img: img5
                }
            ]


        }
    };

    const swiperImages = serviceData[selectedService].swiper;
    const sections = serviceData[selectedService].sections;

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((e) => e.isIntersecting && e.target.classList.add("show"));
        }, { threshold: 0.3 });

        document.querySelectorAll(".section-wrapper").forEach(sec => observer.observe(sec));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="features-page">

          <Swiper modules={[Autoplay]} autoplay={{ delay: 3000 }} loop className="hero-swiper">

    {/* Back to Home Tag */}
    <Link to="/home" className="back-home-tag">
      ← Back to Home
    </Link>

    {swiperImages.map((slide, i) => (
      <SwiperSlide key={i}>
        <div
          className="slide-content"
          style={{ "--bg-image": `url(${slide.img})` }}
        >
          <img src={slide.img} alt={`slide-${i}`} />
          <div className="overlay">
            <h3>{slide.subHeading}</h3>
            <h4>{slide.extra}</h4>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

            <br />
            <br />
            {sections.map((item) => (
                <div key={item.id} className="section-wrapper">

                    <div className="wm-section">
                        <div className="wm-text">
                            <span className="h-line"></span>
                            <br />

                            <div className="section-bar">
                                <h2>{item.title}</h2>
                            </div>


                            <p>{item.content.en}</p>
                            <p>{item.content.ar}</p>
                            <button className="wm-btn">DISCOVER MORE</button>
                        </div>

                        <div className="wm-image">
                            <img src={item.img} alt={item.title} />
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="partner-title line-animate">
                        <svg width="100%" height="40" viewBox="0 0 1000 40" preserveAspectRatio="none">
                            <polyline
                                className="zigzag-line"
                                points="0,38 750,38 760,2 1000,3"
                                fill="none"
                                stroke="#6b7f2a"
                                strokeWidth="3"
                            />
                        </svg>
                    </div>
                    <br />
                    <br />
                </div>
            ))}

        </div>
    );
};

export default Features;
