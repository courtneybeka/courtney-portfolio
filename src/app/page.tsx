"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Using intersection observer for scroll animations
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Featured projects data
  const featuredProjects = [
    {
      title: "Brand Identity: Elevate Wellness",
      category: "Branding",
      image: "/img/projects/elevate-wellness/thumbnail.jpg",
      slug: "/projects/elevate-wellness"
    },
    {
      title: "UX/UI: Finance Dashboard",
      category: "UX/UI Design",
      image: "/img/projects/finance-dashboard/thumbnail.jpg", 
      slug: "/projects/finance-dashboard"
    },
    {
      title: "E-Commerce Redesign",
      category: "Web Design",
      image: "/img/projects/ecommerce-redesign/thumbnail.jpg",
      slug: "/projects/ecommerce-redesign"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Warm abstract background"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="brightness-50"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="container mx-auto px-6 z-10 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Crafting <span className="text-purple-500">Digital</span> Experiences That Inspire
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300"
            >
              UX/UI Designer & Brand Strategist bringing vibrant, creative solutions to life.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link href="/projects" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300">
                View Projects
              </Link>
              <Link href="/contact" className="bg-transparent border border-gray-300 hover:border-purple-500 hover:text-purple-600 px-8 py-3 rounded-full font-medium transition-colors duration-300">
                Let's Connect
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* About/Introduction Section */}
      <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-12 justify-items-center"
          >
            <motion.div variants={fadeInUp} className="max-w-2xl text-center md:text-left">
              <h2 className="text-3xl font-bold mb-6">Hi, I'm Courtney!</h2>
              <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">
                I'm a UX/UI designer and brand strategist with a passion for creating aesthetic, user-friendly digital experiences.
              </p>
              <p className="mb-8 text-gray-600 dark:text-gray-300">
                My approach combines creativity with strategic thinking to deliver designs that are not only visually captivating but also functional and intuitive.
              </p>
              <Link href="/about" className="text-purple-600 font-medium hover:text-purple-800 transition-colors duration-300 flex items-center justify-center md:justify-start">
                More About Me
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section ref={projectsRef} className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </motion.h2>
            <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Take a look at some of my recent work and the creative solutions I've designed for various clients.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <Link href={project.slug}>
                  <div className="relative h-64 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-purple-600 text-sm font-medium mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <span>View Project</span>
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            className="text-center mt-12"
          >
            <Link href="/projects" className="bg-transparent border border-gray-300 hover:border-purple-500 hover:text-purple-600 px-8 py-3 rounded-full font-medium transition-colors duration-300">
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your next project?</h2>
            <p className="text-xl mb-8 text-purple-100">
              Let's collaborate and bring your vision to life with creative design solutions.
            </p>
            <Link href="/contact" className="bg-white text-purple-600 hover:bg-purple-100 px-8 py-3 rounded-full font-medium transition-colors duration-300 inline-block">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
