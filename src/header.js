import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const location = useLocation();

  const handleSetActive = (to) => {
    console.log(to);
  };
  let show =()=>{
    const mynavbar = document.getElementById("mynavbar")
    if(mynavbar.classList.contains('show')){
      mynavbar.classList.remove("show")
    }else{
      mynavbar.classList.add("show")
    }
  }
//justify-content-end
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
      <div className="container">
        <h2 className="text-light h2 ms-2">Logo</h2>
        <div className="justify-content-end">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar" onClick={show}>
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
            <li className="nav-item mx-3">
              {location.pathname === '/' ? (
                <ScrollLink
                  activeClass="active"
                  to="home-section"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onSetActive={handleSetActive}
                  className="nav-link mx-3"
                >
                  Home
                </ScrollLink>
              ) : (
                <RouterLink to="/home" className="nav-link mx-3">Home</RouterLink>
              )}
            </li>
            <li className="nav-item">
              {location.pathname === '/' ? (
                <ScrollLink
                  activeClass="active"
                  to="skills-section"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onSetActive={handleSetActive}
                  className="nav-link mx-3"
                >
                  Skills
                </ScrollLink>
              ) : (
                <RouterLink to="/skills" className="nav-link mx-3">Skills</RouterLink>
              )}
            </li>
            <li className="nav-item">
            {location.pathname === '/' ? (
                <ScrollLink
                  activeClass="active"
                  to="projects-section"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onSetActive={handleSetActive}
                  className="nav-link mx-3"
                >
                  Projects
                </ScrollLink>
              ) : (
                <RouterLink to="/projects" className="nav-link mx-3">Projects</RouterLink>
              )}
            </li>
            <li className="nav-item">
              <a className="nav-link licon1 px-0 m-1 " href="https://www.linkedin.com/in/mariam-qushta-3228872a3">
                <FaLinkedinIn className="licon h5" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link licon1 px-0 m-1" href="https://www.facebook.com">
                <FaFacebookF className="licon h5" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link licon1 me-2 px-0 m-1 me-3" href="https://www.instagram.com">
                <FaInstagram className="licon h5 " />
              </a>
            </li>
           
          </ul>
          <form class="d-flex">
          <div className="btnb">
              <button type="button" className="btn p-2 text-light border border-light btn1"><span>Let's connect</span></button>
            </div>
      </form>
            
           
        </div></div>
      </div>
    </nav>
  );
};

export default Header;