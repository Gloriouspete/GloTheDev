import { Homer } from "./header";
import { Project } from './Projection';
import { Footr } from './header';
import './Media.css';
import { useState, useEffect, useCallback } from 'react';
import { motion } from "framer-motion";
import { DiAndroid, DiApple, DiNodejs, DiReact,} from 'react-icons/di'
export const Main = () => {
  const contentArray = ["Mobile App Developer", "Backend Developer", "Bot Scripter"];
  const [contentIndex, setContentIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const updateContentIndex = useCallback(() => {
    if (!isRunning) {
      setIsRunning(true);
      window.requestAnimationFrame(() => {
        setContentIndex((prevIndex) =>
          prevIndex === contentArray.length - 1 ? 0 : prevIndex + 1
        );
        setIsRunning(false);
      });
    }
  }, [isRunning, contentArray.length]);

  useEffect(() => {
    const timeout = setInterval(updateContentIndex, 3000); // Change content every 5 seconds
    return () => clearTimeout(timeout);
  }, [updateContentIndex, contentArray.length]);

  ;


  return (
    <>
      <div className="w-auto bg-white box-border">
        <div className="sm:w-screen sm:h-4/5 bg-white" style={{
          backgroundImage: "url('./globackground.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
          <motion.h1
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="text-slate-900 text-center mb-2 sm:mb-5 text-2xl font-interbold after:text-mycolor mt-32  sm:mt-64 after:content-'Glo'">Hi,I'm Glo 👋</motion.h1>
          <div className="w-full flex justify-center">
            <h1 className="text-sm text-black text-center">{contentArray[contentIndex]}</h1>
          </div>
          <div className="">
            <p className="font-interbold text-black text-2xl sm:text-2xl p-5 mt-3 sm:p-8 text-center sm:mb-8">
              I empower your <span className="text-orange-600 font-interbold text-3xl" >Business</span> with state of the art digital solutions!
            </p>
            <p className="font-inter text-black text-base sm:text-2xl p-5 mt-3 sm:p-8 text-center sm:mb-8">
              ...From captivating websites to seamless mobile applications,I have you fully covered!
            </p>
          </div>
          <Homer />
        </div>
        <h3 className="text-center text-slate-700 text-lg font-interbold mt-16 mb-3">
          Skilled with
        </h3>

        <div className="w-full flex flex-col sm:flex-row sm:justify-center h-auto items-center">

          <DiNodejs size={95} className="fill-green-600 " />


          <DiReact size={70} className="fill-black " />

          <DiAndroid size={70} className="fill-green-400 " />

          <DiApple size={70} className="fill-black " />

        </div>
        <div className="w-full h-auto flex flex-col mt-10 items-center">
          <h1 className="text-center text-slate-900 font-interbold text-2xl ">Go from 0 to App in days not 3 Months</h1>

          <p className="text-center font-inter text-lg px-5 mt-5">Unlike Typical Devs, I already possess feature-packed <b>boilerplates</b> that ships with auth, payments, in-app purchases, data-handling and real-time alerts plus notifications. 
          Launch your mobile app or websites faster and quicker with <b>Me</b>.</p>

        </div>
        <Project />
        <div className="w-full h-auto shadow-md shadow-slate-400 p-5 mt-4 ">
          <br />

          <p className="text-slate-500 text-lg m-3 ">
            CONTACT
          </p>
          <div className="concover">
            <br />
            <div className="upcover">
            </div>
            <div className="downcover">
             
              <Homer />
            </div>
          </div>
        </div>
        <Footr />
      </div>
    </>
  )
}