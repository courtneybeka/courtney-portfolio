"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Users, Award, Sparkles, CheckCircle } from 'lucide-react'; // Example icons

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
      staggerChildren: 0.1
    }
  }
};

const iconStyle = "w-8 h-8 text-purple-500 mb-4";
const sectionHeadingStyle = "text-3xl font-bold mb-10 text-center";
const subHeadingStyle = "text-2xl font-semibold mb-6 text-purple-700 dark:text-purple-400";
const listItemStyle = "mb-2 flex items-start text-gray-600 dark:text-gray-300";
const listItemIconStyle = "w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0";

export default function About() {
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [experienceRef, experienceInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [educationRef, educationInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [volunteerRef, volunteerInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="pt-24 pb-20 dark:bg-gray-900 dark:text-gray-100">
      {/* About Section */}
      <section ref={aboutRef} className="mb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
              Courtney Beka
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl mb-6 text-gray-700 dark:text-gray-300">
              UX/UI Designer & Brand Strategist crafting intuitive and engaging digital experiences.
            </motion.p>
            <motion.p variants={fadeInUp} className="mb-8 text-gray-600 dark:text-gray-400">
              Driven by a passion for user-centered design and creative problem-solving, I specialize in transforming complex challenges into elegant, accessible solutions. My approach combines strategic thinking with a keen eye for detail, ensuring every design is not only visually compelling but also highly functional and aligned with user needs and business goals.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex gap-4 justify-center">
              <Link href="/contact" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300">
                Get In Touch
              </Link>
              {/* Replace with actual path to resume if you host it */}
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-transparent border border-gray-300 dark:border-gray-600 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 px-8 py-3 rounded-full font-medium transition-colors duration-300">
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Summary of Qualifications/Skills Section */}
      <section ref={skillsRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className={sectionHeadingStyle}
          >
            Core Competencies
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
              <Sparkles className={iconStyle} />
              <h3 className={subHeadingStyle}>Technical Proficiency</h3>
              <ul className="space-y-2">
                <li className={listItemStyle}><CheckCircle className={listItemIconStyle} />Proficient in Figma, Adobe Creative Suite (Illustrator, XD, InDesign, Photoshop).</li>
                <li className={listItemStyle}><CheckCircle className={listItemIconStyle} />Productivity tools including Microsoft Office and Google Drive.</li>
                <li className={listItemStyle}><CheckCircle className={listItemIconStyle} />Skilled in creating responsive layouts, static prototypes.</li>
                <li className={listItemStyle}><CheckCircle className={listItemIconStyle} />Accessible digital assets for web and mobile platforms.</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
              <CheckCircle className={iconStyle} />
              <h3 className={subHeadingStyle}>User-Centered & Accessible Design</h3>
              <ul className="space-y-2">
                <li className={listItemStyle}><CheckCircle className={listItemIconStyle} />Strong understanding of UI/UX principles, content audits.</li>
                <li className={listItemStyle}><CheckCircle className={listItemIconStyle} />Information architecture improvements.</li>
                <li className={listItemStyle}><CheckCircle className={listItemIconStyle} />Successfully redesigned the Insight HR website (details in projects).</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
              <Award className={iconStyle} />
              <h3 className={subHeadingStyle}>Visual & Interactive Design Excellence</h3>
              <ul className="space-y-2">
                <li className={listItemStyle}><CheckCircle className={listItemIconStyle} />Proven ability to deliver high-fidelity mockups and cohesive design systems.</li>
                <li className={listItemStyle}><CheckCircle className={listItemIconStyle} />Expertise across branding, web, and campaign materials.</li>
                <li className={listItemStyle}><CheckCircle className={listItemIconStyle} />Designed immersive interfaces for "Shadows of the Sanitorium".</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
              <Users className={iconStyle} />
              <h3 className={subHeadingStyle}>Agile & Collaborative Workflow</h3>
              <ul className="space-y-2">
                <li className={listItemStyle}><CheckCircle className={listItemIconStyle} />Experienced in Agile design processes (research, prototyping, testing, refinement).</li>
                <li className={listItemStyle}><CheckCircle className={listItemIconStyle} />Collaborated with stakeholders, content teams, and non-design leads.</li>
                <li className={listItemStyle}><CheckCircle className={listItemIconStyle} />Align visual communication with user needs and organizational goals.</li>
              </ul>
            </motion.div>
             <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg md:col-span-2 lg:col-span-2">
               <Briefcase className={iconStyle} />
              <h3 className={subHeadingStyle}>Project Coordination & Communication</h3>
              <ul className="space-y-2">
                <li className={listItemStyle}><CheckCircle className={listItemIconStyle} />Comfortable presenting concepts and solutions to diverse stakeholders.</li>
                <li className={listItemStyle}><CheckCircle className={listItemIconStyle} />Experienced in managing timelines, drafting RFPs.</li>
                <li className={listItemStyle}><CheckCircle className={listItemIconStyle} />Ensuring clear communication between design and development.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className={sectionHeadingStyle}
          >
            Professional Experience
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={experienceInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {/* Fort Edmonton Managing Company */}
            <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400">Designer/Marketing Coordinator</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">June 2025 - Present</span>
              </div>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">Fort Edmonton Managing Company</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                <li>Collaborate cross-functionally to align design with marketing and fundraising goals.</li>
                <li>Create static web graphics and layouts optimized for digital platforms.</li>
                <li>Maintain brand consistency across microsites, donation pages, and event assets.</li>
                <li>Enhance user engagement through responsive design and improved information architecture.</li>
                <li>Manage multiple design projects under tight deadlines.</li>
                <li>Apply UX and UI principles to improve visual communication and accessibility.</li>
              </ul>
            </motion.div>

            {/* Fort Edmonton Foundation */}
            <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400">Graphic Designer</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">July 2024 - June 2025</span>
              </div>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">Fort Edmonton Foundation</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                <li>Partnered with marketing, fundraising, and leadership to align visual communication with key messaging and campaign objectives.</li>
                <li>Managed multiple projects simultaneously under tight deadlines, ensuring brand consistency.</li>
                <li>Produced static web-ready graphics and layouts, supporting seamless implementation across platforms.</li>
                <li>Worked within brand guidelines to ensure consistency across digital touchpoints.</li>
                <li>Improved content clarity and user engagement through responsive design and intuitive information architecture.</li>
              </ul>
            </motion.div>

            {/* Boston Pizza */}
            <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400">Server/Expo</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">2021 - Present</span>
              </div>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">Boston Pizza</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                <li>Provided high-quality service to customers in a fast-paced restaurant environment.</li>
                <li>Managed food expo responsibilities, ensuring timely and accurate delivery of orders.</li>
                <li>Addressed and resolved customer inquiries and complaints with professionalism.</li>
              </ul>
            </motion.div>
            
            {/* Fever Candlelight Concert */}
            <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400">Event Production Assistant</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">2021 - 2024</span>
              </div>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">Fever Candlelight Concert</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                <li>Oversaw the setup and breakdown of event stages, demonstrating meticulous attention to visual details and functionality.</li>
                <li>Managed ticket validation and guest seating to enhance attendee experience.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Educational Experience / Student Projects Section */}
      <section ref={educationRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={educationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className={sectionHeadingStyle}
          >
            Key Projects & Educational Experience
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={educationInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {/* Insight Human Resource Inc. */}
            <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400">UX Designer (Student Project)</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">2024 - 2025</span>
              </div>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">Insight Human Resource Inc.</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                <li>Led a complete redesign of the Insight HR website focusing on usability, navigation, and accessibility.</li>
                <li>Conducted user research, content audits, tree testing, and comparative analysis.</li>
                <li>Developed low-to-high fidelity wireframes and interactive prototypes in Figma.</li>
                <li>Ensured responsive layouts for mobile and desktop.</li>
                <li>Collaborated with peers and mentors for testing and iteration.</li>
              </ul>
            </motion.div>

            {/* Shadows of the Sanitorium */}
            <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400">Game Designer & Visual Developer (Student Project)</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">2024</span>
              </div>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">Shadows of the Sanitorium</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                <li>Designed and developed an interactive horror game focused on immersive storytelling and accessible UX.</li>
                <li>Created UI elements, navigation flows, menus, character designs, and environment art.</li>
                <li>Applied user-centered design principles and accessibility best practices.</li>
                <li>Utilized an Agile design process with rapid sprints of research, playtesting, and refinement.</li>
                <li>Integrated sound, lighting, and visual cues to elevate immersion.</li>
              </ul>
            </motion.div>
            
            {/* Education */}
             <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-10 h-10 text-purple-500 mr-4"/>
                <div>
                    <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400">Education</h3>
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">Bachelor of Design with a Minor in User Experience</p>
                <p className="text-md text-gray-600 dark:text-gray-300">Macewan University, 2021 - 2025</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Volunteer Experience Section */}
      <section ref={volunteerRef} className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={volunteerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className={sectionHeadingStyle}
          >
            Volunteer Experience
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={volunteerInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {/* HuRDE */}
            <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400">Design Executive</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">2022 - 2025</span>
              </div>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">Human Rights Diversity and Equity Club (HuRDE)</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                <li>Led design of promotional materials and club logo, enhancing visibility and brand identity.</li>
                <li>Managed social media accounts, driving higher engagement.</li>
              </ul>
            </motion.div>

            {/* Mitchell Art Gallery */}
            <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400">Usher and Gallery Assistant</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">2022 - 2024</span>
              </div>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">Mitchell Art Gallery</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                <li>Enhanced visitor engagement by providing knowledgeable interpretations of art exhibits.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Re-using from previous about page structure */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Interested in working together?</h2>
            <p className="text-xl mb-8 text-purple-100">
              Let's create something amazing. Feel free to reach out!
            </p>
            <Link href="/contact" className="bg-white text-purple-600 hover:bg-purple-100 px-8 py-3 rounded-full font-medium transition-colors duration-300 inline-block">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 