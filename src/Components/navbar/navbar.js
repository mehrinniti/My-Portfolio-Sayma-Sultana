import React from 'react';
import './Navbar.css';

const navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <i class="fas fa-bars bar-icon"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-white nav-btn" aria-current="page" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white  nav-btn" href="#">ABOUT ME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white  nav-btn" href="#">PORTFOLIO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white  nav-btn" href="#">CONTACT</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default navbar;