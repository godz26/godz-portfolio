import {useState} from 'react';
import logo from '../assets/glogo.png';
import { IoHome } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useDarkMode } from '../darkMode'; 


export const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode(); 
    return (
      <div>
        <div className="glass fixed z-50 transform rounded-[25px] w-[95%] mt-[20px] ml-[10px] lg:mx-[30px] p-[10px] flex items-center justify-between">
          <div className="flex items-center md:ml-[20px] ml-[10px]">
            <img src={logo} alt="Logo" className="w-[50px]" />
            <h1 className="dark:text-white ml-[20px] text-[24px] md:text-[30px] hidden md:inline font-bold">Portfolio</h1>
          </div>
          <ul className="flex items-center gap-[20px] md:gap-[40px] dark:text-white text-[16px] md:text-[20px] lg:mr-[20px] ml-[10px]">
            <li className="lg:my-hover p-[10px] flex items-center gap-[8px] relative group">
              <div className="relative">
                <a href="#home"><IoHome className="w-[35px] h-[35px] lg:hidden dark:fill-white cursor-pointer hover:hover-icon" /></a>
                <div className="inline lg:hidden glass toolTip group-hover:opacity-100 transition-opacity">
                  Home
                </div>
              </div>
              <a href="#home" className="hidden lg:inline">Home</a>
            </li>
            <li className="lg:my-hover p-[10px] flex items-center gap-[8px] relative group">
            <div className='relative'>
              <a href="#about"><FaUserTie className="w-[35px] h-[35px] lg:hidden dark:fill-white cursor-pointer hover:hover-icon" /></a>
              <div className='inline lg:hidden glass toolTip group-hover:opacity-100 transition-opacity'>
                About Me
              </div>
            </div>
              <a href="#about" className="hidden lg:inline">About Me</a>
            </li>
            <li className="lg:my-hover p-[10px] flex items-center gap-[8px] relative group">
              <div className='relative'>
                <a href="#work"><FaBriefcase className="w-[35px] h-[35px] lg:hidden dark:file:fill-white cursor-pointer hover:hover-icon" /></a>
                <div className='inline lg:hidden glass toolTip group-hover:opacity-100 transition-opacity'>
                  Work
                </div>
              </div>
              <a href="#work" className="hidden lg:inline">Work</a>
            </li>
            <li className="lg:my-hover p-[10px] flex items-center gap-[8px] relative group">
              <div className='relative'>
                <a href="#tech"><BsStack className="w-[35px] h-[35px] lg:hidden dark:fill-white cursor-pointer hover:hover-icon" /></a>
                <div className='inline lg:hidden glass toolTip group-hover:opacity-100 transition-opacity'>
                  Tech Stack
                </div>
              </div>
              <a href="#tech" className="hidden lg:inline">Tech Stack</a>
            </li>
            <li className="lg:my-hover p-[10px] flex items-center gap-[8px] relative group">
              <div className='relative'>
                <button onClick={toggleDarkMode}>
                  {darkMode ? <MdLightMode className="w-[35px] h-[35px] dark:fill-white cursor-pointer hover:hover-icon"/> : <MdDarkMode className="w-[35px] h-[35px] dark:fill-white cursor-pointer hover:hover-icon"/>}
                </button>
                <div className='inline lg:hidden glass toolTip group-hover:opacity-100 transition-opacity'>
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </div>
              </div>
            </li>
          </ul>
        </div>
    </div>
  );
};
