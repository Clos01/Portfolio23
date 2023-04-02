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

const paragraphVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
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
            <hr className="border-white w-3/4 mx-auto sm:mx-0 my-4" /> {/* White line */}
            <motion.p
              className="text-white  text-center text-md sm:text-2xl font-bold md:text-3xl leading-relaxed"
              initial="hidden"
              animate="visible"
              variants={paragraphVariant}
            >
              Let me introduce myself, i'm a <span className="text-[#295986]">full-stack developer</span> who loves turning ideas into reality through 
              coding. <span className="text-[#295986]">When I'm not working on web development, </span> I enjoy fixing cars, 
              trying out new recipes, and exploring the outdoors. Spending time with family and friends, doing fun activities, and
               making memories is super important to me. <span className="text-[#295986]"> My background in customer service </span> has helped 
               me become a great communicator and understand users' needs, so I always make sure my work is <span className="text-darkblue">user-friendly</span>. 
               I'm excited to connect with others who share my interests, and together, we can create amazing things!
            </motion.p>
          </motion.div>
        </div>
        <div className="sm:py-10 flex justify-center items-center">
          <motion.img
            initial="hidden"
            animate="visible"
            variants={imageVariant}
            alt="Student"
            src={port}
            className="w-full sm:w-[21rem] max-w-full sm:rounded-full" // Added "rounded-full" class here
          />
        </div>
      </div>
    </div>
  );
};

// Add the following CSS class in your CSS file or inside a <style>
