import React from 'react';
import { motion } from 'framer-motion';

const Atp = () => {
  // Defining the animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-[#fbfbfb] py-10 text-center">
      <motion.div
        className="max-w-3xl mx-auto py-8 px-8 bg-[#e6f0f0] shadow-lg rounded-lg"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-3xl font-bold mb-6">
          What's my Approach to Development{' '}
          <span className="text-[#20a0a9]"> ???</span>
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          As a web developer, I believe in creating user-centric applications that prioritize
          the needs of the end-user. My approach to development involves writing clean, efficient code that
          results in accessible and intuitive user experiences.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          I try and stay ahead of the curve by continuously learning and experimenting with new technologies.
          Collaboration and communication play a vital role in my development process, as they allow me to understand
          users' needs better and deliver solutions that exceed expectations.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          My ultimate goal is to create impactful and enjoyable web applications that enhance the digital experience
          for users and contribute to meaningful projects within the tech industry.
        </p>
      </motion.div>
    </div>
  );
};

export default Atp;
