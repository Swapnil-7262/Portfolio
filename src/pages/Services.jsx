// src/components/Services.jsx

import { BsArrowDownRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Java Development',
    description:
      'Building robust, object-oriented applications using Core Java, following clean coding practices and strong OOP principles for maintainable software.',
    href: '',
  },
  {
    num: '02',
    title: 'Backend Development',
    description:
      'Designing and implementing server-side logic, REST APIs, and database integration using Java, JDBC, and Spring Boot for scalable applications.',
    href: '',
  },
  {
    num: '03',
    title: 'Database Design',
    description:
      'Structuring and managing relational databases using MySQL, writing efficient queries and schemas to support fast, reliable data operations.',
    href: '',
  },
  {
    num: '04',
    title: 'Problem Solving & DSA',
    description:
      'Solving real-world problems through data structures and algorithms, with a focus on writing efficient, optimized, and scalable Java code.',
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