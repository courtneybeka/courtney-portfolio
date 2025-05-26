"use client";

import { useEffect, useRef, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { notFound } from 'next/navigation';
import gsap from 'gsap';

// Project types
type ProjectCategory = 'UX/UI' | 'Branding' | 'Web Design' | 'Mobile Apps';

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  category: ProjectCategory;
  client: string;
  year: string;
  role: string;
  coverImage: string;
  images: string[];
  nextProject: {
    title: string;
    slug: string;
  };
}

// Mock project data - in a real app, this would come from a CMS or API
const projectsData: { [key: string]: Project } = {
  'eiff-brand-elevation': {
    id: '1',
    title: 'EIFF Brand Elevation',
    description: 'Complete brand elevation for the Edmonton International Film Festival, including logo redesign, poster, ticket, and website homepage concepts.',
    fullDescription: 'This project involved a comprehensive brand elevation for the Edmonton International Film Festival (EIFF). The goal was to create a cohesive and modern brand identity that would appeal to both film enthusiasts and the general public. The project included designing a new logo, creating promotional posters, designing ticket concepts, and developing a website homepage that reflects the festival\'s new brand identity. The design process focused on creating a balance between artistic expression and practical functionality, ensuring that all elements work together to create a memorable and engaging festival experience.',
    category: 'Branding',
    client: 'Edmonton International Film Festival (Conceptual)',
    year: '2023',
    role: 'Brand Designer & UI/UX Conceptualist',
    coverImage: '/img/projects/eiff-brand-elevation/thumbnail.jpg',
    images: [
      '/img/projects/eiff-brand-elevation/detail-1.jpg',
      '/img/projects/eiff-brand-elevation/detail-2.jpg',
      '/img/projects/eiff-brand-elevation/eiff_website.mov',
      '/img/projects/eiff-brand-elevation/DESN311_P3_Process_BekaCourtney.pdf'
    ],
    nextProject: {
      title: 'Insight HR UX',
      slug: '/projects/insight-hr-ux'
    }
  },
  'insight-hr-ux': {
    id: '2',
    title: 'Insight HR UX',
    description: 'UX/UI design project for Insight HR, focusing on creating an intuitive and efficient human resources management platform.',
    fullDescription: 'This UX/UI design project for Insight HR focused on creating a comprehensive human resources management platform. The goal was to design an intuitive and efficient system that would streamline HR processes and improve user experience for both HR professionals and employees. The project involved extensive user research, wireframing, prototyping, and user testing to ensure the final design met user needs and business requirements. The design process emphasized creating a clean, modern interface that would make complex HR tasks more manageable and accessible.',
    category: 'UX/UI',
    client: 'Insight HR (Conceptual)',
    year: '2023',
    role: 'UX/UI Designer',
    coverImage: '/img/projects/insight-hr-ux/thumbnail.jpg',
    images: [
      '/img/projects/insight-hr-ux/final-website-02.jpg',
      '/img/projects/insight-hr-ux/final-website-03.jpg',
      '/img/projects/insight-hr-ux/final-website-04.jpg',
      '/img/projects/insight-hr-ux/final-website-05.jpg',
      '/img/projects/insight-hr-ux/final-website-06.jpg',
      '/img/projects/insight-hr-ux/final-website-07.jpg',
      '/img/projects/insight-hr-ux/final-report.pdf',
      'https://youtu.be/zVFYeGucm50?si=dOtUgGEyLkH8L63z'
    ],
    nextProject: {
      title: 'Buffalo Lodge',
      slug: '/projects/buffalo-lodge'
    }
  },
  'buffalo-lodge': {
    id: '3',
    title: 'Buffalo Lodge',
    description: 'Brand identity and visual design for Buffalo Lodge, creating a cohesive and memorable brand experience.',
    fullDescription: 'The Buffalo Lodge project involved creating a complete brand identity and visual design system. The goal was to develop a distinctive and memorable brand that would resonate with the target audience while maintaining a professional and trustworthy image. The project included logo design, color palette development, typography selection, and the creation of various brand assets. The design process focused on creating a cohesive visual language that could be consistently applied across all touchpoints, from digital platforms to physical materials.',
    category: 'Branding',
    client: 'Buffalo Lodge',
    year: '2023',
    role: 'Brand Designer',
    coverImage: '/img/projects/buffalo-lodge/thumbnail.jpg',
    images: [
      '/img/projects/buffalo-lodge/detail-1.jpg',
      '/img/projects/buffalo-lodge/detail-2.jpg',
      '/img/projects/buffalo-lodge/detail-3.jpg'
    ],
    nextProject: {
      title: 'Fort Edmonton Park',
      slug: '/projects/fort-edmonton-park'
    }
  },
  'fort-edmonton-park': {
    id: '4',
    title: 'Fort Edmonton Park',
    description: 'Diverse graphic design assets for Fort Edmonton Park, including menus, social media, email signatures, and pony cards.',
    fullDescription: 'Undertook a variety of graphic design tasks for Fort Edmonton Park, a prominent historical attraction. Responsibilities included redesigning the Johnson\'s Cafe menu for enhanced readability and visual appeal, developing engaging social media posts for various campaigns and announcements, creating professional email signatures to ensure brand consistency across communications, and designing whimsical "pony express" themed pony cards for children visiting the park, adding to the immersive historical experience.',
    category: 'Branding',
    client: 'Fort Edmonton Park',
    year: '2022-2023',
    role: 'Graphic Designer (Contract)',
    coverImage: '/img/projects/fort-edmonton-park/thumbnail.png',
    images: [
      '/img/projects/fort-edmonton-park/thumbnail.png',
      '/img/projects/fort-edmonton-park/menu-after.jpg',
      '/img/projects/fort-edmonton-park/social-post-1.jpg',
      '/img/projects/fort-edmonton-park/social-story-1.jpg',
      '/img/projects/fort-edmonton-park/pony-card.jpg'
    ],
    nextProject: {
      title: 'EIFF Brand Elevation',
      slug: '/projects/eiff-brand-elevation'
    }
  }
};

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
        className="relative h-[50vh] md:h-[70vh] overflow-hidden mb-16"
      >
        <div className="absolute inset-0">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
            priority
            className="brightness-[0.7]"
          />
        </div>
        
        <div className="absolute inset-0 bg-black/30"></div>
        
        <motion.div 
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="relative z-10 container mx-auto px-6 flex flex-col justify-center h-full text-white"
        >
          <motion.div variants={fadeIn} className="text-teal-300 font-medium mb-2">
            {project.category}
          </motion.div>
          <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-bold mb-4 max-w-3xl">
            {project.title}
          </motion.h1>
          <motion.p variants={fadeIn} className="text-xl max-w-2xl">
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
            <div ref={imagesRef} className="project-images space-y-8">
              {project.images.map((image, i) => (
                <div key={i} className="project-image relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${i+1}`}
                    fill
                    style={{ objectFit: slug === 'eiff-brand-elevation' && image.includes('thumbnail.jpg') ? 'contain' : (slug === 'fort-edmonton-park' ? 'contain' : 'cover') }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
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