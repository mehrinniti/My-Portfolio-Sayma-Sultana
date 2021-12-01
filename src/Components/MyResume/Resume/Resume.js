import React from 'react';
import { Link } from 'react-router-dom';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Work from '../Work/Work';
import "./Resume.css";

const Resume = () => {
    return (
        <div className="resume-container">
            <div>
                <div className="title container ">
                    <h1 className="about-me d-flex justify-content-between">My Resume.
                        <span className="user-icon"><i class="far fa-id-card user-icon"></i></span>
                    </h1>
                </div>

                <div class="container">
                    <div class="row align-items-start">

                        <div class="col-4">

                            {/* resume navbar */}
                            <div class="row align-items-start  gx-0  border-2  border-end">
                                <div class="col-2 ">
                                    <div className="icon-section">
                                        <p><i class="fas fa-user-graduate resume-icons"></i></p>
                                        <p><i class="fas fa-history resume-icons"></i></p>
                                        <p><i class="fas fa-laptop resume-icons"></i></p>
                                        <p><i class="far fa-chart-bar resume-icons"></i></p>
                                        <p><i class="fas fa-palette resume-icons"></i></p>
                                    </div>
                                </div>
                                <div class="col-9 resume-titles">

                                    <Link to="#education" className="cv-title"><p>Education</p></Link>
                                    <Link to="#work" className="cv-title"><p>Work History</p></Link>
                                    <Link to="#skills" className="cv-title"><p>Programming Skills</p></Link>
                                    <Link to="#projects" className="cv-title"><p>Projects</p></Link>
                                    <Link to="#interests" className="cv-title"><p>Interests</p></Link>
                                </div>
                            </div>

                        </div>



                        <div class="col-8">

                            {/* resume description */}

                            <div class="row align-items-start">

                                {/* <Education></Education> */}

                                {/* <Work></Work> */}

                                {/* <Skills></Skills> */}

                                <Projects></Projects>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Resume;