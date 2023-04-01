import React from "react";
import port from "../images/port.jpg";
import Fade from 'react-reveal/Fade'; // Import Fade animation

export const Hero = () => {
  return (
    <div
      className="shadow-lg h-auto mx-auto w-full overflow-hidden pt-16 sm:pt-0"
      style={{
        backgroundImage: 'linear-gradient(135deg, #2ab2ec, #038697)',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-0">
        <div className="py-6 px-4 sm:p-10 text-center sm:text-left">
          <Fade left>
            <h1 className="text-4xl font-light sm:text-5xl sm:mb-4 text-white">
              Hi! I'm Carlos Rivas Juarez,
            </h1>
            <p className="text-white text-xl sm:text-2xl font-bold md:text-3xl">
              An experienced full-stack web developer and graduate of UNC-Chapel Hill's The Coding Boot Camp. My technical expertise includes proficiency in React, HTML, CSS, JavaScript, Git, and other web development technologies. I'm passionate about crafting unique and visually stunning user experiences, and I'm actively seeking new opportunities to apply my skills, collaborate with fellow developers, and contribute to meaningful projects in the tech industry.
            </p>
          </Fade>
        </div>
        <div className="sm:py-10 flex justify-center items-center">
          <Fade right>
            <img
              alt="Student"
              src={port}
              className="w-full sm:w-[25rem] max-w-full sm:rounded-r-lg"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};
