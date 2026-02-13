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
subtitle: "\"The world cannot exist without water\"\n\n\"لا يمكن للعالم أن يستمر بدون الماء\"",

subtitle2: "\"Water cannot be preserved without water bodies\"\n\n\"الحفاظ على المياه يعتمد على وجود المسطحات المائية\"",


text: {
  en: "It all began with the vision of CEO Mr. Nasser Muslih Alqurayqiri and Eng. Mohammed Nasser Alqurayqiri to establish a private, professional firm based in the Kingdom of Saudi Arabia, specializing in electro-civil-mechanical design and contracting works. Today, the company stands as a 43-year-old, market-leading organization specializing in water-related projects, including Water Features, Water Treatment, and Wastewater Treatment systems. With more than 6,000 successfully completed projects worldwide, it has built a strong reputation for quality, innovation, and reliability. The company operates through a strong international network with a main branch in the Kingdom of Saudi Arabia, along with regional branches across the Middle East including Saudi Arabia (KSA), UAE (Dubai), Qatar, and Oman, and an expanding presence in Africa such as Egypt, Kenya, Uganda, and Libya, South America including Brazil, and Asia covering India, Singapore, and Malaysia. Its primary production and manufacturing unit is located in India, ensuring cost-effective, high-quality solutions and timely project delivery. With extensive in-house capabilities, experienced engineering teams, and advanced manufacturing facilities, the company is fully equipped to undertake and deliver turnkey projects from A to Z, acting as a comprehensive solution provider for complex water and electro-civil-mechanical systems worldwide.",
 ar:"بدأت القصة برؤية الرئيس التنفيذي السيد ناصر مصلح القريقري والمهندس محمد ناصر القريقري لتأسيس شركة خاصة واحترافية مقرها في المملكة العربية السعودية، متخصصة في أعمال التصميم والتنفيذ الكهرو-مدنية-الميكانيكية، واليوم تقف الشركة كمنظمة رائدة في السوق منذ أكثر من 43 عامًا، ومتخصصة في المشاريع المتعلقة بالمياه بما في ذلك ميزات المياه، ومعالجة المياه، وأنظمة معالجة مياه الصرف الصحي، ومع تنفيذ أكثر من 6000 مشروع ناجح حول العالم، اكتسبت الشركة سمعة قوية في الجودة والابتكار والموثوقية، تعمل الشركة من خلال شبكة دولية قوية تضم فرعًا رئيسيًا في المملكة العربية السعودية، إلى جانب فروع إقليمية في منطقة الشرق الأوسط تشمل المملكة العربية السعودية (KSA)، ودولة الإمارات العربية المتحدة (دبي)، وقطر، وسلطنة عمان، إضافة إلى توسع متزايد في أفريقيا مثل مصر وكينيا وأوغندا وليبيا، وأمريكا الجنوبية بما في ذلك البرازيل، وآسيا التي تشمل الهند وسنغافورة وماليزيا، ويقع مركز الإنتاج والتصنيع الرئيسي في الهند، مما يضمن تقديم حلول عالية الجودة وفعّالة من حيث التكلفة مع الالتزام بمواعيد التسليم، وبفضل القدرات الداخلية الواسعة، وفرق هندسية ذات خبرة، ومرافق تصنيع متقدمة، فإن الشركة مؤهلة بالكامل لتنفيذ وتسليم المشاريع بنظام تسليم المفتاح من الألف إلى الياء، والعمل كمزود حلول متكامل للأنظمة المعقدة للمياه والأعمال الكهرو-مدنية-الميكانيكية على مستوى العالم."
},
  image: historyImg
},
  mission: {
    title: "MISSION & VISION \n\n\n  رسالتنا ورؤيتنا",
    subtitle: "Our purpose and future direction\nهدفنا وتوجهنا المستقبلي",

   text: {
    en:"We provide valuable turnkey solutions with up-to-date technology supported by professional AMC (Annual Maintenance & Control). Our vision is to be the leading provider of water-related solutions in the MEA region by partnering with global suppliers and leveraging their latest technologies, while delivering localized, customized services that fit all budgets within the required quality standards and timelines. We believe that safe, timely, and trouble-free service based on the highest quality materials is what earns appreciation and trust. By managing all stages of projects and utilizing advanced technologies, along with partnerships with world-class experts, we ensure excellence in every delivery. Our team consists of multidisciplinary professionals whose combined expertise enables the successful execution of turnkey projects, particularly in large-scale developments. Our goal is to enhance the presence of water in public spaces across the MEA region through visual and sensory experiences, supported by smart water management and advanced water treatment solutions.......",
    ar: "نقدم حلولاً متكاملة بنظام تسليم المفتاح تعتمد على أحدث التقنيات، ومدعومة بخدمات احترافية لإدارة الصيانة والتحكم (AMC – الصيانة والتحكم السنوي). تتمثل رؤيتنا في أن نكون المزود الرائد لحلول المياه في منطقة الشرق الأوسط وأفريقيا (MEA)، من خلال الشراكة مع الموردين العالميين والاستفادة من أحدث ما توصلت إليه التقنيات، مع تقديم خدمات محلية ومخصصة تلائم مختلف الميزانيات، وتلتزم بأعلى معايير الجودة والجداول الزمنية المحددة. نؤمن بأن تقديم خدمات آمنة، وفي الوقت المناسب، وخالية من المشاكل، بالاعتماد على أعلى جودة من المواد، هو الأساس لاكتساب ثقة وتقدير عملائنا. ومن خلال إدارة جميع مراحل المشاريع بكفاءة، واستخدام التقنيات المتقدمة، إلى جانب الشراكات مع خبراء عالميين من الطراز الأول، نضمن التميز في كل مرحلة من مراحل التنفيذ. يضم فريقنا كوادر متعددة التخصصات تمتلك خبرات متكاملة تُمكّننا من تنفيذ مشاريع تسليم مفتاح بنجاح، لا سيما في المشاريع واسعة النطاق. ويتمثل هدفنا في تعزيز حضور المياه في المساحات العامة في منطقة MEA من خلال تجارب بصرية وحسية متميزة، مدعومة بحلول ذكية لإدارة المياه وأنظمة متقدمة لمعالجة المياه."


   },
    image: missionImg
  },
  values: {
    title: "OUR VALUES \n\n\n قيمنا",
    subtitle: "What we believe in\nما نؤمن به",

    text :{
      en:"Our lust for high quality started as a core feature of a small family business founded 43 years ago. Since then, we have made no compromises, which has led us to evolving into an enterprise applying the highest standards of excellence in everything around us – our realizations, both small and large scale, customer service, management, day-to-day relations with our partners and most of all, our trained staff, machinery and materials. After almost 43 years of market presence we know it is all because of being radically passionate about water. Without the joy, challenge and sense of fulfilment inherent in our everyday work, this success could never have happened. We strive to make sure that every project that we do is not another task but a memorable experience, both to us and our client. The essence and the main core of the success of HORIZON are the good people standing behind it. They all have the AMC, which is: the Attitude, the Motivation and most importantly the Commitment. We consider our personnel as members of our company. Instead of building clients’ relations, we prefer to treat all our customers as humans – with needs, deserving attention, respect, and understanding. We remain true to our founding values of quality, honesty, mutual respect and hard work – this is what we understand through integrity. We believe that such an attitude has brought HORIZON the privilege of undertaking some of the highest profile projects in the Middle East. We strive to create a rewarding place to work for our employees. The camp where our labors reside was specially built to meet the highest standards and provide conditions for work-life integration, like sports and health facilities. We have also founded the Passa Foundation to protect children from the dangers of water. All this to show gratitude for our 43-year long history of balanced growth.",
      ar: "بدأ شغفنا بالجودة العالية كعنصر أساسي في شركة عائلية صغيرة تأسست قبل 43 عاماً، ومنذ ذلك الحين لم نقبل بأي تنازلات، مما قادنا إلى التطور كشركة تطبق أعلى معايير التميز في كل ما نقوم به، سواء في إنجازاتنا الصغيرة والكبيرة، أو في خدمة العملاء، أو في أساليب الإدارة، أو في علاقاتنا اليومية مع شركائنا، وقبل كل شيء في كوادرنا المدربة، ومعداتنا، وموادنا. وبعد ما يقارب 43 عاماً من التواجد في السوق، ندرك أن هذا النجاح يعود إلى شغفنا العميق بالمياه. فلولا المتعة والتحدي والشعور بالإنجاز الكامن في عملنا اليومي، لما تحقق هذا النجاح. نحن نحرص على أن يكون كل مشروع ننفذه تجربة مميزة لا مجرد مهمة عابرة، سواء لنا أو لعملائنا. إن جوهر نجاح شركة هورايزن يتمثل في الأشخاص الأكفاء الذين يقفون خلفها، حيث يتمتعون جميعاً بمفهوم AMC، وهو: السلوك، والدافع، والأهم الالتزام. نحن نعتبر موظفينا جزءاً من عائلتنا، وبدلاً من بناء علاقات تقليدية مع العملاء، نفضل التعامل معهم كأشخاص لهم احتياجات ويستحقون الاهتمام والاحترام والتفهم. نلتزم بقيمنا الأساسية المتمثلة في الجودة، والصدق، والاحترام المتبادل، والعمل الجاد، وهو ما نُعبر عنه بالنزاهة. ونؤمن بأن هذا النهج قد منح هورايزن شرف تنفيذ بعض أبرز المشاريع في منطقة الشرق الأوسط. كما نحرص على توفير بيئة عمل مُجزية لموظفينا، حيث تم إنشاء معسكرات سكن العمال وفق أعلى المعايير لتوفير توازن بين العمل والحياة، بما في ذلك المرافق الرياضية والصحية. إضافة إلى ذلك، قمنا بتأسيس مؤسسة باسا لحماية الأطفال من مخاطر المياه، تعبيراً عن امتناننا لمسيرة نمو متوازن امتدت على مدار 43 عاماً."

    }
 
,
    image: ValuesImg
  },
  goals: {
    title: "OUR GOALS \n\n\n أهدافنا",
    subtitle: "Where we are heading\nإلى أين نتجه",

   text: {
  en: "To provide complete and valuable turnkey solutions for Water Features based on up-to-date technology, supported by professional after-sales services. Our aim is to distinguish ourselves and become the leading firm in the MEA region for Water Features solutions.",
  ar: "لتقديم حلول متكاملة وقيمة لتصميم وتنفيذ ميزات المياه، تعتمد على أحدث التقنيات ومدعومة بخدمات احترافية لما بعد البيع. ونسعى إلى تمييز أنفسنا وأن نصبح الشركة الرائدة في منطقة الشرق الأوسط وأفريقيا في حلول ميزات المياه."
}

,
     image: goalsImg
  }
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

        <span
          className={activeTab === "values" ? "active" : ""}
          onClick={() => setActiveTab("values")}
        >
          VALUES
        </span>

        <span
          className={activeTab === "goals" ? "active" : ""}
          onClick={() => setActiveTab("goals")}
        >
          GOALS
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
