import './Media.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Boxman } from './Boxman';
import { FaAddressCard, FaBriefcase, FaDownload, FaGithub, FaHome, FaLinkedin, FaMailchimp, FaTv, FaTwitter, FaUser, FaWhatsapp } from 'react-icons/fa'
import { Github } from './misc';
export const Header = () => {

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
  const [isClick, setisClick] = useState(false);

  const edonckick = () => {
    setisClick(previsClick => !previsClick);
  }

  return (
    <>
      <div className="w-screen  flex fixed h-12 top-0 justify-between items-center font-bold ">
        <div className="">
          <p className='font-intermedium text-md '></p>
        </div>
        <div className=''
          onClick={edonckick}
        >

        <p className='mx-5 font-intermedium animate-bounce'><span className='text-indigo-600 text-2xl'>G</span>lothedev</p>

        </div>
        {isClick && <Boxman />}
        {
          /*
        <div className="rectangle">
                  <Link to="/">
                    <div className="homie"
                      onMouseEnter={handleMouseOnHome}
                      onMouseLeave={handleMouseOffHome}
                      style={{ cursor: 'pointer' }}
                    >
                      <FaHome size={25} color='white' />
                      {isHoveredHome && <p className='text-white font-intermedium'>Home</p>}
                    </div>
                  </Link>
                  <Link to="/About">
                    <div className='homie'
                      onMouseEnter={handleMouseOnAbout}
                      onMouseLeave={handleMouseOffAbout}
                      style={{ cursor: 'pointer' }}>
                      <FaUser size={25} />
                      {isHoveredAbout && <p className='text-white font-intermedium'>About</p>}
                    </div>
                  </Link>
               
              </div>
              */
        }

      </div >
    </>
  )
}
export const Homer = () => {

  return (
    <>
      <div className="flex w-full flex-col sm:flex-row items-center justify-center my-6">

        <div className="sm:h-12 w-auto px-3 py-2 bg-blue-500 rounded-3xl m-3 font-intermedium text-white flex flex-row items-center ">
          <FaMailchimp className='fill-white mx-2' size={18} />
          <a href='mailto:peterninyo4@gmail.com'>
            <p className='font-interbold'>Book a Session</p>
          </a>

        </div>
        <div className="sm:h-12 w-auto px-3 py-2 bg-black rounded-3xl m-3 font-intermedium text-white flex flex-row">
          <FaDownload className='mx-2' size={18} />
          <a href='https://mega.nz/fm/VG5jVQLZ'>
            <p className='font-interbold text-base'>Download Resume</p>
          </a>

        </div>
      </div>
    </>
  )
}

export const Footr = () => {
  return (
    <>
      <div className="w-full bg-white  flex flex-col items-center mb-10">
        <div className='flex flex-col flex-wrap justify-between w-full px-4 h-auto'>
          <div className='w-full  flex-col  flex h-auto p-3'>
            <p className='text-[30px] text-slate-800 font-interbold mb-5'>👋Hi, I'm Glö</p>
            <p className='text-[20px] text-slate-800 font-intermedium mb-5'>I'm a Software Engineer living in 🇳🇬</p>

            <p className='text-lg font-inter text-slate-900 '>My sole goal is to help companies scale their online presense with apps and websites.  I've been building mobile apps and websites for years and i understand the challenges that come with it. Working with me is a decision you'd regret not making Earlier on.</p>

          </div>
        </div>
        <div className='w-full h-auto px-5 flex flex-row'>
          <a href='https://linkedin.com/in//gloriouspete'>
            <FaLinkedin size={50} className='mx-2' />
          </a>

          <a href='https://github.com/gloriouspete'>
            <FaGithub size={50} className='' />
          </a>
        </div>



      </div>
    </>
  )
}
