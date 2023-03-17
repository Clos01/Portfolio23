import React from "react";
import port from "../images/port.jpg";

export const Hero = () => {
  return (
    <div className=" pb-5 shadow-lg h-[42rem] mx-auto   w-full overflow-y-hidden ">
      <section className="bg-[#85673c9a] sm:grid sm:grid-cols-2 pt-10 xs:pt-4">
        <div className=" lg:py-2 mx-auto text-center sm:text-left max-w-xs">
          <h1 className="text-5xl font-light">Hi, I'm Carlos</h1>
          <p className="hidden md:block text-gray-100 pt-6 pb-2 font-light text-3xl">
            Experienced full-stack developer skilled in React, HTML, CSS,
            <br/> 
            and JavaScript, seeking new opportunities to apply my skills and
            collaborate with other talented developers.
          </p>

          {/* <div className="mt-2 md:mt-2">
            <a href="#" className="inline-block px-8 py-2 text-sm font-medium text-white bg-emerald-600 rounded transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400">Get Started Today</a>
          </div> */}
        </div>
        <img
          alt="Student"
          src={port}
          className="object-cover w-full sm:w-3/4 sm:h-3/4 rounded-lg"
        />
      </section>
    </div>
  );
};
