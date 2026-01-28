
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Homepage';
import Menu from './Menu';
import Features from './Features';
import Roplants from './Roplants';
import HistorySection from './HistorySection';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
   <BrowserRouter>
   <Menu/>
    <Routes>
       <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
          <Route path="/Horizon/:service" element={<Features />} />
          <Route path="/Roplant" element={  <Roplants/>} />
       
            <Route path="/History" element={ <HistorySection/>} />
             <Route path="/contact" element={  <Contact/>} />
           
      </Routes>
      <Footer/>
   </BrowserRouter>
  );
}

export default App;
