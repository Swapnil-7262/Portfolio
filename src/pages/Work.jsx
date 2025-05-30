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
    category: "Full Stack",
    title: "Campus Connect",
    description:
      "A web platform that enables communication between students, teachers, and college administration. Features include sharing of notes, assignments, and academic resources.",
    stack: [
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Cloudinary" }
    ],
    image: "/public/Images/original.png", // replace with your actual image
    live: "",
    github: ""
  },
  {
    num: '02',
    category: "Full Stack + AI",
    title: "ChatAl",
    description:
      "A real-time chat application supporting one-on-one and group messaging, integrated with Google Gemini AI for instant query resolution.",
    stack: [
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Socket.io" },
      { name: "Google Gemini API" }
    ],
    image: "/public/Images/Chatai.png", // replace with your actual image
    live: "",
    github: ""
  },
  {
    num: '03',
    category: "Full Stack",
    title: "Uber Clone",
    description:
      "A ride-hailing application with features like user registration, ride booking, driver tracking, and payment processing, using TomTom API for real-time maps.",
    stack: [
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "React.js" },
      { name: "Node.js" },
      { name: "TomTom API" }
    ],
    image: "/public/Images/uber-home.png", // replace with your actual image
    live: "",
    github: ""
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
