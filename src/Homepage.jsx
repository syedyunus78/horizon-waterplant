import React from 'react'
import img1 from "../src/images/ULTRAFILTRATIONSYSTEM/WhatsApp Image 2026-01-22 at 10.38.39 PM.jpeg";
import img2 from "../src/images/ROdrinkingSystem/ro2h.jpeg";
import ufhomeimg from "../src/images/ufhome1.jpeg"
import img3 from "../src/images/CONTAINERIZED & DESALINATION SYSTEMS-images/ds1.jpeg";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="services">  
     <Card title="DESALINATION RO CONTAINERIZED SYSTEMS" slug="desalination-Ro-containerized-systems" img={img3} />
    <Card
      title=" RO DRINKING WATER SYSTEM"
      slug="landscaping-water-features"
      img={img2}
      containImage   // 👈 only for 2nd card
    />

      <Card title="ETP TO UF SYSTEM" slug="ultra-filtration-etp-ro" img={ufhomeimg}  />
    </div>
  );
};

function Card({ title, slug, img, containImage }) {
  const navigate = useNavigate();

  return (
    <div className={`card ${containImage ? "contain-img" : ""}`}>
      <img src={img} alt={title} />
      <div className="diagonal"></div>
      <div className="content">
        <h2>{title}</h2>
        <button onClick={() => navigate(`/Horizon/${slug}`)}>
          DISCOVER
        </button>
      </div>
    </div>
  );
}

export default Homepage;
