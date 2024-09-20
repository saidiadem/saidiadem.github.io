import React from 'react';
import { Box, Typography, Container, Theme } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from 'next-themes';
import { UseThemeProps } from 'next-themes/dist/types';

const Line = styled(Box)(() => ({
  position: 'relative',
  width: '100%',
  height: '2px',
  transition: 'all 0.5s ease',
}));

const LineTop = styled(Line)(() => ({
  top: '50%',
  transform: 'translateY(-50%)',
  '&.animate': {
    top: '40%',
  },
}));

const LineBottom = styled(Line)(() => ({
  top: '50%',
  transform: 'translateY(-50%)',
  '&.animate': {
    top: '60%',
  },
}));

const Name = styled(Typography)(() => ({
  position: 'relative',
  fontFamily: 'Brush Script MT, Brush Script Std, cursive',
  top: '45%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  opacity: 0,
  transition: 'opacity 0.2s ease 0.2s',
  '&.animate': {
    opacity: 1,
  },
}));

const Title = styled(Typography)(() => ({
  position: 'absolute',
  top: '55%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  opacity: 0,
  transition: 'opacity 0.2s ease 0.2s',
  '&.animate': {
    opacity: 1,
  },
}));

const AnimatedIntro: React.FC = () => {
  const [animate, setAnimate] = React.useState(false);
  const  theme  = useTheme();
  React.useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Container sx={{ position: 'relative', height: '50vh' }}>
      <LineTop  className={animate ? 'animate' : ''}  sx={{backgroundColor:theme.theme === 'dark' ? 'white' : 'black'}}/>
      <LineBottom  className={animate ? 'animate' : ''} sx={{backgroundColor:theme.theme === 'dark' ? 'white' : 'black'}} />
      <Name variant="h4" className={animate ? 'animate' : ''} sx={{ color: theme.theme === 'dark' ? 'white' : 'black' }}>
        Adem Saidi
      </Name>
      <Title variant="subtitle1" className={animate ? 'animate' : ''}>
        Software Engineer & AI Enthusiast
      </Title>
    </Container>
  );
};

export default AnimatedIntro;
