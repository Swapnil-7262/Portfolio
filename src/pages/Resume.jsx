import { FaHtml5, FaCss3, FaJava, FaReact, FaJs,FaNodeJs } from 'react-icons/fa';
import { GrMysql } from "react-icons/gr";
import { SiMongodb, SiExpress } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../components/ui/tooltip';
import { ScrollArea } from '../components/ui/scroll-area';

import { motion } from 'framer-motion';

const about = {
  title: "About Me",
  description: "As a fresher, I have built a strong foundation in full stack development through academic projects, hands-on practice, and continuous learning.",
  info: [
    { fieldName: "Name", filedValue: "Swapnil Chaudhari" },
    { fieldName: "Phone", filedValue: "(+91) 9970817628" },
    { fieldName: "Experience", filedValue: "Fresher" },
    { fieldName: "Nationality", filedValue: "Maharashtra (India)" },
    { fieldName: "E-mail", filedValue: "chaudharis7262@gmail.com" },
    { fieldName: "Languages", filedValue: "English, Marathi, Hindi" },
  ]
};

const experience = {
  title: "My Experience",
  description: "As a fresher, I completed an internship and have developed several projects that showcase my skills in full stack development.",
  items: [
    {
      company: "M2P Fintech Pvt Ltd.",
      position: "Full Stack Java Developer (Internship)",
      duration: "Jul 2022 - Present"
    }
  ]
};

const education = {
  title: "My Education",
  description: "I am currently pursuing my Bachelor of Science in Computer Science and have completed my 12th Science with a strong academic record.",
  items: [
    {
      institution: "ACS College Dharangaon, North Maharashtra University",
      degree: "BSc Computer Science",
      duration: "2022 - 2025"
    },
    {
      institution: "ACS College Dharangaon, Maharashtra Board",
      degree: "12th Science",
      duration: "2021 - 2022"
    }
  ]
};


const skills = {
  title: "My Skills",
  description: "Technologies and tools I’ve worked with during projects, learning, and hands-on practice.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3 />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <GrMysql />, name: "MySQL" },
    { icon: <SiMongodb />, name: "Mongo DB" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
  ]
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: "easeIn" } }}
      className='min-h-[80vh] flex justify-center items-center py-12 xl:py-0'
    >
      <div className="container mx-auto">
        <Tabs defaultValue='about' className='flex flex-col xl:flex-row gap-[60px]'>
          {/* Reordered tab list */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 ">
            <TabsTrigger className='my-2' value="about">About Me</TabsTrigger>
            <TabsTrigger className='my-2' value="education">Education</TabsTrigger>
            <TabsTrigger className='my-2' value="skills">Skills</TabsTrigger>
            {/* <TabsTrigger value="experience">Experience</TabsTrigger> */}
          </TabsList>

          <div className='min-h-[70vh] w-full'>
            <TabsContent value="about">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-8 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((info, index) => (
                    <li key={index} className='flex flex-col md:flex-row justify-center xl:justify-start items-center gap-2 md:gap-4'>
                      <span className='text-white/60'>{info.fieldName}</span>
                      <span className='sm:text-lg'>{info.filedValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="education">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => (
                      <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-lg flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>{item.degree}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[120px] text-center lg:text-start'>{item.institution}</h3>
                        <div className='flex items-center gap-3.5'>
                          <span className='h-[6px] w-[6px] bg-accent rounded-full'></span>
                          <p className='text-white/60'>{item.duration}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills">
              <div className='flex flex-col gap-[30px]'>
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto lg:mx-0'>{skills.description}</p>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize'>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* <TabsContent value="experience">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => (
                      <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-lg flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-start'>{item.position}</h3>
                        <div className='flex items-center gap-3.5'>
                          <span className='h-[6px] w-[6px] bg-accent rounded-full'></span>
                          <p className='text-white/60'>{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent> */}
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
