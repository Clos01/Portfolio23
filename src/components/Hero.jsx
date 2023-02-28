import React from "react";

export const Hero = () => {
  return (
    <>
      <section class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 pt-8 xs:pt-8">
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="mx-auto max-w-xl text-center sm:text-left">
            <h1>Hi all, I'm Carlos</h1>

            <p class="hidden text-gray-500 md:mt-4 md:block">
              A passionate Full Stack Software Developer 🚀 having an experience
              of building Web applications with JavaScript / Reactjs / Nodejs /
              React Native and some other cool libraries and frameworks.
            </p>
            <div class="social-media-div">
              <a
                href="https://github.com/saadpasta"
                class="icon-button github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-github"></i>
                <span></span>
              </a>
              <a
                href="https://www.linkedin.com/in/saadpasta/"
                class="icon-button linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-linkedin-in"></i>
                <span></span>
              </a>
              <a
                href="mailto:saadpasta70@gmail.com"
                class="icon-button google"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fas fa-envelope"></i>
                <span></span>
              </a>
              <a
                href="https://gitlab.com/saadpasta"
                class="icon-button gitlab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-gitlab"></i>
                <span></span>
              </a>
              <a
                href="https://www.facebook.com/saad.pasta7"
                class="icon-button facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-facebook-f"></i>
                <span></span>
              </a>
              <a
                href="https://medium.com/@saadpasta"
                class="icon-button medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-medium"></i>
                <span></span>
              </a>
              <a
                href="https://stackoverflow.com/users/10422806/saad-pasta"
                class="icon-button stack-overflow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-stack-overflow"></i>
                <span></span>
              </a>
            </div>
            <div class="mt-4 md:mt-8">
              <a
                href="#"
                class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>

        <img
          alt="Student"
          src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          class="h-56 w-full object-cover sm:h-full"
        />
      </section>
    </>
  );
};
