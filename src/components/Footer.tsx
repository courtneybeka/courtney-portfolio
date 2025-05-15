"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Social links
  const socialLinks = [
    { name: 'Dribbble', url: 'https://dribbble.com/' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/' },
    { name: 'Instagram', url: 'https://instagram.com/' },
    { name: 'Behance', url: 'https://behance.net/' },
  ];

  // Footer navigation
  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.6
      }
    }
  };

  const linkVariants = {
    initial: { opacity: 0.6 },
    hover: { 
      opacity: 1,
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      className="bg-black text-white py-16"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-tighter">
              COURTNEY<span className="text-purple-500">.</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Creating meaningful digital experiences through thoughtful design and creative strategy.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <motion.div
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <Link href={link.path} className="text-gray-400 hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <motion.div
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="text-gray-400">
              Get in touch for collaborations and inquiries.
            </p>
            <p className="text-gray-400">
              hello@courtneybeka.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center md:text-left text-sm text-gray-500">
          <p>© {currentYear} Courtney Beka. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer; 