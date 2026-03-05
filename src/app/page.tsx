"use client";

import dynamic from 'next/dynamic';
import AnimatedIntro from "@/components/AnimatedIntro/AnimatedIntro";
const BLUR_FADE_DELAY = 0.04;
import { Box } from "@mui/system";
import ProjectShowcase from "@/components/ProjectComponent/ProjectShowcase";
import { FaReact, FaNodeJs, FaDatabase, FaPhp, FaSymfony, FaPython } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Card, Typography } from "@mui/material";
import ResumePage from "./resume";
import BlurFadeText from "../components/magicui/blur-fade-text";
import BlurFade from "@/components/magicui/blur-fade";
import { useTheme } from "next-themes";
import Image from 'next/image';

// Lazy load heavy components
const MatterBox = dynamic(() => import("@/components/DraggableSkills/MatterBox"), {
  ssr: false,
  loading: () => <div style={{height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Loading skills...</div>
});

const ParticlesBackground = dynamic(() => import("@/components/ParticlesBackground/ParticlesBackground"), {
  ssr: false,
});

export default function Page() {
  const projects = [
    {
      gifUrl: '/2024-09-02-02-59-33.gif',
      description: 'This is a project I worked on for an animal shelter association in Tunisia.',
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
    },
    {
      gifUrl: '/relib.gif',
      description: 'ReLib is an AI-powered platform designed to identify and mitigate colonial bias in Wikipedia articles, developed during the Unbreaking News 2.0 hackathon.',
      techStack: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'MySQL', icon: <FaDatabase /> },
      ],
    },
    {
      gifUrl: '/klippy.gif',
      description: 'Klippy is a virtual assistant designed to enhance productivity by providing quick access to information, managing tasks, and offering personalized support, developed during the AI Minds hackathon.',
      techStack: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'Qdrant', icon: <FaDatabase /> },
        { name: 'Neo4j', icon: <FaDatabase /> },
      ],
    }
  ];
  const carouselItems = [
    {
      imageUrl: '/unbreaking.png',
      description: 'Won first place in Unbreaking news 2.0 hackathon by building ReLib: an AI-powered platform for detecting colonial bias in Wikipedia articles',
    },
    {
      imageUrl: '/cybersphere.png',
      description: 'Participated in the national cybersecurity cybersphere congress , where our team Fokspy secured 4th place in the challenging CTF that took place  .',
    },
    {
      imageUrl: '/wintercup.png',
      description: 'Participated in many competitive programming contests , the wintercup has been one of the most exhilerating experiences where we got to be in the top 25 among the very best.',
    },
    
  ];
  const { theme } = useTheme();
  const textClass = theme === 'light' ? 'text-light' : 'text-dark';
  
  return (
    <main className="flex flex-col w-full min-h-screen justify-center items-center  ">
      <ParticlesBackground />
      <Card sx={
        {
          width: '80%',
          maxWidth: '800px',
          margin: '0 auto',
          height: '20%',
          maxHeight: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          border:'none',
          boxShadow: 'none',
          backgroundColor: 'transparent',
        }
      }>
      <AnimatedIntro />
      </Card>
      <BlurFadeText text="<Projects>" className={`code-text ${textClass}`} />
      {projects.map((project, index) => (
        <Box key={index} sx={{ mb: 8 }}>
          <ProjectShowcase
            gifUrl={project.gifUrl}
            description={project.description}
            techStack={project.techStack}
          />
        </Box>
      ))}
     <BlurFadeText text="</Projects>" className={`code-text mb-8 ${textClass}`} />
     <BlurFadeText text="<Skills>" className={`code-text ${textClass}`} />
      <BlurFade>
        <MatterBox></MatterBox>

      </BlurFade>
      <BlurFadeText text="</Skills>" className={`code-text mb-8 ${textClass}`} />
      <BlurFadeText text="<About me>" className={`code-text ${textClass}`} />
      <Box sx={{ width: '80%', maxWidth: '600px', margin: '0 auto' , height : '60%', maxHeight:'600px'}}>
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
          {carouselItems.map((item, index) => (
            <Box key={index} sx={{ mb: 8, textAlign: 'center' }}>
              <Image 
                src={item.imageUrl} 
                alt={`Carousel item ${index + 1}`} 
                width={600} 
                height={400}
                loading="lazy"
                quality={85}
              />
              <p>{item.description}</p>
            </Box>
          ))}
        </Carousel>
      </Box>
      <BlurFadeText text="</About me>" className={`code-text ${textClass}`} />


    </main>
  );
}
