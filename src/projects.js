import { React,useState} from "react";
import { Outlet, Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Email1 from "./email1";
// import { Link as ScrollLink } from 'react-scroll';



const Projects=()=>{

  const location = useLocation();

  const handleSetActive = (to) => {
    console.log(to);
  };

  const images =[{
    img:"/Freepik_ Download Free Videos, Vectors, Photos, and PSD.jpg" 
  },{
    img:"/Premium Vector _ Girl work from home.jpg" 
  },
{
  img:"/Premium Vector _ Woman working at laptop from home illustration.jpeg" 
},{
  img:"/Freepik_ Download Free Videos, Vectors, Photos, and PSD.jpg" 
},{
  img:"/Premium Vector _ Girl work from home.jpg" 
},{
  img:"/Premium Vector _ Woman working at laptop from home illustration.jpeg" 
}

]
  

const [sec2, setSec2] = useState(true);
const [isActive, setIsActive] = useState(false); 

const handleToggleSection = () => {
 
  setIsActive((prevState) => !prevState);
  setSec2(false); 
  setSec3(false);  
};

const handleToggleSection3 = () => {
 
  // setIsActive((prevState) => !prevState);
  setSec2(true);
  setSec3(false);  
};


const [sec3, setSec3] = useState(false); 
const [isActive2, setIsActive2] = useState(false); 

const handleToggleSection2 = () => {
 
  setIsActive2((prevState) => !prevState);
  setSec3(true); 
};


    return(
        <section id="projects-section" className="mt-0 pt-2 bg-dark container-fluid w-100">  
        <div className="rounded-4 container h-25 text-light mt-3">
           <div className="divskill">
            <h2>My Project</h2>
            <p className="pp">My name is mariam , I live in ALEX ,this is the 1st proj in react Dev</p>
           </div>
           <div className=" d-flex justify-content-center ">
            <nav className="nav2  rounded-5  border border-light d-flex justify-content-center mb-2 text-light">
             <div className="aa border-end a1 py-3 px-5">
             {location.pathname === '/' ? (
                <ScrollLink
                  activeClass="active"
                  to="section1"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onSetActive={handleSetActive}
                  className="nav-link ss" onClick={handleToggleSection3}
                >
                  1st section
                </ScrollLink>
              ) : (
                <RouterLink to="sec1" className="nav-link" onClick={handleToggleSection3}> 1st section</RouterLink>
              )}
            </div>    
            <div className="aa border-end a2 border-start py-2 px-5">
            {location.pathname === '/' ? (
                <ScrollLink
                  activeClass="active"
                  to="section2"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onSetActive={handleSetActive}
                  className="nav-link ss" onClick={handleToggleSection}
                >
                  2nd section
                </ScrollLink>
              ) : (
                <RouterLink to="sec2" className="nav-link" onClick={handleToggleSection}> 2nd section</RouterLink>
              )}
            </div>   
            <div className="aa border-start a3 py-3 px-5 `a3 ${isActive ? 'activeClass' : ''}`" id="sec31">
              {location.pathname === '/' ? (
                <ScrollLink
                  activeClass="active"
                  to="section3"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="nav-link ss"
                  onClick={handleToggleSection2} // Call toggle handler here
                >
                  3rd section
                </ScrollLink>
              ) : (
                <RouterLink to="sec3" className="nav-link" onClick={handleToggleSection2}>
                  3rd section
                </RouterLink>
              )}
            </div>
               <Outlet/>
            </nav>

         </div>
         <div className="d-flex justify-content-center s3" >
          {
          sec3?<Section3 />:null}

        </div>
         <div className="  row d-flex justify-content-center ">
        {
          images.map((im)=>{
            return(
        
              
              sec2?<Section1 img={im.img} />:null
          
          
          
            )
          })
        }
        </div>

        </div>
        <Section2/>

      </section>
    )

}
export default Projects;