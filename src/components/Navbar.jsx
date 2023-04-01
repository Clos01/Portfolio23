import React, { useState } from "react";
import { Link } from "react-router-dom";


const NavItem = ({ to, label, className }) => (
  <li className={`cursor-pointer h-full flex items-center hover:text-[#3d9abc] text-md text-black tracking-normal ${className}`}>
    <Link to={to}>{label}</Link>
  </li>
);

const MobileNavItem = ({ to, label, onLinkClick }) => (
  <div className="cursor-pointer">
    <li className="text-white pt-8">
      <div className="flex items-center justify-between">
        {/* You can insert an icon here if needed */}
        <li className="text-white xl:text-base text-base ml-3">
        <Link to={to} onClick={onLinkClick}>{label}</Link>
        </li>
      </div>
    </li>
  </div>
);


const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleLinkClick = () => {
    setShow(false);
  };
  const navItems = [
    { to: "/", label: "Home", className: "border-b-2 border-black" },
    { to: "/projects", label: "Projects", className: "mx-10" },
    { to: "/Resume", label: "Resume", className: "mr-10" },
    { to: "/Contactme", label: "Contact me", className: "" },
  ];

  return (
    <div className="bg-[#a49494c3] h-full w-full">
    {/* Code block starts */}
    <nav className="w-full mx-auto hidden xl:block bg-[#ffffffc3] shadow">
      <div className="container px-6 justify-between h-16 flex items-center lg:items-stretch mx-auto">
        <div className="h-full flex items-center">
          <div className="mr-10 flex items-center">
            <h3 className="text-base text-[#09b5d7] font-bold tracking-normal leading-tight ml-3 hidden lg:block">
              CJR
            </h3>
          </div>
          <ul className="pr-12 xl:flex items-center h-full hidden">
            {navItems.map((item) => (
              <NavItem key={item.to} {...item} />
            ))}
          </ul>
        </div>
      </div>
      </nav>
        {/* Mobile navigation code here */}
        <nav className="w-full mx-auto xl:hidden bg-[#ffffffc3] shadow">
        <div className="container px-6 justify-between h-16 flex items-center">
          {/* Hamburger icon */}
          <div className="text-black cursor-pointer" onClick={() => setShow(!show)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu-2"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1={4} y1={6} x2={20} y2={6} />
              <line x1={4} y1={12} x2={20} y2={12} />
              <line x1={4} y1={18} x2={20} y2={18} />
            </svg>
          </div>
        </div>
        {/* Mobile Navigation Menu */}
        {show && (
          <div className="w-full bg-gray-800 z-40">
          <ul className="f-m-m">
          {navItems.map((item) => (
            <MobileNavItem key={item.to} {...item} onLinkClick={handleLinkClick} />
          ))}
        </ul>
          </div>
        )}
      </nav>
    </div>
  );
};



export default Navbar;
