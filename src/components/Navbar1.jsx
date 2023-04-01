import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(null);
  return (
    <div className="bg-[#a49494c3]  h-full w-full">
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
              <li className="cursor-pointer h-full flex items-center hover:text-[#3d9abc] text-md text-black tracking-normal border-b-2 border-black">
                <Link to="/">Home</Link>
              </li>
              <li className="cursor-pointer h-full flex items-center hover:text-[#3d9abc]  text-md text-black mx-10 tracking-normal">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="cursor-pointer h-full flex items-center hover:text-[#3d9abc]  text- text-black mr-10 tracking-normal">
                <Link to="/Resume">Resume</Link>
              </li>
              <li className="cursor-pointer h-full flex items-center hover:text-[#3d9abc]  text- text-black tracking-normal">
                <Link to="/Contactme">Contact me </Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
      {/* Navbar */}
      <nav>
        <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-gray-800 fixed top-0 z-40">
          <div className="w-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={43}
              height={44}
              viewBox="0 0 43 44"
              fill="none"
            >
              <path fillRule="evenodd" clipRule="evenodd" fill="#667EEA" />
            </svg>
          </div>
          <div>
            <div
              id="menu"
              className="text-white"
              onClick={() => setShow(!show)}
            >
              {show ? (
                " "
              ) : (
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
              )}
            </div>
          </div>
        </div>
        {/*Mobile responsive sidebar*/}
        <div
          className={
            show
              ? "absolute xl:hidden w-full h-full transform -translate-x-0 z-40"
              : "absolute xl:hidden w-full h-full transform -translate-x-full z-40"
          }
          id="mobile-nav"
        >
          <div
            className="bg-gray-800 opacity-50 w-full h-full"
            onClick={() => setShow(!show)}
          />
          <div className="w-64 z-40 fixed overflow-y-auto z-40 top-0 bg-gray-800 shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
            <div className="px-6 h-full">
              <div className="flex flex-col justify-between h-full w-full">
                <div>
                  <div className="mt-6 flex w-full items-center justify-between">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={43}
                          height={44}
                          viewBox="0 0 43 44"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="#667EEA"
                          />
                        </svg>
                        <p className="text-base  text-white ml-3">Portfolio</p>
                      </div>
                      <div
                        id="cross"
                        className="text-white"
                        onClick={() => setShow(!show)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-x"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <line x1={18} y1={6} x2={6} y2={18} />
                          <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <ul className="f-m-m">
                    <div className="cursor-pointer">
                      <li className="text-white pt-10">
                        <div className="flex items-center">
                          <div className="w-6 h-6 md:w-8 md:h-8 text-indigo-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-grid"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <rect x={4} y={4} width={6} height={6} rx={1} />
                              <rect x={14} y={4} width={6} height={6} rx={1} />
                              <rect x={4} y={14} width={6} height={6} rx={1} />
                              <rect x={14} y={14} width={6} height={6} rx={1} />
                            </svg>
                          </div>
                          <div>
                            <ul className="pr-12 xl:flex items-center h-full hidden">
                              <li className="cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-white tracking-normal border-b-2 border-white">
                                <Link to="/">Home</Link>
                              </li>
                              <li className="cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-white mx-10 tracking-normal">
                                <Link to="/projects">Projects</Link>
                              </li>
                              <li className="cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-white mr-10 tracking-normal">
                                <Link to="/Resume">Resume</Link>
                              </li>
                              <li className="cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-white tracking-normal">
                                <Link to="/Contactme">Contact me </Link>
                              </li>
                            </ul>
                          </div>
                          <span className="ml-2 font-bold">
                            <Link to="/">Home</Link>
                          </span>
                        </div>
                      </li>
                    </div>
                    <div className="cursor-pointer">
                      <li className="text-white pt-8">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-puzzle"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                              </svg>
                            </div>
                            <li className="text-white xl:text-base  text-base ml-3">
                              {" "}
                              <Link to="/Projects">Projects </Link>
                            </li>
                          </div>
                        </div>
                      </li>
                    </div>
                    <div className="cursor-pointer">
                      <li className="text-white pt-8">
                        <div className="flex items-center">
                          <div className="w-6 h-6 md:w-8 md:h-8 text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-compass"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <polyline points="8 16 10 10 16 8 14 14 8 16" />
                              <circle cx={12} cy={12} r={9} />
                            </svg>
                          </div>
                          <p className="text-white xl:text-base  text-base ml-3">
                            {" "}
                            <Link to="/Resume">Resume </Link>
                          </p>
                        </div>
                      </li>
                    </div>
                    <li className="text-white pt-8 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-6 h-6 md:w-8 md:h-8 text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-code"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <polyline points="7 8 3 12 7 16" />
                              <polyline points="17 8 21 12 17 16" />
                              <line x1={14} y1={4} x2={10} y2={20} />
                            </svg>
                          </div>
                          <li className="text-white xl:text-base  text-base ml-3">
                            <Link to="/Contactme"> Contact me</Link>
                          </li>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Sidebar ends */}

      {/* Code block ends */}
    </div>
  );
};

export default Navbar;
