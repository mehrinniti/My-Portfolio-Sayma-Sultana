import React from 'react';
import "./Education.css";

const Education = () => {
    return (
        <div>
            <div class="row align-items-start">
                <div class="col-9">
                    <ul className="edu-container">
                        <li>
                            <h4>Sonargaon University, Dhaka</h4>
                            <h6>B.Sc. in Computer Science and Engineering</h6>
                        </li>
                        <br />
                        <li>
                            <h4>Government AdamjeeNagar M.W College</h4>
                            <h6>Department of Science</h6>
                        </li>
                        <br />
                        <li>
                            <h4>Godenail High School</h4>
                            <h6>Department of Science</h6>
                        </li>
                    </ul>
                </div>
                <div class="col-3 edu-year">
                    <p className="years mt-4 ">2018-2022</p>
                    <p className="years clg">2014-2016</p>
                    <p className="years">2010-2014</p>
                </div>
            </div>
        </div>
    );
};

export default Education;