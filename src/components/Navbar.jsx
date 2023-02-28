import React from 'react';
import { useState } from 'react';

const Navbar = () => {
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);
  return (
    <div className="bg-gray-200 h-full w-full">
    {/* Code block starts */}
    <nav className="w-full mx-auto hidden xl:block bg-gray-800 shadow">
        <div className="container px-6 justify-between h-16 flex items-center lg:items-stretch mx-auto">
            <div className="h-full flex items-center">
                <div className="mr-10 flex items-center">
                    <svg aria-label="Home" id="logo" enableBackground="new 0 0 300 300" height={44} viewBox="0 0 300 300" width={43} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g>
                            <path
                                fill="#4c51bf"
                            />
                        </g>
                    </svg>
                    <h3 className="text-base text-white font-bold tracking-normal leading-tight ml-3 hidden lg:block">The North</h3>
                </div>
                <ul className="pr-12 xl:flex items-center h-full hidden">
                    <li className="cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-white tracking-normal border-b-2 border-white">Dashboard</li>
                    <li className="cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-white mx-10 tracking-normal">Products</li>
                    <li className="cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-white mr-10 tracking-normal">Performance</li>
                    <li className="cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-white tracking-normal">Deliverables</li>
                </ul>
            </div>
           
            <div className="flex items-center xl:hidden">
                <ul className="p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16 hidden">
                    <li className="flex md:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                            <span className="ml-2 font-bold">Dashboard</span>
                        </div>
                    </li>
                    <li className="flex md:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                        <div className="flex items-center">
                            <span className="ml-2 font-bold">Products</span>
                        </div>
                    </li>
                    <li className="flex md:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                        <div className="flex items-center">
                            <span className="ml-2 font-bold">Performance</span>
                        </div>
                    </li>
                    <li className="border-b border-gray-300 flex md:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                        <span className="ml-2 font-bold">Deliverables</span>
                    </li>
                    <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                            <div className="w-12 cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-150 ease-in-out">
                                <img className="rounded h-10 w-10 object-cover" src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png" alt="logo" />
                            </div>
                            <p className="text-sm ml-2 cursor-pointer">Jane Doe</p>
                            <div className="sm:ml-2 text-white relative">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down cursor-pointer" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </div>
                        </div>
                    </li>
                    <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={12} cy={7} r={4} />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>
                            <span className="ml-2">Profile</span>
                        </div>
                    </li>
                    <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                            <path d="M7 12h14l-3 -3m0 6l3 -3" />
                        </svg>
                        <span className="ml-2">Sign out</span>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    {/* Navbar */}
    <nav>
        <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-gray-800 fixed top-0 z-40">
            <div className="w-24">
                <svg xmlns="http://www.w3.org/2000/svg" width={43} height={44} viewBox="0 0 43 44" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                     
                        fill="#667EEA"
                    />
                </svg>
            </div>
            <div>
                <div id="menu" className="text-white" onClick={() => setShow(!show)}>
                    {show ? (
                        " "
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
        <div className={show ? "absolute xl:hidden w-full h-full transform -translate-x-0 z-40" : "absolute xl:hidden w-full h-full transform -translate-x-full z-40"} id="mobile-nav">
            <div className="bg-gray-800 opacity-50 w-full h-full" onClick={() => setShow(!show)} />
            <div className="w-64 z-40 fixed overflow-y-auto z-40 top-0 bg-gray-800 shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
                <div className="px-6 h-full">
                    <div className="flex flex-col justify-between h-full w-full">
                        <div>
                            <div className="mt-6 flex w-full items-center justify-between">
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={43} height={44} viewBox="0 0 43 44" fill="none">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                fill="#667EEA"
                                            />
                                        </svg>
                                        <p className="text-base  text-white ml-3">The North</p>
                                    </div>
                                    <div id="cross" className="text-white" onClick={() => setShow(!show)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <line x1={18} y1={6} x2={6} y2={18} />
                                            <line x1={6} y1={6} x2={18} y2={18} />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <ul className="f-m-m">
                                <a className="cursor-pointer">
                                    <li className="text-white pt-10">
                                        <div className="flex items-center">
                                            <div className="w-6 h-6 md:w-8 md:h-8 text-indigo-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <rect x={4} y={4} width={6} height={6} rx={1} />
                                                    <rect x={14} y={4} width={6} height={6} rx={1} />
                                                    <rect x={4} y={14} width={6} height={6} rx={1} />
                                                    <rect x={14} y={14} width={6} height={6} rx={1} />
                                                </svg>
                                            </div>
                                            <p className="text-indigo-700 xl:text-base text-base ml-3">Dashboard</p>
                                        </div>
                                    </li>
                                </a>
                                <a className="cursor-pointer">
                                    <li className="text-white pt-8">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="w-6 h-6 md:w-8 md:h-8 text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                    </svg>
                                                </div>
                                                <p className="text-white xl:text-base  text-base ml-3">Products</p>
                                            </div>
                                        </div>
                                    </li>
                                </a>
                                <a className="cursor-pointer">
                                    <li className="text-white pt-8">
                                        <div className="flex items-center">
                                            <div className="w-6 h-6 md:w-8 md:h-8 text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                                    <circle cx={12} cy={12} r={9} />
                                                </svg>
                                            </div>
                                            <p className="text-white xl:text-base  text-base ml-3">Performance</p>
                                        </div>
                                    </li>
                                </a>
                                <li className="text-white pt-8 cursor-pointer">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="w-6 h-6 md:w-8 md:h-8 text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="7 8 3 12 7 16" />
                                                    <polyline points="17 8 21 12 17 16" />
                                                    <line x1={14} y1={4} x2={10} y2={20} />
                                                </svg>
                                            </div>
                                            <p className="text-white xl:text-base  text-base ml-3">Deliverables</p>
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
