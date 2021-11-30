import React from 'react';
import Particles from 'react-particles-js';
import './ParticlesBanner.css';

const ParticlesBanner = () => {
    return (
        <Particles
            // className="particles-canvas"
            params={{
                particles: {
                    number: {
                        value: 40,
                        density: {
                            enable: true,
                            value_area: 900,
                        }
                    },
                    shape: {
                        type: "star",
                        stroke: {
                            width: 6,
                            color: "#5078ff"
                        }
                    }
                },
            }}
        />
    );
};

export default ParticlesBanner;