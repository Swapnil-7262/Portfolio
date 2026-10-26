import { FaJava, FaReact, FaGitAlt } from 'react-icons/fa';
import { GrMysql } from "react-icons/gr";
import { SiSpringboot, SiSpringsecurity, SiHibernate, SiJsonwebtokens, SiPostgresql, SiMongodb, SiApachemaven, SiPostman } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../components/ui/tooltip';
import { ScrollArea } from '../components/ui/scroll-area';

import { motion } from 'framer-motion';

const about = {
  title: "About Me",
  description: "Java backend developer and final-year MCA student with a strong foundation in OOP, DBMS and REST API design. I build Spring Boot applications with JWT security, JPA/Hibernate and MySQL/PostgreSQL, and I am now exploring AI integration with Spring AI. Self-taught through documentation, tutorials and hands-on projects.",
  info: [
    { fieldName: "Name", filedValue: "Swapnil Chaudhari" },
    { fieldName: "Phone", filedValue: "(+91) 9970817628" },
    { fieldName: "Experience", filedValue: "Fresher" },
    { fieldName: "Nationality", filedValue: "Maharashtra (India)" },
    { fieldName: "E-mail", filedValue: "chaudharis7262@gmail.com" },
    { fieldName: "Languages", filedValue: "English, Marathi, Hindi" },
  ]
};

const education = {
  title: "My Education",
  description: "I am currently pursuing my Master of Computer Applications (MCA) and have completed my B.Sc. in Computer Science with a 9.28/10 CGPA.",
  items: [
    {
      institution: "SSBT College of Engineering & Technology, Jalgaon",
      degree: "Master of Computer Applications",
      duration: "2025 - 2027"
    },
    {
      institution: "ACS College Dharangaon, North Maharashtra University",
      degree: "BSc Computer Science",
      duration: "2022 - 2025 | CGPA 9.28"
    },
    {
      institution: "ACS College Dharangaon, Maharashtra Board",
      degree: "12th Science",
      duration: "2021 - 2022",
      status: "Completed"
    }
  ]
};

const skills = {
  title: "My Skills",
  description: "Technologies and tools I've worked with during projects, learning, and hands-on practice.",
  skillList: [
    { icon: <FaJava />, name: "Java" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
    { icon: <SiSpringsecurity />, name: "Spring Security" },
    { icon: <SiHibernate />, name: "Hibernate / JPA" },
    { icon: <SiJsonwebtokens />, name: "JWT" },
    { icon: <GrMysql />, name: "MySQL" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <SiApachemaven />, name: "Maven" },
    { icon: <SiPostman />, name: "Postman" },
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
          </TabsList>

          <div className='min-h-[70vh] w-full'>
            <TabsContent value="about">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-relaxed'>{about.description}</p>
                <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((info, index) => (
                    <li
                      key={index}
                      className='flex items-center gap-4 bg-[#232329] rounded-xl px-5 py-4 hover:bg-[#2b2b33] transition-colors duration-300'
                    >
                      <span className='text-accent text-xl shrink-0'>{info.icon}</span>
                      <div className='flex flex-col items-start text-left'>
                        <span className='text-white/50 text-xs uppercase tracking-wide'>{info.fieldName}</span>
                        <span className='text-sm sm:text-base font-medium'>{info.filedValue}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="education">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-relaxed'>{education.description}</p>
                <ScrollArea className="h-[420px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[24px] pr-2'>
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className='relative bg-[#232329] min-h-[190px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2 border border-white/5 hover:border-accent/40 transition-all duration-300'
                      >
                        <span
                          className={`absolute top-5 right-5 text-[11px] font-semibold px-3 py-1 rounded-full ${
                            item.status === "Pursuing"
                              ? "bg-accent/15 text-accent"
                              : "bg-white/10 text-white/60"
                          }`}
                        >
                          {item.status}
                        </span>
                        <span className='text-accent font-semibold'>{item.degree}</span>
                        <h3 className='text-xl max-w-[240px] min-h-[100px] text-center lg:text-start leading-snug'>
                          {item.institution}
                        </h3>
                        <div className='flex items-center gap-3.5'>
                          <span className='h-[6px] w-[6px] bg-accent rounded-full'></span>
                          <p className='text-white/60 text-sm'>{item.duration}</p>
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
                <p className='max-w-[600px] text-white/60 mx-auto lg:mx-0 leading-relaxed'>{skills.description}</p>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-[#232329] border border-white/5 rounded-xl flex flex-col gap-3 justify-center items-center group hover:border-accent/40 hover:-translate-y-1 transition-all duration-300'>
                            <div className='text-5xl group-hover:text-accent group-hover:scale-110 transition-all duration-300'>
                              {skill.icon}
                            </div>
                            <span className='text-xs text-white/50 group-hover:text-white/80 transition-colors duration-300'>
                              {skill.name}
                            </span>
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
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;