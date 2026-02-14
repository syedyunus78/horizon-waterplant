import React, { useEffect, useState } from "react";

import historyImg from "../src/images/WhatsApp Image 2026-01-20 at 10.10.01 PM.jpeg";
import missionImg from "../src/images/missionvisionnew.jpeg";
import ValuesImg from "../src/images/values.jpeg";
import goalsImg from "../src/images/WhatsApp Image 2026-01-22 at 10.38.48 PM.jpeg"
import { useParams } from "react-router-dom";

export default function HistorySection() {

   const { tab } = useParams();

  const [activeTab, setActiveTab] = useState("history");

  useEffect(() => {
    if (tab) {
      setActiveTab(tab);
    }
  }, [tab]);
 

 const content = {
  history: {
 title: "OUR HISTORY \n\n\n تاريخنا",
subtitle: "\"THE WORLD CANNOT EXIST WITHOUT WATER\"\n\n\"لا يمكن للعالم أن يستمر بدون الماء\"",

subtitle2: "\"WATER CANNOT BE PRESERVED WITHOUT WATER BODIES\"\n\n\"الحفاظ على المياه يعتمد على وجود المسطحات المائية\"",


text: {
  en: "It all began with the vision of CEO Mr. Nasser Muslih Alqurayqiri and Eng. Mohammed Nasser Alqurayqiri to establish a private, professional firm based in the Kingdom of Saudi Arabia, specializing in electro-civil-mechanical design and contracting works. Today, the company stands as a 34-year-old market-leading organization specializing in water-related projects, including Water Features, Water Treatment, and Wastewater Treatment systems. With more than 4,000 successfully completed projects worldwide, the company has built a strong reputation for quality, innovation, and reliability. We have successfully completed projects in the following countries: Saudi Arabia (KSA), United Arab Emirates (Dubai), Qatar, Oman, Egypt, Kenya, Uganda, Libya, Brazil, India, Singapore, and Malaysia. Its primary production and manufacturing unit is located in India, ensuring cost-effective, high-quality solutions and timely project delivery. With extensive in-house capabilities, experienced engineering teams, and advanced manufacturing facilities, the company is fully equipped to undertake and deliver turnkey projects from A to Z, acting as a comprehensive solution provider for complex water and electro-civil-mechanical systems worldwide.",

  ar: "بدأت القصة برؤية الرئيس التنفيذي السيد ناصر مصلح القريقري والمهندس محمد ناصر القريقري لتأسيس شركة خاصة واحترافية مقرها في المملكة العربية السعودية، متخصصة في أعمال التصميم والتنفيذ الكهرو-مدنية-الميكانيكية. واليوم تُعد الشركة منظمة رائدة في السوق منذ أكثر من 34 عامًا ومتخصصة في المشاريع المتعلقة بالمياه بما في ذلك ميزات المياه، ومعالجة المياه، وأنظمة معالجة مياه الصرف الصحي. ومع تنفيذ أكثر من 4000 مشروع ناجح حول العالم، اكتسبت الشركة سمعة قوية في الجودة والابتكار والموثوقية. وقد نفذت الشركة مشاريع في الدول التالية: المملكة العربية السعودية، الإمارات العربية المتحدة (دبي)، قطر، سلطنة عمان، مصر، كينيا، أوغندا، ليبيا، البرازيل، الهند، سنغافورة، وماليزيا. ويقع مركز الإنتاج والتصنيع الرئيسي في الهند، مما يضمن تقديم حلول عالية الجودة وفعّالة من حيث التكلفة مع الالتزام بمواعيد التسليم. وبفضل القدرات الداخلية الواسعة، وفرق هندسية ذات خبرة، ومرافق تصنيع متقدمة، فإن الشركة مؤهلة بالكامل لتنفيذ وتسليم المشاريع بنظام تسليم المفتاح من الألف إلى الياء، والعمل كمزود حلول متكامل للأنظمة المعقدة للمياه والأعمال الكهرو-مدنية-الميكانيكية على مستوى العالم."
}

,
  image: historyImg
},
  mission: {
    title: "MISSION & VISION \n\n\n  رسالتنا ورؤيتنا",
    subtitle: "Our purpose and future direction\nهدفنا وتوجهنا المستقبلي",

   text: {
  en: "We provide valuable turnkey solutions with up-to-date technology supported by professional AMC (Annual Maintenance & Control). Our vision is to be the leading provider of water-related solutions in the Middle East and Africa (MEA) region by partnering with global suppliers and leveraging their latest technologies, while delivering localized, customized services that fit all budgets within the required quality standards and timelines. We believe that safe, timely, and trouble-free service based on the highest quality materials is what earns appreciation and trust. By managing all stages of projects and utilizing advanced technologies, along with partnerships with world-class experts, we ensure excellence in every delivery. Our team consists of multidisciplinary professionals whose combined expertise enables the successful execution of turnkey projects, particularly in large-scale developments. Our goal is to enhance the presence of water in public spaces across the Middle East and Africa (MEA) region through visual and sensory experiences, supported by smart water management and advanced water treatment solutions.",

  ar: "نقدم حلولاً متكاملة بنظام تسليم المفتاح تعتمد على أحدث التقنيات، ومدعومة بخدمات احترافية لإدارة الصيانة والتحكم (AMC – الصيانة والتحكم السنوي). تتمثل رؤيتنا في أن نكون المزود الرائد لحلول المياه في منطقة الشرق الأوسط وأفريقيا (MEA)، من خلال الشراكة مع الموردين العالميين والاستفادة من أحدث ما توصلت إليه التقنيات، مع تقديم خدمات محلية ومخصصة تلائم مختلف الميزانيات، وتلتزم بأعلى معايير الجودة والجداول الزمنية المحددة. نؤمن بأن تقديم خدمات آمنة، وفي الوقت المناسب، وخالية من المشاكل، بالاعتماد على أعلى جودة من المواد، هو الأساس لاكتساب ثقة وتقدير عملائنا. ومن خلال إدارة جميع مراحل المشاريع بكفاءة، واستخدام التقنيات المتقدمة، إلى جانب الشراكات مع خبراء عالميين من الطراز الأول، نضمن التميز في كل مرحلة من مراحل التنفيذ. يضم فريقنا كوادر متعددة التخصصات تمتلك خبرات متكاملة تُمكّننا من تنفيذ مشاريع تسليم مفتاح بنجاح، لا سيما في المشاريع واسعة النطاق. ويتمثل هدفنا في تعزيز حضور المياه في المساحات العامة في منطقة الشرق الأوسط وأفريقيا (MEA) من خلال تجارب بصرية وحسية متميزة، مدعومة بحلول ذكية لإدارة المياه وأنظمة متقدمة لمعالجة المياه."
}
,
    image: missionImg
  },
 
};
  return (
    <div className="history-wrapper">

      <div className="history-tabs">
         <span
          className={activeTab === "history" ? "active" : ""}
          onClick={() => setActiveTab("history")}
        >
          HISTORY
        </span>

        <span
          className={activeTab === "mission" ? "active" : ""}
          onClick={() => setActiveTab("mission")}
        >
          MISSION & VISION
        </span>

      
      </div>

      <div className="history-content">
        <div className="history-image">
          <img src={content[activeTab].image} alt={content[activeTab].title} />
        </div>

       <div className="history-text">
  <h2>{content[activeTab].title}</h2>
 <div >
  <h5>{content[activeTab].subtitle}</h5>
  <h5 style={{ marginTop:"-13px" }}>{content[activeTab].subtitle2}</h5>
</div>

  <p>
    {content[activeTab].text.en}
    <br />
    <br />
    <span dir="rtl">{content[activeTab].text.ar}</span>
  </p>
</div>
      </div>

    </div>
  );
}
