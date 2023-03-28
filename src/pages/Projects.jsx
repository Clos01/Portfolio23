import React from "react";
import rivas from "../images/Rivas.png";
import friends from "../images/friends.png";
import Disco from "../images/Disco.png";
import budget from "../images/budget.png";
import quiz from "../images/quiz.png";
// import project5 from "../images/project5.png";

const ProjectCard = ({ image, subtitle, demoLink, codeLink, description, mindes }) => (
  <div className="lg:w-1/3 sm:w-1/2 p-4">
    <div className="flex relative border border-blue-500">
      <img
        alt="gallery"
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={image}
      />
      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
          {subtitle}
        </h2>
       
        <p className="leading-relaxed">
        {description}
        </p>
        <div className="pt-8 text-center">
          <a href={demoLink}>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#1172b6] text-white text-lg">
              Demo
            </button>
          </a>
          <a href={codeLink}>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#1172b6] text-white text-lg">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export const Projects = () => (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
  Work
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
     Here are acouple of the projects i have built 
        </p>
      </div>
      <div className="flex flex-wrap ">
        <ProjectCard
          image={rivas}
          subtitle="Rivas Tile Painting LLc"
          description="Actual website for a real company {Live Site}" 
          demoLink="https://www.rivastpllc.com"
          codeLink="https://github.com/Clos01/rivastpllc"
        />
        <ProjectCard
          image={friends}
          subtitle="Friends in seattle"
          description="Built it with a team, you are able to message your friends, has a database, login and sign up too, give it a TRY!" 
          demoLink="https://friendless-in-seattle.herokuapp.com/friends"
          codeLink="https://github.com/Clos01/Friendless-in-seattle"
        />
        <ProjectCard
          image={Disco}
          subtitle="Disco at the dungeon"
          description="Built with a team, was created with react, javascript, nodeJS" 
          demoLink="https://dnd-character-creator1.herokuapp.com/"
          codeLink="https://github.com/Clos01/DND-project-"
        />
         <ProjectCard
          image={budget}
          subtitle="Budget APP"
          description="Built it in school couple of first time using some backend" 
          demoLink="https://github.com/Clos01/Los-Budget-Tracker"
          codeLink="https://github.com/Clos01/Los-Budget-Tracker"
        />
         <ProjectCard
          image={quiz}
          subtitle="Javascript JS"
          description="One of my first projects built with JS" 
          demoLink="https://clos01.github.io/Js-Quiz-Los/"
          codeLink="https://github.com/Clos01/Js-Quiz-Los"
        />
         {/* <ProjectCard
          image={rivas}
          subtitle="THE SUBTITLE 3"
          description="Built it with a team, you are able to message your friends, has a database, login and sign up too, give it a TRY!" 
          demoLink="https://example.com"
          codeLink="https://github.com/example"
        /> */}
    
                </div>
      </div>
  </section>
);
