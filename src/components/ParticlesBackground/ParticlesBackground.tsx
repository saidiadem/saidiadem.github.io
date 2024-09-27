import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './ParticlesBackground.css'; 

const ParticlesBackground: React.FC = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <div className="particles-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: {
              value: 15,
            },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
            },
          },
        }}
      />
    </div>
  );
};

export default ParticlesBackground;