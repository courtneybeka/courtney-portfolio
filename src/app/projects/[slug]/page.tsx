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
  fullDescription: string[];
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
const projectsData: Record<string, Project> = {
  'finance-dashboard': {
    id: '1',
    title: 'Finance Dashboard UI',
    description: 'Modern finance dashboard with data visualization and user-friendly interface',
    fullDescription: [
      'This project involved designing a comprehensive finance dashboard for a fintech startup, focusing on making complex financial data easily understandable and actionable for users.',
      'The dashboard needed to display various metrics, transactions, investments, and trends in a clear, organized manner while maintaining a modern aesthetic that aligned with the brand identity.',
      'I conducted user research with target audiences, created wireframes, and developed high-fidelity prototypes that were tested and refined based on user feedback before finalizing the design.'
    ],
    category: 'UX/UI',
    client: 'FinTech Startup',
    year: '2022',
    role: 'Lead UX/UI Designer',
    coverImage: '/img/projects/finance-dashboard/thumbnail.jpg',
    images: ['/img/projects/finance-dashboard/thumbnail.jpg', '/img/projects/finance-dashboard/detail-1.jpg', '/img/projects/finance-dashboard/detail-2.jpg'],
    nextProject: {
      title: 'Elevate Wellness Brand',
      slug: '/projects/elevate-wellness'
    }
  },
  'elevate-wellness': {
    id: '2',
    title: 'Elevate Wellness Brand',
    description: 'Brand identity design for a premium wellness company',
    fullDescription: [
      'Elevate Wellness approached me to create a cohesive brand identity that would position them as a premium wellness provider in a competitive market.',
      'The branding needed to convey tranquility, professionalism, and a holistic approach to health, while being versatile enough for various applications across digital and print media.',
      'I developed a comprehensive brand strategy and visual identity system including logo design, color palette, typography, and brand guidelines that helped establish their unique position in the wellness industry.'
    ],
    category: 'Branding',
    client: 'Elevate Wellness',
    year: '2022',
    role: 'Brand Strategist & Designer',
    coverImage: '/img/projects/elevate-wellness/thumbnail.jpg',
    images: ['/img/projects/elevate-wellness/thumbnail.jpg', '/img/projects/elevate-wellness/detail-1.jpg', '/img/projects/elevate-wellness/detail-2.jpg'],
    nextProject: {
      title: 'E-Commerce Platform',
      slug: '/projects/ecommerce-redesign'
    }
  },
  'ecommerce-redesign': {
    id: '3',
    title: 'E-Commerce Platform',
    description: 'Complete redesign of an e-commerce website with improved UX',
    fullDescription: [
      'This project involved reimagining the online shopping experience for a clothing retailer struggling with cart abandonment and confusing navigation paths.',
      'I conducted a thorough UX audit, identifying pain points and opportunities to streamline the customer journey from product discovery to checkout.',
      'The redesign included a more intuitive categorization system, enhanced product filtering, simplified checkout, and responsive designs optimized for all devices, resulting in a 35% increase in conversion rate.'
    ],
    category: 'Web Design',
    client: 'Fashion Retailer',
    year: '2021',
    role: 'UX Designer',
    coverImage: '/img/projects/ecommerce-redesign/thumbnail.jpg',
    images: ['/img/projects/ecommerce-redesign/thumbnail.jpg', '/img/projects/ecommerce-redesign/detail-1.jpg', '/img/projects/ecommerce-redesign/detail-2.jpg'],
    nextProject: {
      title: 'Health Tracking App',
      slug: '/projects/health-app'
    }
  },
  'health-app': {
    id: '4',
    title: 'Health Tracking App',
    description: 'Mobile app design for tracking fitness and wellness metrics',
    fullDescription: [
      'I was tasked with designing a health tracking mobile application that would help users monitor various aspects of their wellness journey in an engaging, intuitive way.',
      'The app needed to track multiple metrics like activity, nutrition, sleep, and mental wellness while making the data collection process seamless and providing meaningful insights.',
      'I created a user-centered design with customizable dashboards, achievement systems, and visual data representations that encouraged regular engagement and helped users understand their health patterns.'
    ],
    category: 'Mobile Apps',
    client: 'Health Tech Company',
    year: '2021',
    role: 'Mobile UI/UX Designer',
    coverImage: '/img/projects/health-app/thumbnail.jpg',
    images: ['/img/projects/health-app/thumbnail.jpg', '/img/projects/health-app/detail-1.jpg', '/img/projects/health-app/detail-2.jpg'],
    nextProject: {
      title: 'Creative Agency Rebrand',
      slug: '/projects/agency-rebrand'
    }
  },
  'agency-rebrand': {
    id: '5',
    title: 'Creative Agency Rebrand',
    description: 'Complete rebrand for a digital creative agency',
    fullDescription: [
      'A digital creative agency approached me for a complete rebrand as they were expanding their services and wanted their visual identity to better reflect their evolved positioning.',
      'The project encompassed developing a new brand strategy, visual identity, messaging framework, and guidelines for implementing the brand across various touchpoints.',
      'I created a bold, distinctive brand system that communicated their creative expertise while maintaining a professional image that would appeal to their corporate clients.'
    ],
    category: 'Branding',
    client: 'Digital Creative Agency',
    year: '2020',
    role: 'Brand Designer',
    coverImage: '/img/projects/agency-rebrand/thumbnail.jpg',
    images: ['/img/projects/agency-rebrand/thumbnail.jpg', '/img/projects/agency-rebrand/detail-1.jpg', '/img/projects/agency-rebrand/detail-2.jpg'],
    nextProject: {
      title: 'Meditation App UI',
      slug: '/projects/meditation-app'
    }
  },
  'meditation-app': {
    id: '6',
    title: 'Meditation App UI',
    description: 'Calming and intuitive interface for a meditation app',
    fullDescription: [
      'This project involved designing a meditation app interface that would create a sense of calm and ease for users while making meditation practices accessible and engaging.',
      'The design needed to cater to both beginners and experienced meditators, with features like guided sessions, progress tracking, and customizable experiences.',
      'I developed a minimalist UI with thoughtful animations, a soothing color palette, and intuitive navigation that helped users focus on their practice without distractions.'
    ],
    category: 'UX/UI',
    client: 'Wellness Tech Startup',
    year: '2020',
    role: 'Lead UI Designer',
    coverImage: '/img/projects/meditation-app/thumbnail.jpg',
    images: ['/img/projects/meditation-app/thumbnail.jpg', '/img/projects/meditation-app/detail-1.jpg', '/img/projects/meditation-app/detail-2.jpg'],
    nextProject: {
      title: 'EIFF Brand Elevation',
      slug: '/projects/eiff-brand-elevation'
    }
  },
  'eiff-brand-elevation': {
    id: '7',
    title: 'EIFF Brand Elevation',
    description: 'Complete brand elevation for the Edmonton International Film Festival, including logo redesign, poster, ticket, and website homepage concepts.',
    fullDescription: [
      'Tasked with modernizing the brand for the Edmonton International Film Festival (EIFF) to attract a broader audience while honoring its legacy.',
      'Developed a new dynamic logo, a visually striking poster design, updated ticket layouts, and a concept for a more engaging and user-friendly website homepage.',
      'The refreshed branding aimed to convey the excitement and diversity of the film festival experience.'
    ],
    category: 'Branding',
    client: 'Edmonton International Film Festival (Conceptual)',
    year: '2023',
    role: 'Brand Designer & UI/UX Conceptualist',
    coverImage: '/img/projects/eiff-brand-elevation/detail-2.jpg',
    images: ['/img/projects/eiff-brand-elevation/thumbnail.jpg', '/img/projects/eiff-brand-elevation/detail-1.jpg', '/img/projects/eiff-brand-elevation/detail-2.jpg'],
    nextProject: {
      title: 'HURDE Logo',
      slug: '/projects/hurde-logo'
    }
  },
  'hurde-logo': {
    id: '8',
    title: 'HURDE Logo',
    description: 'Logo design for MacEwan University\'s Human Rights, Diversity, and Equity (HURDE) club.',
    fullDescription: [
      'As the Design Executive for the Human Rights, Diversity, and Equity (HURDE) club at MacEwan University, I was responsible for creating a distinct and meaningful logo.',
      'The design aimed to represent the core values of the club, emphasizing inclusivity, support, and the diverse voices within the university community dedicated to human rights causes.'
    ],
    category: 'Branding',
    client: 'HURDE Club - MacEwan University',
    year: '2023', // Assuming a recent year, please correct if needed
    role: 'Design Executive',
    coverImage: '/img/projects/hurde-logo/hurde.jpg',
    images: ['/img/projects/hurde-logo/hurde.jpg'], // Only one image for now
    nextProject: {
      title: 'Finance Dashboard UI', // Or the first project in your list
      slug: '/projects/finance-dashboard'
    }
  },
  'fort-edmonton-park': {
    id: '9',
    title: 'Fort Edmonton Park Design Work',
    description: 'Diverse graphic design assets for Fort Edmonton Park, including menus, social media, email signatures, and pony cards.',
    fullDescription: [
      'Undertook a variety of graphic design tasks for Fort Edmonton Park, a prominent historical attraction.',
      'Responsibilities included redesigning the Johnson\'s Cafe menu for enhanced readability and visual appeal (showcasing the completed "after" version).',
      'Developed a series of engaging social media posts for various campaigns and announcements, including content formatted for vertical story displays.',
      'Created professional email signatures to ensure brand consistency across communications.',
      'Designed a set of informational and visually appealing pony cards for visitor engagement.'
    ],
    category: 'Branding',
    client: 'Fort Edmonton Park',
    year: '2023-2024', // Please confirm or update this year
    role: 'Graphic Designer', // Please confirm or update this role
    coverImage: '/img/projects/fort-edmonton-park/thumbnail.png',
    images: [
      '/img/projects/fort-edmonton-park/detail-menu.jpg',
      '/img/projects/fort-edmonton-park/detail-email-signature.png',
      '/img/projects/fort-edmonton-park/detail-ponycard.jpg'
    ],
    nextProject: {
      title: 'Finance Dashboard UI', // Loops back to the first project
      slug: '/projects/finance-dashboard'
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
            <div className="mb-12">
              {project.fullDescription.map((paragraph, i) => (
                <motion.p 
                  key={i}
                  variants={fadeIn}
                  className="mb-6 text-gray-600 dark:text-gray-300"
                >
                  {paragraph}
                </motion.p>
              ))}
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