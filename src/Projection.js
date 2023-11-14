import React from 'react';
import './projection.css';
import { Link } from 'react-router-dom';
import translapp from './translapp.png';
import reddit from './redditcrawler.png';
import heydata from './heydata.png'
import mysearch from './mysearch.png'
import redditcrawler from './redditcrawler.png'
import opine from './opine.png'
import { Github, Demo } from './misc'
import { FaGithub } from 'react-icons/fa';

export const Project = () => {

    return (
        <>
            <div className="flex flex-col w-screen h-auto items-center mt-6 flex-wrap ">
                <p className="text-center text-2xl font-semibold text-slate-700" >My Projects</p>
                <h3 className='p-4 text-center'>Here are some of my Works</h3>
                <div className="flex flex-row justify-around w-screen h-auto items-center flex-wrap ">
                    <div className='projectbox1 w-11/12 sm:w-5/12 md:4/12 h-auto shadow-sm shadow-slate-400 pb-6 mb-10 rounded-md'>
                        <div className='w-full h-64'>
                            <img src={heydata} alt="Description of" className='w-full h-full rounded-md' />
                        </div>
                        <div className=''>
                            <div className='flex w-full h-auto p-2 justify-between items-center'>
                                <h2 className='font-semibold'>HeyData</h2>
                                <div className='redbox'>
                                    <a href="https://heydata.com.ng"><Demo /></a>
                                    <Github onClick={() => alert('Github File for this project is hidden')} />
                                </div>
                            </div>
                            <p className='font-inter text-sm px-3 pb-4 text-center'>
                                HeyData Mobile Service is a Vtu website made for buying Mobile Data and airtime and other utility services.

                            </p>
                            <div className='flex flex-wrap justify-around'>
                                <p className='mafor'>Next js</p>
                                <p className='mafor'>Express</p>
                                <p className='mafor'>MysQl</p>
                                <p className='mafor'>Static</p>
                            </div>
                        </div>

                    </div>
                    <div className='projectbox2 w-11/12 sm:w-5/12 h-auto shadow-sm shadow-slate-400 pb-6 mb-10 rounded-md'>
                        <div className='w-full h-64'>
                            <img src={redditcrawler} alt="Description of" className='w-full h-full rounded-md' />
                        </div>
                        <div className=''>
                            <div className='flex w-full h-auto p-2 justify-between items-center'>
                                <h2 className='font-semibold'>Reddit Crawler</h2>
                                <div className='redbox'>
                                    <a href="https://redditcrawler.vercel.app"><Demo /></a>
                                    <Github onClick={() => alert('Github File for this project is hidden')} />
                                </div>
                            </div>
                            <p className='font-inter text-sm px-3 pb-4 text-center'>
                                Reddit Crawler is a website I made to simplify the stress of looking for gigs related posts on reddit, it filters the excessive ads and unrelated posts and brings only related posts to the one you queried.

                            </p>
                            <div className='flex flex-wrap justify-around'>
                                <p className='mafor'>Node js</p>
                                <p className='mafor'>Express</p>
                                <p className='mafor'>MysQl</p>
                                <p className='mafor'>Static</p>
                            </div>
                        </div>

                    </div>
                    <div className='projectbox3 w-11/12 sm:w-5/12 h-auto shadow-sm shadow-slate-400 pb-6 mb-10 rounded-md'>
                        <div className='w-full h-64'>
                            <img src={mysearch} alt="Description of" className='w-full h-full rounded-md' />
                        </div>
                        <div className=''>
                            <div className='flex w-full h-auto p-2 justify-between items-center'>
                                <h2 className='font-semibold'>Opine</h2>
                                <div className='redbox'>
                                    <a href="https://opine.vercel.app"><Demo /></a>
                                    <Github onClick={() => alert('Github File for this project is hidden')} />
                                </div>
                            </div>
                            <p className='font-inter text-sm px-3 pb-4 text-center'>
                                Opine is a website created to tackle the issues of low engagements in parties and hangouts, It works by accepting questions,opinions and suggestions from the audience and then the hosts can view them on the website and answer accordingly.

                            </p>
                            <div className='flex flex-wrap justify-around'>
                                <p className='mafor'>React js</p>
                                <p className='mafor'>Express js</p>
                                <p className='mafor'>MysQl</p>
                                <p className='mafor'>Node js</p>
                            </div>
                        </div>

                    </div>
                    <div className='projectbox4 w-11/12 sm:w-5/12 h-auto shadow-sm shadow-slate-400 pb-6 mb-10 rounded-md'>
                        <div className='w-full h-64'>
                            <img src={translapp} alt="Description of" className='w-full h-full rounded-md' />
                        </div>
                        <div className=''>
                            <div className='flex w-full h-auto p-2 justify-between items-center'>
                                <h2 className='font-semibold'>Translapp</h2>
                                <div className='redbox'>
                                    <a href="https://translapp.vercel.app"><Demo /></a>
                                    <FaGithub size={10} onClick={() => alert('Github File for this project is hidden')} />
                                </div>
                            </div>
                            <p className='font-inter text-sm px-3 pb-4 text-center'>
                                Translapp as it's name implies is a language translator web application, it translates over 40 languages with just a click in the most seamless way possible.

                            </p>
                            <div className='flex flex-wrap justify-around'>
                                <p className='mafor'>React js</p>
                                <p className='mafor'>Express</p>
                                <p className='mafor'>REST Api</p>
                            </div>
                        </div>

                    </div>
                    <div className='projectbox4 w-11/12 sm:w-5/12 h-auto shadow-sm shadow-slate-400 pb-6 mb-10 rounded-md'>
                        <div className='w-full h-64'>
                            <img src={opine} alt="Description of" className='w-full h-full rounded-md' />
                        </div>
                        <div className=''>
                            <div className='flex w-full h-auto p-2 justify-between items-center'>
                                <h2 className='font-semibold'>MySearch</h2>
                                <div className='redbox'>
                                    <a href="https://translapp.vercel.app"><Demo /></a>
                                    <FaGithub size={10} onClick={() => alert('Github File for this project is hidden')} />
                                </div>
                            </div>
                            <p className='font-inter text-sm px-3 pb-4 text-center'>
                                Mysearch is an alternative to google, it's a search engine that works almost the way the legendary google works.

                            </p>
                            <div className='flex flex-wrap justify-around'>
                                <p className='mafor'>Next Js</p>
                                <p className='mafor'>Express</p>
                                <p className='mafor'>REST Api</p>
                            </div>
                        </div>

                    </div>

                    <div className='w-full h-auto flex flex-col justify-center items-center mt-8'>
                        <p className='text-center text-lg font-interbold'>Impressed?</p>
                        <p className='text-md text-slate-400 font-inter'>Well, you should!</p>
                        <p className=' font-intermedium px-2 mt-3 text-center'>I make mobile apps too and a few are deployed to playstore</p>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center mt-4'>
                    <Link to='https://play.google.com/store/apps/details?id=com.gloriouspete.nativea'><button className="w-auto h-auto px-3 py-2 shadow-sm shadow-slate-400 rounded-md text-md font-semibold hover:bg-black hover:text-white">Show me</button></Link>
                </div>
            </div>
        </>
    )
}