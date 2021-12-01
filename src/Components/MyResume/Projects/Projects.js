import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
    return (
        <div>
            <div class="row align-items-start">
                <div class="col-9">
                    <ul className="edu-container project-section">
                        <li>
                            <h4>Mixmart Handmade Website </h4>
                            <h6>Technologies Used : CSS, Material UI, JS, React js, Node js, Es6, React Router v5, React Hook Form, Firebase, Heroku, MongoDB.</h6>
                        </li>
                        <br />
                        <li>
                            <h4>Fast Delivery Website</h4>
                            <h6>Technologies Used : Bootstrap, Animation, JS, React js, Node js, React Router v5, React Hook Form, Axios, Firebase, Heroku, MongoDB.</h6>
                        </li>
                        <br />
                        <li>
                            <h4>Oreo Health Care Website </h4>
                            <h6>Technologies Used : CSS, React Bootstrap, JS, React js, Node js, React Hook Form, Firebase.</h6>
                        </li>
                    </ul>
                </div>
                <div class="col-3 edu-year">
                    {/* <p className="years mt-4 ">2018-2022</p> */}
                    <Link to="/mixmart"><p className="years mt-4 details-btn">More Details</p></Link>
                    {/* <p className="years clg">2014-2016</p>
                    <p className="years">2010-2014</p> */}
                </div>
            </div>
        </div>
    );
};

export default Projects;