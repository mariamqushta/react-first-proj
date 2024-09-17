import React from "react";
import './App.css';
import Header from "./header";
import Home from "./home";
import {BrowserRouter,Routes,Route}from"react-router-dom"
import Skills from "./skills";
import Projects from "./projects";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Email1 from "./email1";
import Footer from "./footer";
function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
   <Route path="/" element= {<Home/> }/>
   <Route path="/home" element= {<Home/>}/>
   <Route path="/skills" element={<Skills/>}/>
   <Route path="/projects" element={<Projects/>}>
     <Route path="sec1" element={<Section1/>}/>
     <Route path="sec2" element={<Section2/>}/>
     <Route path="sec3" element={<Section3/>}/>
   </Route>
   <Route path="/email" element={<Email1/>}/>
   <Route path="/footer" element={<Footer/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
