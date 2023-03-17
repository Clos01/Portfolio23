import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-[#1c5f93c3]  text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-between">
            <h2 className="text-xl font-bold mb-4">Social</h2>
            <div className="flex">
              <a href="#" target="_blank" rel="noreferrer" className="mr-4">
                <img src="./assets/png/linkedin-ico.png" alt="icon" className="w-8 h-8" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="mr-4">
                <img src="./assets/png/github-ico.png" alt="icon" className="w-8 h-8" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="mr-4">
                <img src="./assets/png/twitter-ico.png" alt="icon" className="w-8 h-8" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="mr-4">
                <img src="./assets/png/yt-ico.png" alt="icon" className="w-8 h-8" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <img src="./assets/png/insta-ico.png" alt="icon" className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-bold mb-4">Carlos Rivas</h4>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit facilis tempora explicabo quae quod deserunt
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          © {new Date().getFullYear()}. Made by{' '}
          <p className="inline-block">Carlos</p>
        </div>
      </div>
    </footer>
  );
};
