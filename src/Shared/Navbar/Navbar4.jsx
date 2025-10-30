import { Link, NavLink } from "react-router-dom";
// import useScrollPosition from "./useScrollPosition";
import { BiChevronDown } from "react-icons/bi";
import { useEffect, useState } from "react";

const Navbar4 = () => {
  // modal openar
  const [isOpen, setIsOpen] = useState(false);
  // dark mode toggle bar
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <nav
      className={` w-full lg:fixed font-Lora z-10 transition-all duration-300 bg-white dark:bg-lightBlack grid items-center `}
    >
      <div className="Container3 ">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* website Logo */}
          <div className=" w-48 lg:w-52 lg:p-4 hidden lg:block">
            <Link to="/">
              <img
                src="/images/swiss_logo.png"
                className="dark:hidden"
                alt="website_logo"
              />
              <img
                src="/images/swiss_logo.png"
                className=" hidden dark:block"
                alt="website_logo"
              />
            </Link>
          </div>

          {/* small screen size */}
          <div className="px-3 w-full lg:hidden flex justify-between items-center text-white bg-white dark:bg-lightBlack h-[70px] p-3">
            <div className=" w-28  ">
              <Link to="/">
                <img
                  src="/images/swiss_logo.png"
                  className="dark:hidden"
                  alt="website_logo"
                />
                <img
                  src="/images/logo-2.png"
                  className=" hidden dark:block"
                  alt="website_logo"
                />
              </Link>
            </div>
          </div>

          {/* All navLink are hear with active */}

          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } text-left w-full lg:w-fit  ease-in-out lg:flex space-y-2 lg:space-y-0 lg:text-center space-x-0 lg:space-x-3 xl:space-x-4 2xl:space-x-5 3xl:space-x-[24px]  flex items-center flex-col lg:flex-row text-sm text-lightBlack   uppercase font-normal bg-white dark:bg-normalBlack z-10 lg:bg-transparent dark:lg:bg-transparent py-3 lg:py-0 `}
          >
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-lightBlack  dark:text-white hover:text-khaki dark:hover:text-khaki  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative`}
              to="/"
            >
              <span className="flex items-center">
                Home
              </span>
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-lightBlack  dark:text-white hover:text-khaki dark:hover:text-khaki  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300`}
              to="/about"
            >
              About
            </NavLink>
            {/* <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-lightBlack  dark:text-white hover:text-khaki dark:hover:text-khaki  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative `}
              to="#"
            >
              <span className="flex items-center">
                Rooms
              </span>
            </NavLink> */}
             {/* spaces sub menu link */}
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-lightBlack  dark:text-white hover:text-khaki dark:hover:text-khaki  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative `}
              to="/spaces"
            >
              <span className="flex items-center">
                Spaces
              </span>
            </NavLink>
            {/* blog sub menu link */}
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-lightBlack  dark:text-white hover:text-khaki dark:hover:text-khaki  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative `}
              to="/blog"
            >
              <span className="flex items-center">
                BLOG
              </span>
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-lightBlack  dark:text-white hover:text-khaki dark:hover:text-khaki lg:border-b-0 px-3 py-2 w-full block transition-all duration-300`}
              to="/contact"
            >
              Contact
            </NavLink>
            {/* large device visible button and search icon */}
            <div className="hidden lg:flex items-center ml-5">
              <Link to={"#"} className=" pr-3">
                <button className="btn-primary dark:after:bg-white dark:hover:text-lightBlack hover:dark:before:bg-white">
                  Book Now
                </button>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar4;
