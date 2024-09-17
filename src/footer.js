import React from "react";
import Email1 from "./email1";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {

return(
    <div class="container-fluid row bg-dark d-flex justify-content-center">
        <div className="m-auto">

        <Email1/>
        </div>
        <div className="col-sm-6">
        <h2 className="text-light h2 ms-5">Logo</h2>
        </div>
        <div className="col-sm-6 ">
        <ul class="navbar-nav me-auto d-flex flex-row-reverse">
        <li className="nav-item px-0 m-1  ">
              <a className="nav-link af" href="https://www.linkedin.com/in/mariam-qushta-3228872a3">
                <FaLinkedinIn className="al h5" />
              </a>
            </li>
            <li className="nav-item px-0 m-1  ">
              <a className="nav-link af" href="https://www.facebook.com">
                <FaFacebookF className="al h5" />
              </a>
            </li>
            <li className="nav-item px-0 m-1 ">
              <a className="nav-link af  " href="https://www.instagram.com">
                <FaInstagram className="al h5 " />
              </a>
            </li></ul>

            <p className="h6 ppp">--Copyrights 2025-- All Rights Reserved here By Mariam Ayman AbdElmenaim</p>
        </div>
   </div>)

}
export default Footer;