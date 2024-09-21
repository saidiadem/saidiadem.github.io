"use client";

import AnimatedIntro from "@/components/AnimatedIntro/AnimatedIntro";
const BLUR_FADE_DELAY = 0.04;
import BallPool from "@/components/DraggableSkills/MatterBox";
import { Box } from "@mui/system";
import ProjectShowcase from "@/components/ProjectComponent/ProjectShowcase";
import { FaReact, FaNodeJs, FaDatabase ,FaPhp,FaSymfony} from 'react-icons/fa';
import { Typography } from "@mui/material";
import ResumePage from "./resume";
import MatterBox from "@/components/DraggableSkills/MatterBox";
export default function Page() {
  const projects = [
    {
      gifUrl: '/2024-09-02-02-59-33.gif',
      description: 'This is a project I worked on in collaboration for an animal shelter association in Tunisia.',
      techStack: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'MySQL', icon: <FaDatabase /> },
      ],
    },
    {
      gifUrl: '/Untitled design.gif',
      description: 'This is a carpooling app I worked on where users can add new rides , join existing rides and contact people or report them if needed.',
      techStack: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Php', icon: <FaPhp /> },
        { name: 'MySQL', icon: <FaDatabase /> },
        { name: 'Symfony', icon: <FaSymfony /> },
      ],
    }
  ];
  return (
    <main className="flex flex-col w-full min-h-screen justify-center items-center  ">
      <AnimatedIntro   />
      <Typography variant="h1" className="text-4xl font-bold text-center mt-8 mb-8">Here is a selection of my projects</Typography>
      {projects.map((project, index) => (
        <Box key={index} sx={{ mb: 8  }}>
          <ProjectShowcase
            gifUrl={project.gifUrl}
            description={project.description}
            techStack={project.techStack}
          />
        </Box>
      ))}
      <MatterBox></MatterBox>
    </main>
  );
}
