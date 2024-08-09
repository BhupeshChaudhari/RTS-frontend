import React, { useState } from "react";
import { FaRegHeart, FaBars, FaTimes } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { PiLifebuoyLight } from "react-icons/pi";
import { GiMultiDirections } from "react-icons/gi";
import profile from "../assets/profile.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-[#49243E] text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="mt-2 flex flex-row ">
          <span>
            <GiMultiDirections className="mr-3 bg-orange-600 rounded-md p-1 text-4xl" />
          </span>
          <p className="mt-1 text-xl">SkillSphere</p>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="pl-2" size={24} />
            ) : (
              <FaBars size={24} />
            )}
          </button>
        </div>

        <nav
          className={`md:flex space-x-6 w-full md:w-auto bg-[#49243E] md:bg-transparent ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-4 pl-6 md:p-0">
            <div className="flex flex-col md:flex-row md:space-x-6">
              <li className="nav-item">Overview</li>
              <li className="nav-item">Courses</li>
              <li className="nav-item">Assignment</li>
              <li className="nav-item">Classmate</li>
              <li className="nav-item">Schedule</li>
              <li className="nav-item">Community</li>
            </div>
            <div className="flex space-x-4 items-center mb-4 md:hidden">
              <PiLifebuoyLight className="cursor-pointer w-6 h-6" />
              <FaRegHeart className="cursor-pointer w-6 h-5" />
              <GoBell className="cursor-pointer w-6 h-5" />
              <img
                className="w-8 h-8 rounded-full object-cover"
                src={profile}
              />
            </div>
          </ul>
        </nav>

        <div className="hidden md:flex space-x-4 items-center">
          <PiLifebuoyLight className="cursor-pointer w-6 h-6" />
          <FaRegHeart className="cursor-pointer w-6 h-5" />
          <GoBell className="cursor-pointer w-6 h-5" />
          <img
            className="w-13 h-13 sm:w-12 sm:h-12 md:w-9 md:h-9 lg:w-8 lg:h-8 rounded-full object-cover"
            src={profile}
          />
        </div>
      </div>

      <div className="border-b border-[#704264] mt-4"></div>
      <div className="flex items-center text-sm max-w-7xl mx-auto mt-3 px-6">
        Courses <span className="px-4 font-semibold text-gray-300">&gt;</span>{" "}
        Figma course
        <span className="px-4 font-semibold text-gray-300">&gt;</span>{" "}
        <p className="text-gray-300">Mastering Figma in 7 days unleashed</p>
      </div>
      <div className="border-b border-[#704264] mt-4"></div>
    </header>
  );
};

export default Header;
