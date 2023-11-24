import { Homer } from "./header";
import { Project } from './Projection';
import { Footr } from './header';
import './Media.css';
import { useState, useEffect, useCallback } from 'react';
import { motion } from "framer-motion";
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { DiAndroid, DiApple, DiCss3, DiGithub, DiJavascript, DiMongodb, DiMysql, DiNodejs, DiReact, DiTerminal, } from 'react-icons/di'
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
      <div className="w-auto bg-black box-border">
        <div className="sm:w-screen sm:h-4/5 bg-black" style={{
           backgroundImage: "url('./globackground.jpg')",
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat',}}>
        <motion.h1
         initial={{opacity:0,y:-200}}
        animate={{ opacity: 1 , y: 0 }}
        transition={{ duration: 2 }}
         className="text-white text-center mb-2 sm:mb-5 text-2xl font-interbold after:text-mycolor mt-36  sm:mt-64 after:content-'Glo'">Hi,I'm Glo </motion.h1>
        <div className="w-full flex justify-center">
          <h1 className="text-sm text-white">{contentArray[contentIndex]}</h1>
        </div>
        <div className="">
          <p className="font-inter text-white text-lg sm:text-2xl p-1 mt-3 sm:p-8 text-center sm:mb-8">
            I empower your business with state of the art digital solutions!,From captivating websites to seamless mobile applications,I have you fully covered!
          </p>
        </div>
        <Homer />
        </div>
        <h3 className="text-center text-slate-400 text-2xl font-bold mt-16 mb-3">
          Skills
        </h3>

        <h1 className="text-center font-inter mb-3 px-4 text-white">
          These are the stacks i currently work with.
        </h1>
        <div className="toolstack">
          <div className="flex flex-col h-auto p-2 items-center">
            <DiJavascript size={30} color="#0000cf" />
          <p className="text-white">Javascript</p>
          </div>
          <div className="flex flex-col h-auto p-2 items-center">
            <DiMysql size={30} color="#0000fff0"/>
             <p className="text-white">MySql</p>
          </div>
          <div className="flex flex-col h-auto p-2 items-center">
            <DiReact size={30} color="#0000cf" />
          <p className="text-white">React Js</p>
          </div>
          <div className="flex flex-col h-auto p-2 items-center">
            <DiNodejs size={30} color="#00cf00" />
          <p className="text-white">Node Js</p>
          </div>
          <div className="flex flex-col h-auto p-2 items-center">
            <DiCss3 size={30} color="#00a0ff" />
          <p className="text-white">Css3</p>
          </div>
          <div className="flex flex-col h-auto p-2 items-center">
            <DiTerminal size={30} color="#ff0000" />
          <p className="text-white">Terminal</p>
          </div>
          <div className="flex flex-col h-auto p-2 items-center">
            <FaGithub size={30} color="#ffffff" />
          <p className="text-white">Git & Github</p>
          </div>
          <div className="flex flex-col h-auto p-2 items-center">
            <DiMongodb size={30} color="#00ffcf" />
          <p className="text-white">MongoDb</p>
          </div>
          <div className="flex flex-col h-auto p-2 items-center">
            <DiAndroid size={30} color="#00bf00" />
          <p className="text-white">Android</p>
          </div>
          <div className="flex flex-col h-auto p-2 items-center">
            <DiApple size={30} color="#0000cf" />
          <p className="text-white">iOS</p>
          </div>
        </div>
        <Project />
        <div className="w-full h-auto shadow-md shadow-slate-400 p-5 mt-4 ">
          <br />

          <p className="text-slate-400 text-lg m-3 ">
            CONTACT
          </p>
          <div className="concover">
            <br />
            <div className="upcover">
            </div>
            <div className="downcover">
              <h1 className="text-white font-inter font-semibold text-center">
                Gloriouspete
              </h1>
              <p className="text-white font-semibold text-center p-2">
                FULL-STACK DEVELOPER
              </p>
              <Homer />
            </div>
          </div>
        </div>
        <Footr />
      </div>
    </>
  )
}