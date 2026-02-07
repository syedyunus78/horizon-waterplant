
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Homepage';
import Menu from './Menu';
import Features from './Features';
import Roplants from './Roplants';
import HistorySection from './HistorySection';
import Contact from './Contact';
import Footer from './Footer';
import DesigningBuild from './DesigningBuild';
import GreenEnvironmental from './GreenEnvironmental';
import EffluentTreatmentPlant from './EffluentTreatmentPlant';
import ZeroPercentagedischarge from './ZeroPercentagedischarge';
import GoalFertilzer from './GoalFertilzer';
import logo from "../src/images/horizionlogonew.jpeg"
import { Link } from "react-router-dom";
import WaterEvaporator from './WaterEvaporator';
import Waterfertilzer from './Waterfertilzer';

function App() {
  return (
    <BrowserRouter>


<div className="fixed-logo">
  <Link to="/home">
    <img src={logo} alt="Logo" />
  </Link>
</div>


 

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/Horizon/:service" element={<Features />} />
        <Route path="/Roplant" element={<Roplants />} />
        <Route path="/History" element={<HistorySection />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/sewagetreatmentplant" element={ <DesigningBuild/>} />

  <Route path="/effluentTreatmentPlant" element={  <EffluentTreatmentPlant/>} />
    {/* <Route path="/designingbuild" element={ <DesigningBuild/>} /> */}
      <Route path="/greenEnvironmental" element={  <GreenEnvironmental/>} />
        <Route path="/zeropercentagedischarge" element={  <ZeroPercentagedischarge/>} />
          <Route path="/evaporator" element={  <WaterEvaporator/>} />
            <Route path="/fertilzer" element={ <Waterfertilzer/>} />
        
         
         
         
           
         
          
          
        
       
      </Routes>

      {/* WhatsApp Fixed Button */}
      <a
        href="https://wa.me/919999999999"   // replace with your number
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </a>


      <Footer />
    </BrowserRouter>
  );
}

export default App;
