"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  // Skills data
  const skills = [
    { name: 'UI Design', level: 95 },
    { name: 'UX Research', level: 90 },
    { name: 'Brand Strategy', level: 85 },
    { name: 'Visual Design', level: 95 },
    { name: 'Prototyping', level: 90 },
    { name: 'Design Systems', level: 80 },
    { name: 'Motion Design', level: 75 },
    { name: 'Figma', level: 95 },
    { name: 'Adobe Creative Suite', level: 90 },
    { name: 'HTML/CSS', level: 70 },
  ];
  
  // Timeline data
  const timeline = [
    {
      year: '2022 - Present',
      title: 'Senior UX/UI Designer',
      company: 'Design Studio X',
      description: 'Leading design initiatives for enterprise clients, creating comprehensive UX strategies and overseeing implementation.',
    },
    {
      year: '2020 - 2022',
      title: 'UX/UI Designer',
      company: 'Creative Agency Y',
      description: 'Designed digital experiences for various clients across different industries, from concept to implementation.',
    },
    {
      year: '2018 - 2020',
      title: 'Junior Designer',
      company: 'Digital Agency Z',
      description: 'Created visual designs for web and mobile applications, collaborating with development teams to ensure quality implementation.',
    },
    {
      year: '2014 - 2018',
      title: 'Design Education',
      company: 'University of Design',
      description: 'Bachelor of Arts in Interactive Design with focus on user experience and digital interfaces.',
    },
  ];
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const skillVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    })
  };
  
  // Intersection observers for animations
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [timelineRef, timelineInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  return (
    <div className="pt-24 pb-20">
      {/* About Section */}
      <section ref={aboutRef} className="mb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp} className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Hello, I'm Courtney Beka</h1>
              <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">
                I'm a UX/UI designer and brand strategist based in San Francisco with over 8 years of experience in creating digital experiences.
              </p>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                My design approach is centered around understanding user needs and business objectives to create meaningful, aesthetically pleasing solutions. I'm passionate about creating designs that not only look beautiful but also function intuitively.
              </p>
              <p className="mb-8 text-gray-600 dark:text-gray-300">
                When I'm not designing, you can find me exploring new hiking trails, experimenting with photography, or attending design meetups to stay connected with the community.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300">
                  Get In Touch
                </Link>
                <a href="/Courtney_Beka_Resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-transparent border border-gray-300 hover:border-teal-500 hover:text-teal-600 px-6 py-3 rounded-full font-medium transition-colors duration-300">
                  Download Resume
                </a>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="order-1 lg:order-2">
              <div className="relative w-full aspect-square max-w-md mx-auto lg:ml-auto rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/profile.jpg"
                  alt="Courtney Beka"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-3xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">My Skills</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              I've developed expertise in various design disciplines throughout my career.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    custom={skill.level}
                    variants={skillVariants}
                    initial="hidden"
                    animate={skillsInView ? "visible" : "hidden"}
                    className={`h-2.5 rounded-full ${
                      skill.level > 90 
                        ? 'bg-teal-600' 
                        : skill.level > 80 
                        ? 'bg-teal-500'
                        : 'bg-teal-400'
                    }`}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Experience Timeline */}
      <section ref={timelineRef} className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Experience & Education</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              My professional journey in the world of design.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto relative">
            {/* Vertical timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700 transform md:-translate-x-1/2"></div>
            
            {/* Timeline items */}
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-10 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <div className="text-teal-600 font-semibold mb-1">{item.year}</div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <div className="text-gray-500 dark:text-gray-400 mb-3">{item.company}</div>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-6 h-6 rounded-full bg-teal-600 border-4 border-white dark:border-gray-900 transform -translate-x-1/2 z-10"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Interested in working together?</h2>
            <p className="text-xl mb-8 text-teal-100">
              Let's create something amazing together. Feel free to reach out!
            </p>
            <Link href="/contact" className="bg-white text-teal-600 hover:bg-teal-100 px-8 py-3 rounded-full font-medium transition-colors duration-300 inline-block">
              Contact Me
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 