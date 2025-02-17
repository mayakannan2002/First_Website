import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header1 from "./Components/Header1/Header1";
import Header2 from "./Components/Header2/Header2";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About/About";
import WebAppDevelopment from "./Components/Pages/Servicespage/Webdevelopement";
import MobileAppDevelopment from "./Components/Pages/Servicespage/Mobiledevelopement";
import Clients from "./Components/Pages/Clients/Clients";
import Working from "./Components/Pages/Working_Space/Working";
import Contact from "./Components/Pages/Contact/Contact";
import Carrer from "./Components/Pages/Carrer/Carrer_policy";


function App() {
  return (
    <div className="App">

     <Router>
      <Header1 />
      <Header2 />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About/>} />
      <Route path="/SWeb" element={<WebAppDevelopment/>} />
      <Route path="/SWebmoile" element={<MobileAppDevelopment/>} />
      <Route path="/clients" element={<Clients/>} />
      <Route path="/space" element={<Working/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/carrer" element={<Carrer/>} />


     </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
