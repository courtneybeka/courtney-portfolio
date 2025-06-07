"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="mb-8">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-green-600"
              >
                <path 
                  d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Thank You!</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Your message has been sent successfully. I'll get back to you as soon as possible!
            </p>
          </div>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link 
              href="/"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-xl transition-colors duration-300"
            >
              Back to Home
            </Link>
            <Link 
              href="/projects"
              className="inline-block border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-medium py-3 px-8 rounded-xl transition-colors duration-300"
            >
              View Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 