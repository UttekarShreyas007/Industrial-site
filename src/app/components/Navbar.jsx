import React from "react";
import Image from "next/image";
import logo from "../../../public/assests/logo1.png";
import rectangle from "../../../public/assests/Rectangle 2.png";
import "./index.css";
const Navbar = () => {
  return (
    <nav className="flex bg-white ml-5">
      <div className="logo flex items-center">
        <Image src={logo} alt="logo" />
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-red-500 rounded-lg md:hidden hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-200 dark:text-red-400 dark:hover:bg-red-700 dark:focus:ring-red-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <div className="nav2 flex-grow ">
        <div className="flex items-center justify-between w-full md:w-auto nav2-1">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-20 md:mt-0 md:border-0  ">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-black md:p-0 dark:hover:text-red-800 "
                aria-current="page"
              >
                Tuesday, 11.05.2023
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-black md:p-0 dark:hover:text-red-800 "
              >
                Trending
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-black md:p-0 dark:hover:text-red-800 "
              >
                Specials
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-black md:p-0 dark:hover:text-red-800 "
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-black md:p-0 dark:hover:text-red-800 "
              >
                Advertise With Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-black md:p-0 dark:hover:text-red-800 "
              >
                More
              </a>
            </li>
          </ul>
          <button className="ml-10 bg-red-600 px-6 my-1 rounded-md">
            Login
          </button>
        </div>
        <div className="nav2-2 flex justify-center items-center bg-white">
          <Image src={rectangle} alt="rectangle" />
        </div>
        <div className="flex items-center justify-between w-full nav2-3 md:w-auto text-white">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border-lg md:flex-row md:space-x-16 md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 pl-3  text-black  md:p-0 dark:hover:text-gray-800   "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3  text-black  md:p-0 dark:hover:text-gray-800 "
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3  text-black  md:p-0 dark:hover:text-gray-800 "
              >
                Auto Expo+
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3  text-black  md:p-0 dark:hover:text-gray-800 "
              >
                Magazines+
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3  text-black  md:p-0 dark:hover:text-gray-800 "
              >
                Events+
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3  text-black  md:p-0 dark:hover:text-gray-800 "
              >
                Press Release+
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3  text-black  md:p-0 dark:hover:text-gray-800 "
              >
                Resources+
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3  text-black  md:p-0 dark:hover:text-gray-800 "
              >
                Contact
              </a>
            </li>
          </ul>
          <button className="py-2">
            <span className="ml-10 bg-red-600 px-6 py-2 text-2xl subs">
              Subscribe now
            </span>
          </button>
        </div>
        <div className="flex justify-evenly w-full nav2-4 md:w-auto">
          <ul className="font-medium flex flex-col mt-4 border md:flex-row md:mt-0 md:border-0  ">
            <li className="li-1">
              <a
                href="#"
                className="block py-2 pl-10 pr-10 text-black bg dark:hover:text-red-800 "
              >
                Featured News
              </a>
            </li>
            <li className="li-2">
              <a
                href="#"
                className="block py-2 pl-10 pr-10 text-black dark:hover:text-red-800 "
              >
                Most Popular
              </a>
            </li>
            <li className="li-3">
              <a
                href="#"
                className="block py-2 pl-10 pr-10 text-black dark:hover:text-red-800 "
              >
                Hot News
              </a>
            </li>
            <li className="li-4">
              <a
                href="#"
                className="block py-2 pl-10 pr-10 text-black dark:hover:text-red-800 "
              >
                Trending News
              </a>
            </li>
            <li className="li-5">
              <a
                href="#"
                className="block py-2 pl-10 pr-10 text-black dark:hover:text-red-800 "
              >
                Most Watched
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
