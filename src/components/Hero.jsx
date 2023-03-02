import React from "react";

export const Hero = () => {
  return (
    <>
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 pt-8 xs:pt-8">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto  text-xl    max-w-xl text-center sm:text-left">
            <h1 className="text-[3rem]">Hi, I'm Carlos</h1>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              Experienced full Stack Developer with a background in bootcamp
              training from UNC. Skilled in React, HTML, CSS, and JavaScript,
              with a passion for building engaging user interfaces and web
              applications. Proficient in various programming languages and
              always eager to learn more. Seeking new opportunities to apply my
              skills and collaborate with other talented developers.
            </p>
            <div className="social-media-div">
              <a
                href="https://github.com/saadpasta"
                className="icon-button github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
                <span></span>
              </a>
              <a
                href="https://www.linkedin.com/in/saadpasta/"
                className="icon-button linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
                <span></span>
              </a>
              <a
                href="mailto:saadpasta70@gmail.com"
                className="icon-button google"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-envelope"></i>
                <span></span>
              </a>
              <a
                href="https://gitlab.com/saadpasta"
                className="icon-button gitlab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-gitlab"></i>
                <span></span>
              </a>
              <a
                href="https://www.facebook.com/saad.pasta7"
                className="icon-button facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
                <span></span>
              </a>
              <a
                href="https://medium.com/@saadpasta"
                className="icon-button medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-medium"></i>
                <span></span>
              </a>
              <a
                href="https://stackoverflow.com/users/10422806/saad-pasta"
                className="icon-button stack-overflow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-stack-overflow"></i>
                <span></span>
              </a>
            </div>
            <div className="mt-4 md:mt-8">
              <a
                href="#"
                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>

        <img
          alt="Student"
          src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-56 w-full object-cover sm:h-full"
        />
      </section>
    </>
  );
};
