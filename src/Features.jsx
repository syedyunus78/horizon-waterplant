import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import img1 from "../src/images/CONTAINERIZED & DESALINATION SYSTEMS-images/whowearedesalinationnew.jpeg";
import img2 from "../src/images/CONTAINERIZED & DESALINATION SYSTEMS-images/ds5.jpeg";
import img3 from "../src/images/CONTAINERIZED & DESALINATION SYSTEMS-images/ds2.jpeg";
import img4 from "../src/images/CONTAINERIZED & DESALINATION SYSTEMS-images/ds3.jpeg";
import img5 from "../src/images/CONTAINERIZED & DESALINATION SYSTEMS-images/ds4.jpeg";
import img107 from "../src/images/CONTAINERIZED & DESALINATION SYSTEMS-images/ds6.jpeg";
import img108 from "../src/images/CONTAINERIZED & DESALINATION SYSTEMS-images/group-saudi-businessmen-having-meeting-600nw-2645039301.jpg";
import img109 from "../src/images/CONTAINERIZED & DESALINATION SYSTEMS-images/ds8.jpeg";
import img110 from "../src/images/CONTAINERIZED & DESALINATION SYSTEMS-images/ds9.jpeg";


import img6 from "../src/images/ROdrinkingSystem/ronew1manic.jpeg"
import img7 from "../src/images/ROdrinkingSystem/ro2h.jpeg"
import img9 from "../src/images/ROdrinkingSystem/ro4.jpeg"
import img10 from "../src/images/ROdrinkingSystem/roplant2imgnew.jpeg"
import img11 from "../src/images/ROdrinkingSystem/ro6.jpeg"
import img12 from "../src/images/ROdrinkingSystem/ro7.jpeg"
import img13 from "../src/images/ROdrinkingSystem/ro8.jpeg"
import img14 from "../src/images/ROdrinkingSystem/ro1.jpeg"


import img15 from "../src/images/ETPTORO/etptoro5.jpeg"
import img16 from "../src/images/ETPTORO/etptoro1.jpeg"
import img17 from "../src/images/ETPTORO/etptoro2.jpeg"
import img18 from "../src/images/ETPTORO/etptoro4.jpeg"
import img19 from "../src/images/ETPTORO/etptoro3.jpeg"
import img20 from "../src/images/ETPTORO/etptoro6.jpeg"
import img21 from "../src/images/ETPTORO/etptoro7 (1).jpeg"
import img22 from "../src/images/ETPTORO/etptoro7 (3).jpeg"
import img23 from "../src/images/ETPTORO/etptoro9.jpeg"








const Features = () => {

  const { service } = useParams();

  const serviceMap = {
    "etp&stp": "ETP&STP",
    "landscaping-water-features": "LANDSCAPING & RO DRINKING WATER FEATURES",
    "desalination-Ro-containerized-systems": "DESALINATION RO CONTAINERIZED SYSTEMS"
  };

  const selectedService = serviceMap[service];
  const serviceData = {
    "ETP&STP": {
      swiper: [
        { img: img15, },
        { img: img21, },
        { img: img16, },
        { img: img22, },
        { img: img17, },
        { img: img23, },
        { img: img18, },
        { img: img19, },
        { img: img20, },

      ],
     sections: [
  {
    id: 1,
    title: "About Our ETP & STP Solutions",
    content: {
      en: `We specialize in advanced Effluent Treatment Plants (ETP) and Sewage Treatment Plants (STP) designed to treat industrial and domestic wastewater efficiently. Our systems ensure safe discharge or reuse of treated water while meeting environmental regulations and sustainability standards.`,

      ar: `نحن متخصصون في تصميم وتنفيذ محطات معالجة مياه الصرف الصناعي (ETP) ومحطات معالجة مياه الصرف الصحي (STP) المتقدمة لمعالجة المياه بكفاءة عالية. تضمن أنظمتنا تصريفًا آمنًا أو إعادة استخدام المياه المعالجة وفقًا للمعايير البيئية ومتطلبات الاستدامة.`
    },
    img: img15
  },

  {
    id: 2,
    title: "Our ETP & STP Services",
    content: {
      en: `We provide complete ETP and STP solutions including:
- Design and engineering of wastewater treatment systems.
- Supply, installation, and commissioning of treatment plants.
- Biological, chemical, and physical treatment processes.
- Operation and maintenance services.
- After-sales support including spare parts and system upgrades.`,

      ar: `نقدم حلولاً متكاملة لمحطات ETP و STP تشمل:
- تصميم وهندسة أنظمة معالجة مياه الصرف.
- توريد وتركيب وتشغيل المحطات.
- عمليات المعالجة البيولوجية والكيميائية والفيزيائية.
- خدمات التشغيل والصيانة.
- خدمات ما بعد البيع بما في ذلك قطع الغيار وتطوير الأنظمة.`
    },
    img: img16
  },

  {
    id: 3,
    title: "Contact Us for ETP & STP Projects",
    content: {
      en: `Our engineering team is ready to support your industrial or municipal wastewater treatment requirements. From feasibility study and system design to installation and long-term maintenance, we deliver efficient, compliant, and cost-effective treatment solutions.`,

      ar: `فريقنا الهندسي على استعداد لدعم متطلباتكم في معالجة مياه الصرف الصناعي أو البلدي. من دراسة الجدوى وتصميم النظام إلى التركيب والصيانة طويلة الأمد، نقدم حلول معالجة فعّالة ومتوافقة وذات تكلفة مناسبة.`
    },
    img: img17
  },

  {
    id: 4,
    title: "Key Advantages of ETP & STP Systems",
    content: {
      en: `Our ETP and STP systems offer several advantages including regulatory compliance, reduced environmental impact, efficient removal of contaminants, odor control, and water reuse capability. Our plants are designed for reliable operation, energy efficiency, and minimal maintenance.`,

      ar: `توفر أنظمة ETP و STP لدينا العديد من المزايا مثل الامتثال للأنظمة البيئية، تقليل التأثير البيئي، إزالة فعّالة للملوثات، التحكم في الروائح، وإمكانية إعادة استخدام المياه. تم تصميم محطاتنا لضمان التشغيل الموثوق وكفاءة الطاقة وسهولة الصيانة.`
    },
    img: img18
  },

  {
    id: 5,
    title: "Applications of ETP & STP Systems",
    content: {
      en: `ETP systems are widely used in industries such as textiles, pharmaceuticals, food processing, chemicals, and manufacturing plants. STP systems are applied in residential complexes, commercial buildings, hotels, hospitals, and municipal projects for safe sewage treatment and reuse.`,

      ar: `تُستخدم أنظمة ETP في العديد من الصناعات مثل النسيج، الأدوية، الصناعات الغذائية، الكيماويات، والمصانع المختلفة. أما أنظمة STP فتُستخدم في المجمعات السكنية والمباني التجارية والفنادق والمستشفيات والمشاريع البلدية لمعالجة مياه الصرف الصحي وإعادة استخدامها بأمان.`
    },
    img: img19
  },

  {
    id: 6,
    title: "Why Choose Our ETP & STP Technology",
    content: {
      en: `Our wastewater treatment technology is engineered for durability, efficiency, and long-term performance. With advanced treatment processes, automated control systems, and expert engineering support, we deliver plants that minimize operational costs and ensure compliance with international environmental standards.`,

      ar: `تم تصميم تقنيات معالجة مياه الصرف لدينا لتحقيق المتانة والكفاءة والأداء طويل الأمد. من خلال عمليات معالجة متقدمة وأنظمة تحكم آلية ودعم هندسي متخصص، نقدم محطات تقلل من تكاليف التشغيل وتضمن الامتثال للمعايير البيئية الدولية.`
    },
    img: img20
  }
]

    },



    "LANDSCAPING & RO DRINKING WATER FEATURES": {
      swiper: [
        { img: img6, },
        { img: img7, },
        { img: img10, },
        { img: img9, },
        { img: img12, },
        { img: img14, },
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
        },
        {
          id: 4,
          title: "Key Benefits of Reverse Osmosis Technology",
          content: {
            en: `Reverse Osmosis technology offers exceptional removal of dissolved salts, heavy metals, bacteria, and other contaminants, delivering consistently high-purity water. Our RO systems are engineered for high recovery rates, stable operation, and reduced fouling, ensuring efficient performance and lower operating costs over the system’s lifetime.`,
            ar: `توفر تقنية التناضح العكسي كفاءة عالية في إزالة الأملاح الذائبة والمعادن الثقيلة والبكتيريا والملوثات الأخرى، مما يضمن إنتاج مياه عالية النقاء بشكل مستمر. تم تصميم أنظمة RO لدينا لتحقيق معدلات استرجاع مرتفعة وتشغيل مستقر وتقليل الترسبات، مما يضمن أداءً فعالاً وتكاليف تشغيل أقل على المدى الطويل.`
          },
          img: img12
        },
        {
          id: 5,
          title: "Applications of RO Water Treatment Plants",
          content: {
            en: `Our RO plants are widely used in drinking water production, desalination of brackish and seawater, industrial process water, boiler feed water, food and beverage processing, and pharmaceutical applications. Each system is customized to meet specific water quality standards and regulatory requirements.`,
            ar: `تُستخدم محطات RO لدينا على نطاق واسع في إنتاج مياه الشرب، وتحلية المياه المالحة ومياه البحر، ومياه العمليات الصناعية، ومياه تغذية الغلايات، وصناعات الأغذية والمشروبات، والتطبيقات الصيدلانية. يتم تخصيص كل نظام لتلبية معايير جودة المياه والمتطلبات التنظيمية المحددة.`
          },
          img: img13
        },
        {
          id: 6,
          title: "Why Choose Our RO Systems",
          content: {
            en: `Our RO systems combine advanced membrane technology, automated control systems, and expert engineering support to deliver reliable and efficient water treatment solutions. With a focus on durability, energy optimization, and international quality standards, we ensure long-term performance and customer satisfaction.`,
            ar: `تجمع أنظمة RO لدينا بين تقنيات الأغشية المتقدمة وأنظمة التحكم الآلي والدعم الهندسي المتخصص لتقديم حلول معالجة مياه موثوقة وفعّالة. مع التركيز على المتانة وتحسين استهلاك الطاقة والالتزام بالمعايير الدولية للجودة، نضمن أداءً طويل الأمد ورضا العملاء.`
          },
          img: img14
        }

      ]

    },

    "DESALINATION RO CONTAINERIZED SYSTEMS": {
      swiper: [
        { img: img1, },
        { img: img2, },
        { img: img3, },
        { img: img4, },
        { img: img5, },

        { img: img107, },
        { img: img108 },
        { img: img109 },
        { img: img110 },
      ],
      sections: [
        {
          id: 1,
          title: "Who we are",
          content: {
            en: `Horizon is a market-leading company that specializes in water-related projects encompassing Water Features and Water / Waste Water Treatment. 
With over 4,000 completed projects around the world and  we have the in-house capabilities and resources to undertake and deliver turnkey projects from A to Z as a complete solution provider.`,
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
        },
        {
          id: 4,
          title: "Our Vision",
          content: {
            en: `Our vision is to become a globally recognized leader in sustainable water solutions by delivering innovative, efficient, and environmentally responsible projects. We strive to contribute to water conservation, resource optimization, and long-term value creation for our clients and communities.`,
            ar: `تتمثل رؤيتنا في أن نصبح شركة رائدة عالميًا في حلول المياه المستدامة من خلال تقديم مشاريع مبتكرة وفعّالة ومسؤولة بيئيًا. نسعى للمساهمة في الحفاظ على الموارد المائية وتحسين استخدامها وخلق قيمة طويلة الأمد لعملائنا والمجتمعات التي نخدمها.`
          },
          img: img107
        },
        {
          id: 5,
          title: "Our Mission",
          content: {
            en: `Our mission is to deliver high-quality water and wastewater treatment solutions through engineering excellence, advanced technologies, and professional project management. We are committed to meeting international standards, exceeding client expectations, and ensuring reliable performance across all projects.`,
            ar: `مهمتنا هي تقديم حلول عالية الجودة لمعالجة المياه ومياه الصرف الصحي من خلال التميز الهندسي والتقنيات المتقدمة وإدارة المشاريع الاحترافية. نلتزم بالمعايير الدولية وتجاوز توقعات العملاء وضمان الأداء الموثوق في جميع مشاريعنا.`
          },
          img: img108
        },
        {
          id: 6,
          title: "Why Choose Horizon",
          content: {
            en: `With extensive industry experience, a skilled multidisciplinary team, and a strong track record of successful projects, Horizon stands as a trusted partner in water solutions. Our integrated approach, attention to detail, and commitment to quality ensure efficient project delivery and long-term client satisfaction.`,
            ar: `بفضل خبرتنا الواسعة في القطاع وفريقنا المتخصص متعدد التخصصات وسجلنا القوي من المشاريع الناجحة، تُعد هورايزن شريكًا موثوقًا في حلول المياه. يضمن نهجنا المتكامل واهتمامنا بالتفاصيل والتزامنا بالجودة تنفيذ المشاريع بكفاءة وتحقيق رضا العملاء على المدى الطويل.`
          },
          img: img2
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

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <br />
      <br />
      {sections.map((item, index) => (
        <div key={item.id} className={`section-wrapper ${index % 2 !== 0 ? "reverse" : ""}`}>

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
