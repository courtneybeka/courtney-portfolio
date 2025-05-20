"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Project types
type ProjectCategory = 'All' | 'UX/UI' | 'Branding' | 'Web Design' | 'Mobile Apps';

interface Project {
  id: string;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, 'All'>;
  image: string;
  slug: string;
}

export default function Projects() {
  // Filter state
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');
  
  // Projects array
  const projects: Project[] = [
    {
      id: '1',
      title: 'Finance Dashboard UI',
      description: 'Modern finance dashboard with data visualization and user-friendly interface',
      category: 'UX/UI',
      image: '/img/projects/finance-dashboard/thumbnail.jpg',
      slug: '/projects/finance-dashboard'
    },
    {
      id: '2',
      title: 'Elevate Wellness Brand',
      description: 'Brand identity design for a premium wellness company',
      category: 'Branding',
      image: '/img/projects/elevate-wellness/thumbnail.jpg',
      slug: '/projects/elevate-wellness'
    },
    {
      id: '3',
      title: 'E-Commerce Platform',
      description: 'Complete redesign of an e-commerce website with improved UX',
      category: 'Web Design',
      image: '/img/projects/ecommerce-redesign/thumbnail.jpg',
      slug: '/projects/ecommerce-redesign'
    },
    {
      id: '4',
      title: 'Health Tracking App',
      description: 'Mobile app design for tracking fitness and wellness metrics',
      category: 'Mobile Apps',
      image: '/img/projects/health-app/thumbnail.jpg',
      slug: '/projects/health-app'
    },
    {
      id: '5',
      title: 'Creative Agency Rebrand',
      description: 'Complete rebrand for a digital creative agency',
      category: 'Branding',
      image: '/img/projects/agency-rebrand/thumbnail.jpg',
      slug: '/projects/agency-rebrand'
    },
    {
      id: '6',
      title: 'Meditation App UI',
      description: 'Calming and intuitive interface for a meditation app',
      category: 'UX/UI',
      image: '/img/projects/meditation-app/thumbnail.jpg',
      slug: '/projects/meditation-app'
    },
    {
      id: '7',
      title: 'EIFF Brand Elevation',
      description: 'Complete brand elevation for the Edmonton International Film Festival, including logo, poster, ticket, and website concepts.',
      category: 'Branding',
      image: '/img/projects/eiff-brand-elevation/detail-2.jpg',
      slug: '/projects/eiff-brand-elevation'
    },
    {
      id: '8',
      title: 'HURDE Logo',
      description: 'Logo design for MacEwan University\'s Human Rights, Diversity, and Equity (HURDE) club.',
      category: 'Branding',
      image: '/img/projects/hurde-logo/hurde.jpg',
      slug: '/projects/hurde-logo'
    },
    {
      id: '9',
      title: 'Fort Edmonton Park Design Work',
      description: 'Diverse graphic design assets for Fort Edmonton Park, including menus, social media, email signatures, and pony cards.',
      category: 'Branding',
      image: '/img/projects/fort-edmonton-park/thumbnail.png',
      slug: '/projects/fort-edmonton-park'
    },
    {
      id: '10',
      title: 'Insight HR UX/UI Case Study',
      description: 'A comprehensive UX/UI case study for an HR management platform, including research, wireframing, prototyping, and final designs.',
      category: 'UX/UI',
      image: '/img/projects/insight-hr-ux/placeholder-thumbnail.jpg',
      slug: '/projects/insight-hr-ux'
    },
  ];
  
  // Filter projects based on active category
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  
  // Categories for filter
  const categories: ProjectCategory[] = ['All', 'UX/UI', 'Branding', 'Web Design', 'Mobile Apps'];
  
  // Intersection observer for animations
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Explore my portfolio of design work including UX/UI, branding, and creative projects.
          </p>
        </motion.div>
        
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeFilter === category 
                  ? 'bg-teal-600 text-white' 
                  : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <Link href={project.slug} className="block">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-teal-600 text-sm font-medium mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center text-teal-600">
                    <span className="font-medium">View Details</span>
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Empty state if no projects match filter */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <h3 className="text-2xl font-bold mb-2">No projects found</h3>
            <p className="text-gray-600 dark:text-gray-300">
              No projects match the selected filter. Try selecting a different category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
} 