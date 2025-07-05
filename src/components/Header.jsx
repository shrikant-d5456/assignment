"use client"
import React, { useState } from 'react';
import { BsList, BsX } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Header */}
      {
        !isOpen &&
        <div id='home' className="w-full flex justify-between md:px-20 px-8 py-8 z-50 relative">
        <div className="flex justify-center items-center">
          <img
            src="https://images.squarespace-cdn.com/content/v1/64d3ecd6f85a702f7881b802/450ce2f6-bc20-432a-9e9e-4a48a995b92b/logo-transparent-png.png?format=1500w"
            alt="logo"
            className="w-60"
          />
        </div>

        <div
          className="md:hidden flex justify-center items-center text-4xl font-light cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <BsX className="text-black" /> : <BsList className="text-black" />}
        </div>
      </div>
      }

      {/* Sidebar Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full bg-white shadow-lg z-40 p-6"
          >
            <div className="w-full flex justify-between px-8 py-2 z-50 relative">
        <div className="flex justify-center items-center">
          <img
            src="https://images.squarespace-cdn.com/content/v1/64d3ecd6f85a702f7881b802/450ce2f6-bc20-432a-9e9e-4a48a995b92b/logo-transparent-png.png?format=1500w"
            alt="logo"
            className="w-60"
                onClick={()=>setIsOpen(false)}
          />
        </div>

        <div
          className="flex justify-center items-center text-4xl font-light cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <BsX className="text-black" /> : <BsList className="text-black" />}
        </div>
      </div>
            <div className=' absolute top-[50%] w-full h-full m-auto flex-col'>
                <nav className="flex flex-col space-y-4 text-lg">
              <a href="#home" onClick={()=>setIsOpen(false)} className=" w-full text-center hover:text-sky-300 text-gray-700 transition">Home</a>
              <a href="#about" onClick={()=>setIsOpen(false)} className=" w-full text-center hover:text-sky-300 text-gray-700 transition">About</a>
              <a href="#services" onClick={()=>setIsOpen(false)} className=" w-full text-center hover:text-sky-300 text-gray-700 transition">Services</a>
              <a href="#contact" onClick={()=>setIsOpen(false)} className=" w-full text-center hover:text-sky-300 text-gray-700 transition">Contact</a>
            </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default Header;
