import React, { useState, useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './ParticlesBackground.css'; 
import { useTheme } from 'next-themes';

const ParticlesBackground: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };
  const theme = useTheme();

  // Pause particles when user is idle
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleActivity = () => {
      setIsVisible(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsVisible(false);
      }, 30000); // Pause after 30 seconds of inactivity
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('scroll', handleActivity);
    handleActivity();

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="particles-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 30, // Reduce FPS for better performance
          particles: {
            number: {
              value: 10, // Reduced from 15
            },
            color: {
              value: theme.theme === 'dark' ? '#ffffff' : '#000000',
            },
            links: {
              enable: true,
              distance: 150,
              color: theme.theme === 'dark' ? '#ffffff' : '#000000',
              opacity: 0.3, // Reduced from 0.5
              width: 1,
            },
            move: {
              enable: isVisible,
              speed: 1, // Reduced from 2
            },
          },
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;