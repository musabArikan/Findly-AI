import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../containers/Container.jsx";
import { FaPlus } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      id="nav"
      className={`fixed top-0 left-0 right-0 group z-50 w-full border-b border-black/5 dark:border-white/5 backdrop-blur-md shadow-sm ${
        isMenuOpen ? "data-[state=active]" : ""
      }`}
    >
      <div className="relative flex flex-wrap items-center justify-between gap-6 py-3  md:gap-0 md:py-4 ">
        <div className="relative z-20 flex w-full justify-between  md:px-0 lg:w-fit ">
          <Link
            to="/"
            aria-label="logo"
            className="flex items-center space-x-2"
          >
            <div aria-hidden="true" className="flex space-x-1 ml-4 ">
              <div className="size-4 mt-1 rounded-full bg-gray-900 dark:bg-white "></div>
              <div className="size-4 h-8 w-2 rounded bg-gray-900 dark:bg-blue-700"></div>
            </div>

            <span className="text-2xl font-bold text-gray-900 dark:text-white ml-2">
              Findly AI
            </span>
          </Link>

          <div className="relative flex max-h-10 items-center lg:hidden cursor-pointer ">
            <button
              aria-label="humburger"
              id="hamburger"
              onClick={toggleMenu}
              className="relative -mr-6 p-6 active:scale-95 duration-300 mr-2 cursor-pointer "
            >
              <div
                aria-hidden="true"
                id="line"
                className={`m-auto  h-0.5 w-5 rounded bg-gray-950 transition duration-300 dark:bg-white origin-top ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></div>
              <div
                aria-hidden="true"
                id="line2"
                className={`m-auto  mt-2 h-0.5 w-5 rounded bg-gray-950 transition duration-300 dark:bg-white origin-bottom ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              ></div>
            </button>
          </div>
        </div>
        <div
          id="navLayer"
          aria-hidden="true"
          className={`fixed   inset-0 z-10 h-screen w-screen origin-bottom bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-950/70 lg:hidden ${
            isMenuOpen ? "scale-y-100 origin-top" : "scale-y-0"
          }`}
        ></div>
        <div
          id="navlinks"
          className={`${
            isMenuOpen
              ? "visible scale-100 opacity-100 "
              : "invisible scale-90 opacity-0 lg:visible lg:scale-100 lg:opacity-100"
          } absolute top-full left-0  z-20 w-full origin-top-right translate-y-1 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:relative lg:flex lg:w-fit lg:translate-y-0 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none lg:dark:bg-transparent`}
        >
          <div className="hidden lg:flex items-center space-x-6 pr-6  ">
            <Link
              to="/AIOne"
              className=" w-full text-center px-4 py-3 mb-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 pl-4 ml-4"
            >
              <FaPlus className="  " />
              Create Ad With AI
            </Link>
            <Link
              to="/my-listings"
              className="px-4 py-3 mb-3 border 
              
              border-blue-600 text-blue-600 dark:text-white rounded-lg hover:bg-blue-600/10 transition whitespace-nowrap "
            >
              My Ads
            </Link>
          </div>

          <div className="lg:hidden space-y-4 ">
            <Link
              to="/AIOne"
              className="w-full text-center px-4 py-3 mb-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaPlus className="  " />
              Create Ad With AI
            </Link>
            <Link
              to="/my-listings"
              className="block w-full text-center px-4 py-3 border border-blue-600 text-blue-600 dark:text-white rounded-lg hover:bg-blue-600/10 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              My Ads
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
