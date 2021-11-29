import React from 'react';
import Particles from 'react-particles-js';
import './ParticlesBanner.css';

const ParticlesBanner = () => {
    return (
        <Particles
            params={{
                particles: {
                    number: {
                        value: 200,
                        density: {
                            enable: true,
                            value_area: 1000,
                        }
                    },
                },
            }}
        />
    );
};

export default ParticlesBanner;