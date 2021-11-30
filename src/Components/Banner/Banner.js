import React from 'react';
import './Banner.css';
import Typed from 'react-typed';

const Banner = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Sayma <span className="lastname">sultana</span></h1>
                <h3 className="text-white">I am a <Typed

                    className="typed-text"
                    strings={["Web Developer", "Full-stack Developer", "Web Designer", "MERN Stack Developer", "Graphic Designer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop

                /></h3>
                <a target="_blank" href="https://drive.google.com/file/d/1htNGAvMl25msEkLkhGNJ0V4-AY_ZQRt0/view" className="resume-btn">Download My Resume</a>
                {/* <button type="button" class="btn btn-outline-info rounded-pill resume-btn ">Download My Resume</button> */}


            </div>

        </div>
    );
};

export default Banner;