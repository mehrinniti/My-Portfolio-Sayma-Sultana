import React from 'react';
import './Navigation.css';
import logo from "../../images/logo.svg"

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <img className="logo" src={logo} alt="" width="100" height="40" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <i class="fas fa-bars bar-icon"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-1 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-white nav-btn" aria-current="page" href="#"><span className="menu">HOME</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white  nav-btn" href="#"><span className="menu">ABOUT ME</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white  nav-btn" href="#"><span className="menu">RESUME</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white  nav-btn" href="#"><span className="menu">CONTACT</span></a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navigation;