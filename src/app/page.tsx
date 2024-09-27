"use client";

import AnimatedIntro from "@/components/AnimatedIntro/AnimatedIntro";
const BLUR_FADE_DELAY = 0.04;
import BallPool from "@/components/DraggableSkills/MatterBox";
import { Box } from "@mui/system";
import ProjectShowcase from "@/components/ProjectComponent/ProjectShowcase";
import { FaReact, FaNodeJs, FaDatabase, FaPhp, FaSymfony } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Typography } from "@mui/material";
import ResumePage from "./resume";
import MatterBox from "@/components/DraggableSkills/MatterBox";
import BlurFadeText from "../components/magicui/blur-fade-text";
import BlurFade from "@/components/magicui/blur-fade";
import ParticlesBackground from "@/components/ParticlesBackground/ParticlesBackground";
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
  const carouselItems = [
    {
      imageUrl: '/cybersphere.png',
      description: 'I participated in the national cybersecurity cybersphere congress , where our team Fokspy secured 4th place in the challenging CTF that took place  .',
    },
    {
      imageUrl: '/wintercup.png',
      description: 'I participated in many competitive programming contests , the wintercup has been one of the most exhilerating experiences where we got to be in the top 25 among the very best.',
    },
  ];
  return (
    <main className="flex flex-col w-full min-h-screen justify-center items-center  ">
      <ParticlesBackground />
      <AnimatedIntro />
      <BlurFadeText text="<Projects>" className="code-text" />
      {projects.map((project, index) => (
        <Box key={index} sx={{ mb: 8 }}>
          <ProjectShowcase
            gifUrl={project.gifUrl}
            description={project.description}
            techStack={project.techStack}
          />
        </Box>
      ))}
      <BlurFadeText text="</Projects>" className="code-text mb-8" />

      <BlurFadeText text="<Skills>" className="code-text" />
      <BlurFade>
        <MatterBox></MatterBox>

      </BlurFade>
      <BlurFadeText text="</Skills>" className="code-text mb-8" />
      <BlurFadeText text="<About me>" className="code-text" />
      <Box sx={{ width: '80%', maxWidth: '600px', margin: '0 auto' , height : '60%', maxHeight:'600px'}}>
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
          {carouselItems.map((item, index) => (
            <Box key={index} sx={{ mb: 8, textAlign: 'center' }}>
              <img src={item.imageUrl} alt={`Carousel item ${index + 1}`} />
              <p>{item.description}</p>
            </Box>
          ))}
        </Carousel>
      </Box>
      <BlurFadeText text="</About me >" className="code-text" />


    </main>
  );
}
