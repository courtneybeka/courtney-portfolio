"use client";

import { useEffect, useRef, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { notFound } from 'next/navigation';
import gsap from 'gsap';
import { projectsData } from '@/data/project-details'; // Import the new data

// Project types
type ProjectCategory = 'UX/UI' | 'Branding' | 'Web Design' | 'Mobile Apps';

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  category: ProjectCategory;
  client: string;
  year: string;
  role: string;
  images: string[];
  nextProject: {
    title: string;
    slug: string;
  };
}

export default function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  const project = projectsData[slug];
  const imagesRef = useRef<HTMLDivElement>(null);
  
  // If project doesn't exist, show 404
  if (!project) {
    notFound();
  }
  
  // Animation for image reveal
  useEffect(() => {
    const images = document.querySelectorAll('.project-image');
    
    images.forEach((image, index) => {
      gsap.fromTo(
        image,
        { 
          y: 50,
          opacity: 0 
        },
        { 
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'power3.out',
        }
      );
    });
  }, [slug]); // Add slug as dependency to re-trigger animation on route change
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
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
        staggerChildren: 0.1
      }
    }
  };
  
  // Get project theme color
  const getProjectColor = (projectSlug: string) => {
    const colorMap: { [key: string]: string } = {
      'alberta-parks-app': 'bg-green-600',
      'shadows-sanatorium': 'bg-purple-800',
      'edmonton-311-app': 'bg-blue-600',
      'eiff-brand-elevation': 'bg-red-600',
      'buffalo-lodge': 'bg-amber-600',
      'to-learn-english': 'bg-indigo-600',
      'fort-edmonton-park': 'bg-orange-600',
      'insight-hr-refresh': 'bg-teal-600',
      'health-app': 'bg-pink-500',
      'hurde-logo': 'bg-gray-700'
    };
    return colorMap[projectSlug] || 'bg-gray-600';
  };
  
  // Intersection observer for animations
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  return (
    <div className="pt-24 pb-20">
      {/* Project Header */}
      <section 
        ref={headerRef}
        className={`relative h-[50vh] md:h-[70vh] overflow-hidden mb-16 ${getProjectColor(slug)}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40"></div>
        
        <motion.div 
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="relative z-10 container mx-auto px-6 flex flex-col justify-center h-full text-white"
        >
          <motion.div variants={fadeIn} className="text-white/80 font-medium mb-2">
            {project.category}
          </motion.div>
          <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-bold mb-4 max-w-3xl">
            {project.title}
          </motion.h1>
          <motion.p variants={fadeIn} className="text-xl max-w-2xl text-white/90">
            {project.description}
          </motion.p>
        </motion.div>
      </section>
      
      {/* Project Content */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Project Details */}
          <motion.div
            ref={contentRef}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="lg:col-span-2"
          >
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>
            
            {/* Project Images */}
            <div ref={imagesRef} className="project-images space-y-8 mt-12">
              {project.images.map((image, i) => (
                <div key={i}>
                  {image.startsWith('<') ? (
                    // Render HTML content (divs, iframes, etc.)
                    <div dangerouslySetInnerHTML={{ __html: image }} className="w-full" />
                  ) : (
                    // Render image in simple container with fullscreen option
                    <div className="project-image-container relative w-full h-auto rounded-xl shadow-lg bg-gray-100 dark:bg-gray-800 overflow-hidden">
                      <img
                      src={image}
                      alt={`${project.title} - Image ${i+1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {/* Fullscreen button */}
                      <button
                        onClick={() => {
                          const modal = document.createElement('div');
                          modal.className = 'fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4';
                          modal.onclick = () => modal.remove();
                          
                          const img = document.createElement('img');
                          img.src = image;
                          img.className = 'max-w-full max-h-full object-contain';
                          img.alt = `${project.title} - Image ${i+1}`;
                          
                          modal.appendChild(img);
                          document.body.appendChild(modal);
                        }}
                        className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                        title="Open in fullscreen"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Project Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl sticky top-24">
              <h3 className="text-xl font-bold mb-6">Project Details</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Client</h4>
                  <p className="font-medium">{project.client}</p>
                </div>
                
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Role</h4>
                  <p className="font-medium">{project.role}</p>
                </div>
                
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Year</h4>
                  <p className="font-medium">{project.year}</p>
                </div>
                
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Category</h4>
                  <p className="font-medium">{project.category}</p>
                </div>
              </div>
              
              <div className="mt-10">
                <Link 
                  href="/contact"
                  className="block w-full bg-teal-600 hover:bg-teal-700 text-white text-center py-3 px-4 rounded-xl font-medium transition-colors duration-300"
                >
                  Interested in similar work?
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Next Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="text-center">
            <h3 className="text-lg text-gray-500 dark:text-gray-400 mb-2">Next Project</h3>
            <Link 
              href={project.nextProject.slug} 
              className="text-2xl md:text-3xl font-bold hover:text-teal-600 transition-colors duration-300"
            >
              {project.nextProject.title}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 