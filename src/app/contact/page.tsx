"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      }
    }
  };

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Let's collaborate! Fill out the form below to discuss your next project or just to say hello.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          >
            <form action="https://formsubmit.co/courtneybekadesigns@gmail.com" method="POST">
              <input type="hidden" name="_next" value="https://courtneybekadesigns.com/thank-you" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" style={{ display: 'none' }} />
              
              <motion.div variants={itemVariants} className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Your Name"
                />
              </motion.div>
              
              <motion.div variants={itemVariants} className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </motion.div>
              
              <motion.div variants={itemVariants} className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select a subject</option>
                  <option value="Project Inquiry">Project Inquiry</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="General Question">General Question</option>
                  <option value="Other">Other</option>
                </select>
              </motion.div>
              
              <motion.div variants={itemVariants} className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none dark:bg-gray-700 dark:text-white"
                  placeholder="Your message here..."
                ></textarea>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:mt-10"
          >
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Feel free to reach out through the contact form or directly via email or social media.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-teal-100 dark:bg-teal-900/50 p-3 rounded-full mr-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a href="mailto:courtneybekadesigns@gmail.com" className="text-teal-600 hover:underline">
                      courtneybekadesigns@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-teal-100 dark:bg-teal-900/50 p-3 rounded-full mr-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 12H16.5M12 7.5V12" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Working Hours</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monday - Friday: 9am - 6pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full transition-transform hover:scale-110 text-teal-600 hover:text-teal-700">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full transition-transform hover:scale-110 text-teal-600 hover:text-teal-700">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.5 3.5C18.7795 5.31863 20.2208 7.87337 20.58 10.68C20.24 10.82 15.62 12.38 10.96 11.62C10.82 11.32 10.68 11 10.52 10.7C11.82 8.36 14.16 5.22 16.5 3.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.5 2.58C13.14 0.82 17.86 2.42 20.56 5.14C17.84 7.9 15.14 9.8 13.22 11.06C10.54 7.8 8.9 5 8.5 2.58Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.42 10.06C4.5 9.98 8.22 9.86 12.18 10.86C9.38 14.42 7.18 17.28 6.14 18.94C3.8 17.04 2.24 13.68 2.42 10.06Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full transition-transform hover:scale-110 text-teal-600 hover:text-teal-700">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.5 2.5H7.5C4.73858 2.5 2.5 4.73858 2.5 7.5V16.5C2.5 19.2614 4.73858 21.5 7.5 21.5H16.5C19.2614 21.5 21.5 19.2614 21.5 16.5V7.5C21.5 4.73858 19.2614 2.5 16.5 2.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="https://behance.net/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full transition-transform hover:scale-110 text-teal-600 hover:text-teal-700">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 16H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 8H15C14.4696 8 13.9609 8.21071 13.5858 8.58579C13.2107 8.96086 13 9.46957 13 10V16C13 16.5304 13.2107 17.0391 13.5858 17.4142C13.9609 17.7893 14.4696 18 15 18H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 