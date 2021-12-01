import React from 'react';
import './About.css';
import signature from "../../../images/signature-4.png"
import myImage from "../../../images/my-pic.jpeg"
import Services from '../Services/Services';

const About = () => {
    return (
        <section className="about-container ">
            <div>
                <div className="title container ">
                    <h1 className="about-me d-flex justify-content-between">About Me.
                        <span className="user-icon"><i class="far fa-user user-icon"></i></span>
                    </h1>
                </div>

            </div>
            <div class="container">
                <div class="row align-items-start">
                    <div class="col web">
                        <h2 className="subtitle-name ml-0">Web Designer & Developer</h2>
                        <p className="summary mb-0 pb-0">I am a web developer with a vast array of knowledge in many different front-end and back-end languages, responsive frameworks, databases, and best code practices. My objective is simply to be the best web developer that I can be and to contribute to the technology company all that I know and can do. I studied CSE, and I believe that my understanding of problem-solving and complex algorithms are also skills that have and will continue to contribute to my overall success as a developer.</p>
                        <img className="sign-img img-fluid float-start mt-0" src={signature} alt="" />
                    </div>

                    <div class="col">
                        <h2 className="subtitle-name ml-0">Personal Information</h2>

                        <div class="">
                            <div class="row align-items-start">

                                <div class="col-7 col-xs-12 col-sm-12 col-md-12 col-lg-7 col-12 info">
                                    <p><span>Name : </span>Sayma Sultana</p>
                                    <p><span>Age : </span>22</p>
                                    <p><span>Residence : </span>Dhaka, Bangladesh</p>
                                    <p><span>Address : </span>Narayanganj</p>
                                    <p><span>Email : </span>sayma.sultana9699@gmail.com
                                    </p>
                                    <p><span>Phone : </span>+880 1987810664</p>

                                    <br />
                                    <>
                                        <a target="_blank" href="https://www.facebook.com/mehrin.niti/"><i class="fab fa-facebook social-icon"></i></a>
                                        <a target="_blank" href="mehrinniti@gmail.com"><i class="far fa-envelope social-icon"></i></a>
                                        <a target="_blank" href="https://github.com/mehrinniti"><i class="fab fa-github social-icon"></i></a>
                                        <a target="_blank" href="https://www.linkedin.com/in/sayma-sultana-niti/"><i class="fab fa-linkedin social-icon"></i></a>
                                    </>


                                </div>

                                <div class="col-5  ">
                                    <img className="sign-img img-fluid float-start mt-0 rounded-3" src={myImage} alt="" />
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Services></Services>

        </section>
    );
};

export default About;