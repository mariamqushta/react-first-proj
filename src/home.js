import React from "react";
import Lottie from "lottie-react";
import animationData from './assets/Animation - 1725815258898.json';
import { useTypewriter,Cursor} from "react-simple-typewriter";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Skills from "./skills";
import Projects from "./projects";
import Email1 from "./email1";
import Footer from "./footer";
const Home = () => {
    const [text] = useTypewriter({
        words: ['FrontEnd Developer', 'BackEnd Developer', 'FullStack Web Developer'],
        loop: true, // Set loop to true or a number
        typeSpeed: 150,
        deleteSpeed: 100,
    });
  return (
      <div className="mb-0 ">
        <div className="App container-fluid w-100 pb-0 mb-0">
        <section id="home-section" className="mb-0">
        <div className=" row mt-5 justify-content-center mb-0">
    <div class="col-sm-6 mt-5 ps-5 ">
        <div className="h41 ">
        <h4 className="p-2">Welcome All In My Portfolio</h4>
        </div>
        <div>
        <h1 className="">Hi! I'm Mariam Ayman Abd Elmenaim,<span>{text}</span><Cursor/></h1>
        </div>
        <p className="pp">Hello Everyone ,I have 1 years of Experience in Web Development</p>
        <h3> Let's Connect <span><FaRegArrowAltCircleRight className="icon" /></span> </h3>
    </div>
     <div class="col-sm-6 mt-2">

      <Lottie animationData={animationData} />
      </div>
      </div>
      <Skills/>
   </section></div>
   <div className="bg-dark pt-0 mt-0">
   <Projects className="mt-0"/>
 <Footer/>
   </div>
 
   </div>
  );
};

export default Home;