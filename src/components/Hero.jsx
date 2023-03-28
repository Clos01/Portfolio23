import React from "react";
import port from "../images/port.jpg";

export const Hero = () => {
  return (
    <div className="shadow-lg h-auto mx-auto w-full overflow-hidden bg-[#85673c9a] ">
      <div className="sm:grid sm:grid-cols-2">
        <div className="py-6 px-4 sm:p-10 text-center sm:text-left">
          <h1 className="text-5xl font-light sm:text-5xl sm:mb-4">Hi, I'm Carlos</h1>
          <p className="text-gray-100 font-light text-2xl sm:text-3xl">
            Experienced full-stack developer skilled in React, HTML, CSS, and JavaScript, seeking new opportunities to apply my skills and collaborate with other talented developers.
          </p>
        </div>
        <div className="sm:py-10">
          <img
            alt="Student"
            src={port}
            className="  sm:rounded-r-lg w-[25rem]"
          />
        </div>
      </div>
    </div>
  );
};
