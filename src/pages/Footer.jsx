import React from "react";
import { FaLinkedin, FaGithub,  } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
  return (
    <footer className="bg-[#2ab2ec] text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col items-center text-center">
          <h4 className="text-xl font-bold mb-4">Carlos Rivas</h4>
          <p className="mb-4">
            Please feel free to contact me for any questions
          </p>
          {/* Social media icons */}
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/carlos-rivas-0a5b87228/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-6 h-6 hover:text-blue-400" />
            </a>
            <a href="https://github.com/Clos01?tab=repositories" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-6 h-6 hover:text-gray-400" />
            </a>
            {/* <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-6 h-6 hover:text-blue-500" />
            </a> */}
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
export default Footer;
