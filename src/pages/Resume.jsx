import React from 'react';
import { motion } from 'framer-motion';
import resume from "../images/resume.jpg";

export const Resume = () => {
  // Animation variants
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  const bounceArrow = {
    bounce: { y: [0, -10, 0], transition: { duration: 0.8, repeat: Infinity } },
  };

  return (
    <div className="resume-container">
      <motion.div className="resume-image" variants={fadeInLeft} initial="hidden" animate="visible">
        <img src={resume} alt="Resume" className="object-cover w-full h-full shadow-lg" />
      </motion.div>
      <motion.div className="resume-content bg-[#fffffff0] flex items-center justify-center flex-1 py-10" variants={fadeInRight} initial="hidden" animate="visible">
        <div className="max-w-xl px-4 py-8 mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Resume
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Click below to download my resume.
          </p>
          <div className="resume-button-container flex flex-col items-center">
            <motion.div className="bounce-arrow mb-4" variants={bounceArrow} animate="bounce">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </motion.div>
            <a
              href="/Resumelos.pdf" download={true}
              className="resume-button inline-block px-5 py-3 text-sm font-medium text-white rounded focus:outline-none focus:ring"
            >
              View Resume
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
