import React from 'react';
import './Mixmart.css';

import mixmart1 from "../../images/project/mixmart1.jpg";
import mixmart2 from "../../images/project/mixmart2.jpg";
import mixmart3 from "../../images/project/mixmart3.PNG";
import mixmart4 from "../../images/project/mixmart4.PNG";
import mixmart5 from "../../images/project/mixmart-5.PNG";

const Mixmart = () => {
    return (
        <div className=" mixmart-container">
            <div className="container mixmart-section">
                <h1 className="mixmart-name mb-4" style={{ color: "#5078ff" }}>Project Name : Mixmart Handmade Website  (Full stack website -Single Page Application)</h1>
                <li>This is a handicraft-related website.</li>
                <li>Users can order any product, check previous orders, and also leave their reviews.</li>
                <li>Implemented functional admin panel with restricted access where admin can add or remove any product and also update order status. Only an admin can add another person as an admin.</li>
                <li>Applied JSX, CSS, Material UI, JS, React js, Node js, Es6, React Router v5, React Hook Form, Axios, Express Js, Firebase, Heroku, MongoDB.</li>

                <div className="project-link">
                    <a target="_blank" href="https://mixmart-handmade-niti.netlify.app/">Website</a>
                    <a target="_blank" href="https://github.com/mehrinniti/mixmart-handmade-client-side-website">Client-side-code</a>
                    <a target="_blank" href="https://github.com/mehrinniti/mixmart-handmade-server-side">Server-side-code</a>
                </div>
                <h1 className="mt-5 pt-5 mb-5" style={{ color: "#5078ff" }}>Some pictures of the website : </h1>
                <img src={mixmart1} alt="" />
                <br /><br /><br /><br />
                <img src={mixmart2} alt="" />
                <br /><br /><br /><br />
                <img src={mixmart3} alt="" />
                <br /><br /><br /><br />
                <img src={mixmart4} alt="" />
                <br /><br /><br /><br />
                <img src={mixmart5} alt="" /><br />
            </div>

        </div>
    );
};

export default Mixmart;