import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FaHome, FaUser } from 'react-icons/fa';
export const Boxman = () => {

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
  return (
    <>
      <div className='fixed right-0 top-12 bg-white w-4/5 flex flex-col items-center h-96 z-50 justify-around border border-black rounded-md'>
        <Link to="/">
          <div className="flex flex-col items-center fill-mycolor"
            onMouseEnter={handleMouseOnHome}
            onMouseLeave={handleMouseOffHome}
            style={{ cursor: 'pointer' }}
          >

            <FaHome style={{ fontSize: '15px'}} size={15} />
            {isHoveredHome && <p id="layee">Home</p>}
          </div>
        </Link>
        <Link to="/About">
          <div className='flex flex-col items-center fill-mycolor'
            onMouseEnter={handleMouseOnAbout}
            onMouseLeave={handleMouseOffAbout}
            style={{ cursor: 'pointer' }}>
            <FaUser color='' />
            {isHoveredAbout && <p id="layee">About</p>}
          </div>
        </Link>
     
      </div>
    </>
  )
}