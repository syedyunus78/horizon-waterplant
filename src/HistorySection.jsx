import React, { useState } from "react";

import historyImg from "../src/images/WhatsApp Image 2026-01-20 at 10.10.01 PM.jpeg";
import missionImg from "../src/images/misson.jpeg";
import ValuesImg from "../src/images/values.jpeg";
import goalsImg from "../src/images/WhatsApp Image 2026-01-22 at 10.38.48 PM.jpeg"

export default function HistorySection() {
  const [activeTab, setActiveTab] = useState("history");

 const content = {
  history: {
    title: "OUR HISTORY",
    subtitle: "When water becomes your passion !",
    text: "It all began with CEO Mr.NASSER MUSLIH ALQURAYQIRI  and Eng. MD Er.MOHAMMED NASSER ALQURAYQIRI, the founder of WATERMASTER s.a.r.l., in 1980 in Lebanon. The objective was to establish a private professional firm engaged in electro-mechanical design and contracting works,WATERMASTER is a 43-year-old, market-leading company that specializes in water-related projects encompassing Wellness & Pools, Water Features, and Water/ Waste Water Treatment. With over 6,000 completed projects around the world and Five branches in Lebanon, Qatar, UAE, Oman, Grenada (Caraibes) and soon in KSA, we have the in-house capabilities and resources to undertake and deliver turnkey projects from A to Z in the role of a complex solution provider,...",
    image: historyImg
  },
  mission: {
    title: "MISSION & VISION",
    subtitle: "Our purpose and future direction",
    text: "We provide valuable turnkey solutions with up-to-date technology supported by professional After-Sales services,To be the leading provider of water-related solutions in the MEA region by partnering with global suppliers, and leveraging their latest technologies, while providing a local and customized suitable service fitting all budgets within the quality and timeframe needed,Just as we believe that a safe, timely, trouble-free service based on the highest quality materials is what achieves most appreciation and trust, our vision is to excel by handling all stages of projects, while leveraging the latest technologies. Partnering with world-class experts makes us capable of doing so.Our team counts 1000 employees whose multidisciplinary competences enable the provision of a turnkey effect. We want this potential to be explored in large-scale developments. Our goal is to increase the presence of water in the public space of the MEA region via visual and sensual experience, as well as through smart water management and treatment. ...",
    image: missionImg
  },
  values: {
    title: "OUR VALUES",
    subtitle: "What we believe in",
    text: "Our lust for high quality started as a core feature of a small family business founded 43 years ago. Since then, we have made no compromises, which has led us to evolving into an enterprise applying the highest standards of excellence in everything around us – our realizations, both small and large scale, customer service, management, day-to-day relations with our partners and most of all, our trained staff, machinery and materials.,After almost 43 years of market presence we know it is all because of being radically passionate about water. Without the joy, challenge and sense of fulfilment inherent in our everyday work, this success could never have happened. We strive to make sure that every project that we do is not another task but a memorable experience, both to us and our client,The essence and the main core of the success of HORIZON are the good people standing behind it. They all have the AMC, which is : the Attitude, The Motivation and most importantly the Commitment. We consider our personnel as members of our company. Instead of building clients’ relations, we prefer to treat all our customers as humans - with needs, deserving attention, respect, and understanding,We remain true to our founding values of quality, honesty, mutual respect and hard work – this is what we understand through integrity. We believe that such an attitude has brought HORIZON the privilege of undertaking some of the highest profile projects in the Middle East. We strive to create a rewarding place to work for our employees. The camp where our labors reside, was specially built to meet the highest standards and provide conditions for work-life integration, like sports and health facilities. We have also founded the Passa Foundation – to protect children from the dangers of water. All this to show gratitude for our 43- year long history of balanced growth....",
    image: ValuesImg
  },
  goals: {
    title: "OUR GOALS",
    subtitle: "Where we are heading",
    text: "To provide complete valuable turnkey solutions for Water Features based on up-to-date technology supported by professional After-Sales support.,To distinguish ourselves and become the leading firm in MEA region in Water Features solutions....",
     image: goalsImg
  }
};
  return (
    <div className="history-wrapper">

      <div className="history-tabs">
        <span className={activeTab === "history" ? "active" : ""} onClick={() => setActiveTab("history")}>HISTORY</span>
        <span className={activeTab === "mission" ? "active" : ""} onClick={() => setActiveTab("mission")}>MISSION & VISION</span>
        <span className={activeTab === "values" ? "active" : ""} onClick={() => setActiveTab("values")}>VALUES</span>
        <span className={activeTab === "goals" ? "active" : ""} onClick={() => setActiveTab("goals")}>GOALS</span>
      </div>

      <div className="history-content">
        <div className="history-image">
          <img src={content[activeTab].image} alt={content[activeTab].title} />
        </div>

        <div className="history-text">
          <h2>{content[activeTab].title}</h2>
          <h4>{content[activeTab].subtitle}</h4>
          <p>{content[activeTab].text}</p>
        </div>
      </div>

    </div>
  );
}
