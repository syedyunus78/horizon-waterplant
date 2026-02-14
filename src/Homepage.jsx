import React from 'react'
import img2 from "../src/images/ROdrinkingSystem/ro2h.jpeg";
import img3 from "../src/images/CONTAINERIZED & DESALINATION SYSTEMS-images/desalinationnewhomepage.jpeg";
import { useNavigate } from "react-router-dom";
import img23 from "../src/images/ETPTORO/etptoro9.jpeg"
const Homepage = () => {
  return (
    <div className="services">  
     <Card title="DESALINATION RO CONTAINERIZED SYSTEMS" slug="desalination-Ro-containerized-systems" img={img3} />
    <Card
      title=" RO DRINKING WATER SYSTEM"
      slug="landscaping-water-features"
      img={img2}
      containImage   
    />

      <Card title="ETP&STP" slug="etp&stp" img={img23}  />
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
