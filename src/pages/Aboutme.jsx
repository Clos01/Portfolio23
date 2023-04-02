import React from "react";

export const Aboutme = () => {
  return (
    <div className="bg-gray-200 py-10 text-center">
      <div className="max-w-2xl mx-auto py-8 px-8 bg-white shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6">About me</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            An experienced full-stack web developer and graduate of UNC-Chapel Hill's The Coding Boot Camp. My technical expertise includes proficiency in React, HTML, CSS, JavaScript, Git, and other web development technologies. I'm passionate about crafting unique and visually stunning user experiences, and I'm actively seeking new opportunities to apply my skills, collaborate with fellow developers, and contribute to meaningful projects in the tech industry.
          </p>
          <div className="flex justify-center items-center flex-wrap gap-4">
            <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="Skill" />
            <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/919/919851.png" alt="Skill" />
            <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/2772/2772128.png" alt="Skill" />
            <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="Skill" />
            <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="Skill" />
            <img className="w-10 h-10" src="https://t4.ftcdn.net/jpg/00/90/67/37/240_F_90673721_nTq4hQ0UG1RxQ1niYwMnhzp05fsdkZyN.jpg" alt="Skill" />
          </div>
        </div>
      </div>
    </div>
  );
};
