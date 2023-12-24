import React from 'react';
import './projection.css';
import { Link } from 'react-router-dom';
import translapp from './translapp.png';
import reddit from './redditcrawler.png';
import heydata from './heydata.png'
import mysearch from './mysearch.png'
import redditcrawler from './redditcrawler.png'
import opine from './opine.png'
import screen2 from './screen2.png'
import screen4 from './screen4.png'
import { Github, Demo } from './misc'
import { FaGithub } from 'react-icons/fa';

export const Project = () => {

    return (
        <>
            <div className="flex flex-col w-screen h-auto items-center mt-6 flex-wrap ">
                <p className="text-center text-2xl font-semibold text-slate-500 my-5" >My Projects</p>
                <div className="flex flex-row justify-around w-screen h-auto items-center flex-wrap ">


                    <div className='projectbox1 w-11/12 sm:w-5/12 md:4/12 h-auto shadow-md inset-0 shadow-green-400 py-6 mb-10 rounded-md'>
                        <div className='w-full h-64'>
                        <a href="https://heydata.com.ng">
                            <img src={heydata} alt="Description of" className='w-full h-full rounded-md' />
                            </a>
                        </div>
                       

                    </div>
                    <div className='projectbox2 w-11/12 sm:w-5/12 h-auto shadow-sm shadow-slate-400 py-6 mb-10 rounded-md'>
                        <div className='w-full h-64'>
                        <a href="https://redditcrawler.vercel.app">
                            <img src={redditcrawler} alt="Description of" className='w-full h-full rounded-md' />
                            </a>
                        </div>
                    </div>

                    <div className='projectbox3 w-11/12 sm:w-5/12 h-auto shadow-sm shadow-slate-400 pb-6 mb-10 rounded-md'>
                        <div className='w-full h-64'>
                        <a href="https://opine.vercel.app">
                            <img src={mysearch} alt="Description of" className='w-full h-full rounded-md' />
                            </a>
                        </div>

                    </div>
                    <div className='projectbox4 w-11/12 sm:w-5/12 h-auto shadow-sm shadow-slate-400 pb-6 mb-10 rounded-md'>
                        <div className='w-full h-64'>
                        <a href="https://translapp.vercel.app">
                            <img src={translapp} alt="Description of" className='w-full h-full rounded-md' />
                            </a>
                        </div>
                       

                    </div>

                    <div className='projectbox5 w-11/12 sm:w-5/12 h-auto shadow-sm shadow-slate-400 pb-6 mb-10 rounded-md'>
                        <div className='w-full h-64'>
                        <a href="https://translapp.vercel.app">
                            <img src={opine} alt="Description of" className='w-full h-full rounded-md' />
                            </a>
                        </div>

                    </div>

                    <div className='projectbox6 w-11/12 sm:w-5/12 h-auto shadow-sm shadow-slate-400 pb-6 mb-10 rounded-md'>
                        <div className='w-full h-auto flex justify-around'>
                      
                            <img src={screen2} alt="Description of" className='w-24 h-full rounded-md' />
                            <img src={screen4} alt="Description of" className='w-24 h-full rounded-md' />
                    
                        </div>

                    </div>

                    <div className='w-full h-auto flex flex-col justify-center items-center mt-8'>
                        <p className='text-center text-lg font-interbold text-slate-900'>Skip the exhaustive steps! 🚀</p>
                        <p className='text-md text-slate-700 font-inter text-center'>I work independently yet in alliance with your predefined goals</p>
                    </div>
                </div>
            </div>
        </>
    )
}