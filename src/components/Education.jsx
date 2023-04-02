import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import edulogo from '../logo/edulogo.png';
import '../App.css';

function Education() {
  // Define the animation variants
  const logoVariants = {
    jump: {
      y: [10, -10], // Move the logo up and down by 10 pixels
      transition: {
        duration: 0.9, // Duration of one jump
        repeat: Infinity, // Repeat the animation indefinitely
        repeatDelay: 0.5, // Delay between repetitions (5 seconds - duration of one jump)
        ease: "easeOut" // Use "easeOut" easing function for a smoother effect
      }
    }
  };

  return (
    <section className="section pb-0 my-5 bg-[#fbfbfb]">
      <div className="containerEdu">
        <div className="headerContainer">
          {/* Wrap the logo with the motion component and apply the animation variants */}
          <motion.img
            className='imgedu'
            src={edulogo}
            alt=""
            variants={logoVariants}
            initial="jump" // Set the initial state of the animation
            animate="jump" // Animate to the jump state
          />
          <div className="headerText">
            Education
          </div>
        </div>
        <div className="cardContainer">
          <div className="cardTitle">UNC at Chapel Hill</div>
          <div className="cardSubtitle">Certificate of Full Stack Developer</div>
          <div className="cardDescription">
          I completed an intensive 24-week program that provided comprehensive training in web development. The curriculum began with foundational concepts such as HTML and progressively advanced to cover the creation of dynamic websites utilizing the MERN stack (MongoDB, Express.js, React.js, Node.js). The program also included instruction on building and integrating APIs, with a focus on practical application in real-world scenarios.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
