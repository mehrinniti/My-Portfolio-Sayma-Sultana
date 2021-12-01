import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div className="skill">
            <h3 className="skill-title">My Skills</h3>

            <li><h5>HTML</h5><span className="bar"><span className="html"></span></span></li>

            <li><h5>CSS</h5><span className="bar"><span className="css"></span></span></li>

            <li><h5>Node JS</h5><span className="bar"><span className="nodejs"></span></span></li>

            <li><h5>React</h5><span className="bar"><span className="react"></span></span></li>

            <li><h5>MongoDB</h5><span className="bar"><span className="mongodb"></span></span>
            </li>
        </div>
    );
};

export default Skills;