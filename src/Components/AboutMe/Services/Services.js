import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div>
            <h2 className="subtitle-name services-title mb-5"><span>SERVICES</span></h2>
            <div class="container service-container">
                <div class="row align-items-start services">
                    <div class="col ">
                        <span><i class="fas fa-laptop-code mb-3"></i></span>
                        <h3 className=" mb-3">Web Development</h3>
                        <p> web developers build and maintain websites. Web developers often work for clients who are trying to get their product or service onto the web.</p>
                    </div>
                    <div class="col">
                        <span><i class="far fa-eye md-4"></i></span>
                        <h3 className=" mb-3" >Web Design</h3>
                        <p>Web design is the process of creating websites. It encompasses several different aspects, including webpage layout, content production, and graphic design.</p>
                    </div>
                    <div class="col">
                        <span><i class="fas fa-mobile-alt md-4"></i></span>
                        <h3 className=" mb-3">Responsive Design</h3>
                        <p>Responsive design is a graphic user interface (GUI) design approach used to create content that adjusts smoothly to various screen sizes.</p>
                    </div>
                    <div class="col">
                        <span><i class="fas fa-pencil-ruler md-4"></i></span>
                        <h3 className=" mb-3">Graphic Design</h3>
                        <p>Graphic designers create visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, and captivate consumers.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;