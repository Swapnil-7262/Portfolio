import { motion } from "framer-motion";
import  { useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom"; // ✅ use from react-router-dom

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

import SliderButton from "../components/SliderButton";

// Image paths should point to `public/` or import statically in Vite
const projects = [
  {
    num: '01',
    category: "Backend + AI",
    title: "JobPilot AI",
    description:
      "An AI job agent backend that reads a PDF resume and builds a structured profile using Spring AI with a local Ollama model. Stores profiles in PostgreSQL. Currently in development.",
    stack: [
      { name: "Java 21" },
      { name: "Spring Boot" },
      { name: "Spring AI" },
      { name: "Ollama" },
      { name: "PostgreSQL" }
    ],
    image: "/Images/jobpilot-ai.png",
    live: "",
    github: "https://github.com/Swapnil-7262/jobpilot-ai"
  },
  {
    num: '02',
    category: "Backend",
    title: "Bus Tracking System",
    description:
      "A role-based bus tracking app for students, drivers and admins. I built the full backend (frontend by a teammate): JWT security and 20+ REST APIs for routes, stops, assignments and live location.",
    stack: [
      { name: "Java 21" },
      { name: "Spring Boot" },
      { name: "Spring Security" },
      { name: "JWT" },
      { name: "JPA/Hibernate" },
      { name: "MySQL" }
    ],
    image: "/Images/bus-tracker.png",
    live: "",
    github: "https://github.com/Swapnil-7262/bus_tracker"
  },
  {
    num: '03',
    category: "Desktop",
    title: "Employee Management System",
    description:
      "A Java Swing desktop app for managing employee records with admin login and add, view, update, delete and search modules, backed by MySQL through JDBC.",
    stack: [
      { name: "Java" },
      { name: "Swing" },
      { name: "JDBC" },
      { name: "MySQL" }
    ],
    image: "/Images/employee-management.png",
    live: "",
    github: "https://github.com/Swapnil-7262/Desktop-EMS"
  },
  {
    num: '04',
    category: "Frontend",
    title: "Personal Portfolio",
    description:
      "This responsive portfolio, built with React, Vite and Tailwind CSS, with animated page transitions using Framer Motion and a working contact form.",
    stack: [
      { name: "React.js" },
      { name: "Vite" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" }
    ],
    image: "/Images/portfolio.png",
    live: "https://portfolio-puce-pi-98.vercel.app/",
    github: "https://github.com/Swapnil-7262/Portfolio"
  }
];


const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex flex-col min-h-[80vh] justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Project Details */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white capitalize">
                {project.category} Project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-wrap gap-6">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>

              {/* Live and GitHub Links */}
              <div className="flex justify-evenly md:justify-start items-center gap-5 mb-5">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </a>
                )}

                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">GitHub</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </a>
              </div>
            </div>
          </div>

          {/* Swiper Slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[560px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((proj, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/10 z-10"></div>
                    <div className="w-full h-full relative">
                      <img 
                        className="w-full h-full object-fit"
                        src={proj.image}
                        alt={proj.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <SliderButton
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
