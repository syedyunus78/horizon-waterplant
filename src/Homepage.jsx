import React from 'react'
import img1 from "../src/images/ULTRAFILTRATIONSYSTEM/WhatsApp Image 2026-01-22 at 10.38.39 PM.jpeg";
import img2 from "../src/images/ROdrinkingSystem/WhatsApp Image 2026-01-22 at 9.48.42 PM.jpeg";
import img3 from "../src/images/CONTAINERIZED & DESALINATION SYSTEMS-images/WhatsApp Image 2026-01-22 at 10.40.14 PM.jpeg";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="services"> 
      <Card title="ULTRA FILTRATION SYSTEM" slug="ultra-filtration" img={img1} />
      <Card title="LANDSCAPING & RO DRINKING WATER FEATURES" slug="landscaping-water-features" img={img2} />
      <Card title="CONTAINERIZED & DESALINATION SYSTEMS" slug="containerized-desalination-systems" img={img3} />
    </div>
  );
};

function Card({ title, img, slug }) {
  const navigate = useNavigate();

  return (
    <div className="card">
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
