import React from 'react';
import resume from "../images/resume.jpg"
export const Resume = () => {
  return (
    <div>
      <div className="flex flex-col h-screen bg-white">
  <img
    src= {resume}
    alt=""
    className="object-cover w-full h-64"
  />

  <div className="flex items-center justify-center flex-1">
    <div className="max-w-xl px-4 py-8 mx-auto text-center">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      Resume
      </h1>

      <p className="mt-4 text-gray-500">
        Click Below to download Resume
      </p>

      <a
     href="/resume2023.pdf"  download={true}
        className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
      >
      View Resume
      </a>
    </div>
  </div>
</div>

      {/* <a href="/resume.pdf"  download={true}>
        View Resume
      </a> */}
    </div>
  );
};