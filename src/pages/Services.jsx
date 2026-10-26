// src/components/Services.jsx

import { BsArrowDownRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Backend Development',
    description:
      'Designing REST APIs and server-side logic with Java, Spring Boot, Spring Security and JWT, with JPA/Hibernate for clean and secure database access.',
    href: '',
  },
  {
    num: '02',
    title: 'Database Design',
    description:
      'Structuring relational databases with MySQL and PostgreSQL, designing schemas and relationships, and writing efficient queries for reliable data operations.',
    href: '',
  },
  {
    num: '03',
    title: 'Web Development',
    description:
      'Building responsive user interfaces with React, HTML, CSS and Tailwind CSS that connect cleanly to backend APIs across all devices.',
    href: '',
  },
  {
    num: '04',
    title: 'Problem Solving & DSA',
    description:
      'Solving problems with data structures and algorithms in Java, focusing on clean, efficient and maintainable code.',
    href: '',
  },
];


const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-1 flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  to={service.href || '#'}
                  className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
