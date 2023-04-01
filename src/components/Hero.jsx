import React from "react";
import port from "../images/port.jpg";
import { motion } from 'framer-motion';

const textVariant = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const imageVariant = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export const Hero = () => {
  return (
    <div
      className="shadow-lg h-auto mx-auto w-full overflow-hidden pt-16 sm:pt-0"
      style={{
        backgroundImage: 'linear-gradient(135deg, #2ab2ec, #20c6c6, #038697)',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-0">
        <div className="py-6 px-4 sm:p-10 text-center sm:text-left">
          <motion.div initial="hidden" animate="visible" variants={textVariant}>
            <h1 className="text-4xl font-light sm:text-5xl sm:mb-4 text-white">
              Hi! I'm Carlos Rivas Juarez,
            </h1>
            <p className="text-white text-xl sm:text-2xl font-bold md:text-3xl">
            As a bilingual full-stack developer and UNC-Chapel Hill Coding Boot Camp graduate, I'm Carlos Rivas Juarez. Specializing in the MERN stack, I'm passionate about creating dynamic web applications and enhancing user experiences. With a strong background in customer service and project collaboration, I'm poised to make a positive impact in tech.
            </p>
          </motion.div>
        </div>
        <div className="sm:py-10 flex justify-center items-center">
          <motion.img
            initial="hidden"
            animate="visible"
            variants={imageVariant}
            alt="Student"
            src={port}
            className="w-full sm:w-[25rem] max-w-full sm:rounded-full" // Added "rounded-full" class here
          />
        </div>
      </div>
    </div>
  );
};
