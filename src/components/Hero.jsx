import React from "react";
import port from "../images/port.jpg";

export const Hero = () => {
  return (
    <div className="shadow-lg h-auto mx-auto w-full overflow-hidden bg-gradient-to-r from-[#85673c9a] to-[#6a4f3080] pt-16 sm:pt-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-0">
        <div className="py-6 px-4 sm:p-10 text-center sm:text-left">
          <h1 className="text-4xl font-light sm:text-5xl sm:mb-4 text-white">Hi, I'm Carlos</h1>
          <p className="text-gray-100 font-light text-xl sm:text-2xl md:text-3xl">
            Experienced full-stack developer skilled in React, HTML, CSS, and JavaScript, seeking new opportunities to apply my skills and collaborate with other talented developers.
          </p>
        </div>
        <div className="sm:py-10 flex justify-center items-center">
          <img
            alt="Student"
            src={port}
            className="w-full sm:w-[25rem] max-w-full sm:rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
};
