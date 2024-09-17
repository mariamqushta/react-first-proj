import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Section1 = (prop) => {
  return (
    <section id="section1" className="pb-4 pt-4 col-sm-4">
    
    
     <div className="divf  rounded-4 py-1 px-1 sec4 container  ">
       <img src={prop.img}    alt="image" className="image11 h-100 w-100 rounded-4"/>
       <div className="overlay rounded-4 " >
        <h2>Business Startup</h2>
        <p>Design & Development</p>
    </div>


    </div>
    </section>
  );
};

export default Section1;
