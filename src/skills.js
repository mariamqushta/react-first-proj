import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section id="skills-section" className="pb-4 container-fluid w-100">
            <div className="rounded-4 container bg-dark shadow-lg  mb-4  mt-5 pb-3 text-light">
                <div className="divskill">
                    <h2>Skills</h2>
                    <p className="">You Can See My Skills Here </p>
                </div>
                <div className="container">
                <Slider {...settings}>
                        {/* Circle filling to 80% */}
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="circle-wrapper" style={{ position: 'relative' }}>
                                <svg viewBox="0 0 180 180" width="150" height="150">
                                    <defs>
                                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style={{ stopColor: '#a39786', stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: '#fdfafa', stopOpacity: 1 }} />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="90" cy="90" r="60" strokeWidth="15" stroke="url(#grad1)" fill="none"
                                        strokeDasharray="377" strokeDashoffset="75.4" strokeLinecap="round"></circle>
                                </svg>
                                <div style={{
                                    position: 'absolute', top: '45%', left: '50%',
                                    transform: 'translate(-50%, -50%)', fontSize: '24px', fontWeight: 'bold', color: '#000'
                                }}>
                                    <span className="text-light">80%</span>
                                </div>
                                <div className="circle-label">FrontEnd Development</div>
                            </div>
                        </div>

                        {/* Circle filling to 90% */}
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="circle-wrapper" style={{ position: 'relative' }}>
                                <svg viewBox="0 0 180 180" width="150" height="150">
                                    <defs>
                                        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style={{ stopColor: '#a39786', stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: '#fdfafa', stopOpacity: 1 }} />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="90" cy="90" r="60" strokeWidth="15" stroke="url(#grad2)" fill="none"
                                        strokeDasharray="377" strokeDashoffset="37.7" strokeLinecap="round"></circle>
                                </svg>
                                <div style={{
                                    position: 'absolute', top: '45%', left: '50%',
                                    transform: 'translate(-50%, -50%)', fontSize: '24px', fontWeight: 'bold', color: '#000'
                                }}>
                                    <span className="text-light">90%</span>
                                </div>
                                <div className="circle-label1 ">Cyber Security</div>
                            </div>
                        </div>

                        {/* Circle filling to 85% */}
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="circle-wrapper" style={{ position: 'relative' }}>
                                <svg viewBox="0 0 180 180" width="150" height="150">
                                    <defs>
                                        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style={{ stopColor: '#a39786', stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: '#fdfafa', stopOpacity: 1 }} />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="90" cy="90" r="60" strokeWidth="15" stroke="url(#grad3)" fill="none"
                                        strokeDasharray="377" strokeDashoffset="56.55" strokeLinecap="round"></circle>
                                </svg>
                                <div style={{
                                    position: 'absolute', top: '45%', left: '50%',
                                    transform: 'translate(-50%, -50%)', fontSize: '24px', fontWeight: 'bold', color: '#000'
                                }}>
                                    <span className="text-light">85%</span>
                                </div>
                                <div className="circle-label">BackEnd Development</div>
                            </div>
                        </div>

                        {/* Circle filling to 75% */}
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="circle-wrapper" style={{ position: 'relative' }}>
                                <svg viewBox="0 0 180 180" width="150" height="150">
                                    <defs>
                                        <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style={{ stopColor: '#a39786', stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: '#fdfafa', stopOpacity: 1 }} />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="90" cy="90" r="60" strokeWidth="15" stroke="url(#grad4)" fill="none"
                                        strokeDasharray="377" strokeDashoffset="94.25" strokeLinecap="round"></circle>
                                </svg>
                                <div style={{
                                    position: 'absolute', top: '45%', left: '50%',
                                    transform: 'translate(-50%, -50%)', fontSize: '24px', fontWeight: 'bold', color: '#000'
                                }}>
                                    <span className="text-light">75%</span>
                                </div>
                                <div className="circle-label1">Data Science</div>
                            </div>
                        </div>
                    </Slider></div>
            </div>
        </section>
    );
};

export default Skills;
