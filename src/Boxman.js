import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FaHome, FaUser } from 'react-icons/fa';
import { MdCancel, MdHome } from 'react-icons/md'
import { motion } from 'framer-motion';
export const Boxman = ({ close }) => {

  const [isHoveredHome, setIsHoveredHome] = useState(false);
  const [isHoveredAbout, setIsHoveredAbout] = useState(false);
  const [isHoveredProject, setIsHoveredProject] = useState(false);
  const [isHoveredContact, setIsHoveredContact] = useState(false);

  const handleMouseOnHome = () => {
    setIsHoveredHome(true);
  };

  const handleMouseOffHome = () => {
    setIsHoveredHome(false);
  };

  const handleMouseOnAbout = () => {
    setIsHoveredAbout(true);
  };

  const handleMouseOffAbout = () => {
    setIsHoveredAbout(false);
  };

  const handleMouseOnProject = () => {
    setIsHoveredProject(true);
  };

  const handleMouseOffProject = () => {
    setIsHoveredProject(false);
  };

  const handleMouseOnContact = () => {
    setIsHoveredContact(true);
  };

  const handleMouseOffContact = () => {
    setIsHoveredContact(false);
  };
  const closeMenu = (event) => {
    if (event.target.id === 'modal') {
      close()
    }
  }

  return (
    <>
      <div id='modal' onClick={(e) => closeMenu(e)} className='fixed sm:hidden top-0 backdrop-blur-sm w-screen flex flex-col items-end h-screen z-50 border border-black rounded-md'>
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity:1, x: 0 }}
          transition={{ duration: 0.5 }} className='w-4/5 bg-white h-full border border-slate-300'>
          <div className='h-auto py-3 w-full bg-white justify-end flex items-center rounded-md mb-5'>
            <MdCancel onClick={() => close()} size={30} color='red' />
          </div>
          <Link to="/" className='flex items-center justify-center p-3 border border-slate-300 rounded-md px-2 mx-1'>
            <div className="flex flex-row items-center fill-mycolor"
              onMouseEnter={handleMouseOnHome}
              onMouseLeave={handleMouseOffHome}
              style={{ cursor: 'pointer' }}
            >
              <MdHome size={25} className='fill-slate-900 ' />
              <p className='font-intermedium text-md'>Browse</p>
              {isHoveredHome && <p id="layee">Home</p>}
            </div>
          </Link>
          <Link to="/About" className='flex items-center justify-center p-3 border border-slate-300 rounded-md px-2 mx-1'>
            <div className='flex items-center fill-mycolor'
              onMouseEnter={handleMouseOnAbout}
              onMouseLeave={handleMouseOffAbout}
              style={{ cursor: 'pointer' }}>
              <FaUser size={25} className='fill-slate-700 ' />
              <p className='font-intermedium text-md text-slate-800'>Autography</p>
              {isHoveredAbout && <p className=''>About</p>}
            </div>
          </Link>
        </motion.div>
      </div>
    </>
  )
}