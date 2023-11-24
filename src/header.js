import './Media.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Boxman } from './Boxman';
import { FaAddressCard, FaBriefcase, FaGithub, FaHome, FaLinkedin, FaMedium, FaTwitter, FaUser, FaWhatsapp } from 'react-icons/fa'
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
        <div className="ml-4">
          <p className='font-intermedium text-md '></p>
        </div>
        <div className='linkyy'
          onClick={edonckick}
        >

          <svg className='text-white fill-white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
            <path d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z" /></svg>


        </div>
        {isClick && <Boxman />}

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
          {/*
          <Link to="/Project"><div className='homie'
            onMouseEnter={handleMouseOnProject}
            onMouseLeave={handleMouseOffProject}
            style={{ cursor: 'pointer' }}>
            <FaBriefcase size={25} />
            {isHoveredProject && <p className='text-mycolor font-intermedium'>Project</p>}
          </div></Link>
  */}

        </div>
      </div>
    </>
  )
}
export const Homer = () => {

  return (
    <>
      <div className="flex w-full flex-col sm:flex-row items-center justify-center my-6">

        <div className="">
          <a href='mailto:peterninyo4@gmail.com'>
            <button className='sm:h-12 w-auto px-3 py-1 bg-blue-500 rounded-sm m-3 font-inter text-white font-semibold' > Email Me</button>
          </a>

        </div>
        <div className="">
          <a href='https://mega.nz/fm/VG5jVQLZ'>
            <button className='sm:h-12 w-auto px-3 py-1 bg-red-500 m-3 rounded-sm text-white font-semibold animate-bounce' > My Resume</button>
          </a>

        </div>

      </div>
    </>
  )
}

export const Footr = () => {
  return (
    <>
      <div className="w-full bg-slate-400 text-white flex flex-col items-center ">
        <div className='flex flex-row flex-wrap justify-between w-full px-4 h-auto bg-slate-700'>
          <div className='w-5/12 sm:w-1/5 flex-col items-center flex h-auto py-3'>
            <h4 className='font-semibold p-2 text-center text-lg'>SOCIALS</h4>
            <br />

            <div className='flex w-auto h-auto items-center p-2'>
            <a href='https://linken.com/in/gloriouspete'><p className='font-semibold'>LinkedIn</p></a>  
             
            </div>
            <div className='flex w-auto h-auto items-center p-2'>
            <a href='https://x.com/glocryptofuture'> <p className='font-semibold'>Twitter</p></a>
           
            </div>
            <div className='flex w-auto h-auto items-center p-2'>
            <a href='https://github.com/gloriouspete'> <p className='font-semibold'>Github</p></a>
             
            </div>
            <div className='flex w-auto h-auto p-2'>
            <a href='https://linken.com/in/gloriouspete'><p className='font-semibold'>Medium</p></a>

              
            </div>
          </div>
          <div class="w-5/12 sm:w-1/5 flex-col items-center h-auto flex py-3">
            <h4 className='font-semibold text-lg p-2 text-center'>LINKS</h4>
            <br />

            <div className='flex w-auto h-auto p-2'>

              <Link to="/"><p className='font-semibold'>Home</p></Link>
            </div>
            <div className='flex w-auto h-auto p-2'>
              <Link to="/About"><p className='font-semibold'>About Me</p></Link>
            </div>
          
          </div>
          <div className='w-5/6 sm:w-1/5 py-3 flex-col h-auto items-center flex'>
          <h4 className='font-semibold p-2'>MY SKILLSETS</h4>
          <div className='lmaor'>
            <p>PHP</p>
          </div>
          <div className='lmaor'>
            <p>REACT</p>
          </div>
          <div className='lmaor'>
            <p>NODEJs</p>
          </div>
          <div className='lmaor'>
            <p>NEXT JS</p>
          </div>
          <div className='lmaor'>
            <p>JAVASCRIPT</p>
          </div>
          <div className='lmaor'>
            <p></p>
          </div>
          <div className='lmaor'>
            <p>TAILWIND CSS</p>
          </div>
          <div className='lmaor'>
            <p>REACT NATIVE</p>
          </div>
          <div className='lmaor'>
            <p>MYSQL & MONGO DB</p>
          </div>
          <div className='lmao'>

          </div>
        </div>
        </div>



       
      </div>
    </>
  )
}
/*
 <div className="circle">
      
        <svg className="ade" viewBox="0 0 128 128">
        <g fill="#181616"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 1.512c-23.493 0-42.545 19.047-42.545 42.545 0 18.797 12.19 34.745 29.095 40.37 2.126.394 2.907-.923 2.907-2.047 0-1.014-.04-4.366-.058-7.92-11.837 2.573-14.334-5.02-14.334-5.02-1.935-4.918-4.724-6.226-4.724-6.226-3.86-2.64.29-2.586.29-2.586 4.273.3 6.523 4.385 6.523 4.385 3.794 6.504 9.953 4.623 12.38 3.536.383-2.75 1.485-4.628 2.702-5.69-9.45-1.075-19.384-4.724-19.384-21.026 0-4.645 1.662-8.44 4.384-11.42-.442-1.072-1.898-5.4.412-11.26 0 0 3.572-1.142 11.7 4.363 3.395-.943 7.035-1.416 10.65-1.432 3.616.017 7.258.49 10.658 1.432 8.12-5.504 11.688-4.362 11.688-4.362 2.316 5.86.86 10.187.418 11.26 2.728 2.978 4.378 6.774 4.378 11.42 0 16.34-9.953 19.938-19.427 20.99 1.526 1.32 2.886 3.91 2.886 7.88 0 5.692-.048 10.273-.048 11.674 0 1.13.766 2.458 2.922 2.04 16.896-5.632 29.07-21.574 29.07-40.365C106.545 20.56 87.497 1.512 64 1.512z"></path><path d="M37.57 62.596c-.095.212-.428.275-.73.13-.31-.14-.482-.427-.382-.64.09-.216.424-.277.733-.132.31.14.486.43.38.642zM39.293 64.52c-.203.187-.6.1-.87-.198-.278-.297-.33-.694-.124-.884.208-.188.593-.1.87.197.28.3.335.693.123.884zm1.677 2.448c-.26.182-.687.012-.95-.367-.262-.377-.262-.83.005-1.013.264-.182.684-.018.95.357.262.385.262.84-.005 1.024zm2.298 2.368c-.233.257-.73.188-1.093-.163-.372-.343-.475-.83-.242-1.087.237-.257.736-.185 1.102.163.37.342.482.83.233 1.086zm3.172 1.374c-.104.334-.582.485-1.064.344-.482-.146-.796-.536-.7-.872.1-.336.582-.493 1.067-.342.48.144.795.53.696.87zm3.48.255c.013.35-.396.642-.902.648-.508.012-.92-.272-.926-.618 0-.354.4-.642.908-.65.506-.01.92.272.92.62zm3.24-.551c.06.342-.29.694-.793.787-.494.092-.95-.12-1.014-.46-.06-.35.297-.7.79-.792.503-.088.953.118 1.017.466zm0 0"></path></g><path d="M24.855 108.302h-10.7a.5.5 0 00-.5.5v5.232a.5.5 0 00.5.5h4.173v6.5s-.937.32-3.53.32c-3.056 0-7.327-1.116-7.327-10.508 0-9.393 4.448-10.63 8.624-10.63 3.614 0 5.17.636 6.162.943.31.094.6-.216.6-.492l1.193-5.055a.468.468 0 00-.192-.39c-.403-.288-2.857-1.66-9.058-1.66-7.144 0-14.472 3.038-14.472 17.65 0 14.61 8.39 16.787 15.46 16.787 5.854 0 9.405-2.502 9.405-2.502.146-.08.162-.285.162-.38v-16.316a.5.5 0 00-.5-.5zM79.506 94.81H73.48a.5.5 0 00-.498.503l.002 11.644h-9.392V95.313a.5.5 0 00-.497-.503H57.07a.5.5 0 00-.498.503v31.53c0 .277.224.503.498.503h6.025a.5.5 0 00.497-.504v-13.486h9.392l-.016 13.486c0 .278.224.504.5.504h6.038a.5.5 0 00.497-.504v-31.53a.497.497 0 00-.497-.502zm-47.166.717c-2.144 0-3.884 1.753-3.884 3.923 0 2.167 1.74 3.925 3.884 3.925 2.146 0 3.885-1.758 3.885-3.925 0-2.17-1.74-3.923-3.885-3.923zm2.956 9.608H29.29c-.276 0-.522.284-.522.56v20.852c0 .613.382.795.876.795h5.41c.595 0 .74-.292.74-.805v-20.899a.5.5 0 00-.498-.502zm67.606.047h-5.98a.5.5 0 00-.496.504v15.46s-1.52 1.11-3.675 1.11-2.727-.977-2.727-3.088v-13.482a.5.5 0 00-.497-.504h-6.068a.502.502 0 00-.498.504v14.502c0 6.27 3.495 7.804 8.302 7.804 3.944 0 7.124-2.18 7.124-2.18s.15 1.15.22 1.285c.07.136.247.273.44.273l3.86-.017a.502.502 0 00.5-.504l-.003-21.166a.504.504 0 00-.5-.502zm16.342-.708c-3.396 0-5.706 1.515-5.706 1.515V95.312a.5.5 0 00-.497-.503H107a.5.5 0 00-.5.503v31.53a.5.5 0 00.5.503h4.192c.19 0 .332-.097.437-.268.103-.17.254-1.454.254-1.454s2.47 2.34 7.148 2.34c5.49 0 8.64-2.784 8.64-12.502s-5.03-10.988-8.428-10.988zm-2.36 17.764c-2.073-.063-3.48-1.004-3.48-1.004v-9.985s1.388-.85 3.09-1.004c2.153-.193 4.228.458 4.228 5.594 0 5.417-.935 6.486-3.837 6.398zm-63.689-.118c-.263 0-.937.107-1.63.107-2.22 0-2.973-1.032-2.973-2.368v-8.866h4.52a.5.5 0 00.5-.504v-4.856a.5.5 0 00-.5-.502h-4.52l-.007-5.97c0-.227-.116-.34-.378-.34h-6.16c-.238 0-.367.106-.367.335v6.17s-3.087.745-3.295.805a.5.5 0 00-.36.48v3.877a.5.5 0 00.497.503h3.158v9.328c0 6.93 4.86 7.61 8.14 7.61 1.497 0 3.29-.48 3.586-.59.18-.067.283-.252.283-.453l.004-4.265a.51.51 0 00-.5-.502z" fill="#100E0F"></path>
        </svg>
      </div>
 <div className="circle">
            
            <svg className="ade" viewBox="0 0 128 128">
            <path fill="#fff" d="M44.59 4.21a63.28 63.28 0 004.33 120.9 67.6 67.6 0 0032.36.35 57.13 57.13 0 0025.9-13.46 57.44 57.44 0 0016-26.26 74.33 74.33 0 001.61-33.58H65.27v24.69h34.47a29.72 29.72 0 01-12.66 19.52 36.16 36.16 0 01-13.93 5.5 41.29 41.29 0 01-15.1 0A37.16 37.16 0 0144 95.74a39.3 39.3 0 01-14.5-19.42 38.31 38.31 0 010-24.63 39.25 39.25 0 019.18-14.91A37.17 37.17 0 0176.13 27a34.28 34.28 0 0113.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0087.2 4.59a64 64 0 00-42.61-.38z"></path><path fill="#e33629" d="M44.59 4.21a64 64 0 0142.61.37 61.22 61.22 0 0120.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 00-13.64-8 37.17 37.17 0 00-37.46 9.74 39.25 39.25 0 00-9.18 14.91L8.76 35.6A63.53 63.53 0 0144.59 4.21z"></path><path fill="#f8bd00" d="M3.26 51.5a62.93 62.93 0 015.5-15.9l20.73 16.09a38.31 38.31 0 000 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 01-5.5-40.9z"></path><path fill="#587dbd" d="M65.27 52.15h59.52a74.33 74.33 0 01-1.61 33.58 57.44 57.44 0 01-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0012.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z"></path><path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0044 95.74a37.16 37.16 0 0014.08 6.08 41.29 41.29 0 0015.1 0 36.16 36.16 0 0013.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 01-25.9 13.47 67.6 67.6 0 01-32.36-.35 63 63 0 01-23-11.59A63.73 63.73 0 018.75 92.4z"></path>
            </svg>
          
            </div>

      */