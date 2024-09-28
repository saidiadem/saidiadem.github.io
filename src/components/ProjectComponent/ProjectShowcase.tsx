import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from 'next-themes';

interface ProjectShowcaseProps {
  gifUrl: string;
  description: string;
  techStack: { name: string; icon: React.ReactNode }[];
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ gifUrl, description, techStack }) => {
  const {theme}=useTheme();
  return (
    <Box sx={{ flexGrow: 1, p: 2, border: '1px solid #ddd', borderRadius: '8px', boxShadow: 3,backgroundColor:theme === 'light' ? '#f7fafc' : '#121212'}}>
      <Grid container spacing={4} alignItems="center"> {/* Increase spacing */}
        {/* GIF Section */}
        <Grid item xs={12} md={7}> {/* Increase width for larger screens */}
          <Box 
            component="img" 
            src={gifUrl} 
            alt="Project GIF" 
            sx={{ width: '60%', borderRadius: '8px' }} 
          />
        </Grid>
        
        {/* Description & Tech Stack Section */}
        <Grid item xs={12} md={5}> {/* Adjust width for larger screens */}
          <Box sx={{ textAlign: 'left' }}>
            <Typography variant="h6" gutterBottom>
              Project Description
            </Typography>
            <Typography variant="body1" gutterBottom>
              {description}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Tech Stack
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {techStack.map((tech, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {tech.icon}
                  <Typography variant="body2">{tech.name}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectShowcase;