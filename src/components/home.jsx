import React from "react"
import { motion } from 'framer-motion'
import { ReactTyped } from "react-typed"
import { GoArrowRight } from "react-icons/go";
import img1 from "../assets/l.jpg"
import { Link } from "react-router-dom";
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'
import { CiLinkedin } from "react-icons/ci";
import { RiGithubLine } from "react-icons/ri";

export const Home = () => { 
    
    return(
        <div className="text-black font-serif">
           <motion.div className="w-full h-[380px] md:h-screen px-5 sm:px-7 overflow-visible home-image"
                initial = {{ opacity: 0 }}
                animate = {{ opacity: 1 }}
                exit = {{ opacity: 0 }}
                transition = {{ duration: 3}}
                >
               <div className="w-full h-full flex flex-col justify-center">
                    <h1 className="font-bold text-4xl sm:text-5xl md:text-7xl">JENNIFER IGBOABALU</h1>  
                    <ReactTyped className="text-lg mt-3 sm:text-2xl md:text-4xl font-bold text-[#4d26b3]"
                    strings={["Frontend Web Developer"]} typeSpeed={60} backSpeed={90} loop />
                    <Link to="/certificate" target="_parent">
                        <div className="flex items-center space-x-2 cursor-pointer">
                            <h1 className="text-lg sm:text-2xl font-semibold">VIEW MY CERTIFICATE</h1> <div className="border-[#2b2b2b] border p-1 sm:p-2 rounded-full hover:bg-black hover:text-white hover:border-[#d5d5e0] hover:duration-500 hover:ease-in-out hover:transition-all hover:scale-110"><GoArrowRight className="size-5 sm:size-8 "/></div>
                        </div>
                    </Link>                                         
                </div> 
           </motion.div>
            <div className="2xl:max-w-screen-2xl 2xl:mx-auto w-full h-full px-5 sm:px-7 overflow-hidden"id="about">
                <div className="my-20 md:my-24 space-y-9 md:space-y-11 lg:space-y-0 lg:h-[550px] xl:h-[600px] lg:flex">
                    <div className="hidden lg:block lg:w-[40%] w-full rounded-xl h-[400px] sm:h-[600px] md:h-[820px] lg:h-full">
                        <img src={ img1 } alt="image" className="w-full h-full rounded-xl object-cover" />
                    </div>

                    <div className="lg:w-[60%] lg:pt-10 xl:pt-20 lg:px-10 xl:px-14">
                        <div className="text-center sm:text-left space-y-4 w-full">
                            <p className="text-base md:text-lg text-[#4d26b3] font-semibold letter-space">A LITLE BIT ABOUT MYSELF</p>                               
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold">About Me</h1>
                        </div> 
                        <div className="mt-6 md:mt-9 space-y-2 text-base md:text-lg w-full">
                            <p>Fully committed to the philosophy of life-long learning, I'm a frontend web developer with a passion for Html, Css, JavaScript, React and all things web development. The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for web development and computer science in general.</p>
                            <p>When I'm not at my computer I like to spend my time learning new skills, working out and watching movies.</p>
                        </div> 
                        {/* <div className="py-4 mt-8 md:mt-9 box-shadow md:py-5 px-9 hover:transition-all hover:scale-105 duration-700 font-semibold w-fit text-sm rounded-lg cursor-pointer bg-[#a7abbd66] text-[#4d26b3] hover:text-black">
                            <p>DOWNLOAD MY CV</p>
                        </div>                                              */}
                    </div>
                </div>

                <div className="w-full h-full py-20 md:py-24 border-y border-black" id="projects">
                    <div className="text-center space-y-4 w-full">
                        <p className="text-base md:text-lg text-[#4d26b3] font-semibold">KINDLY VISIT MY PROJECTS AND HAVE A LOOK</p>                               
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold">My Projects</h1>
                    </div> 
                    
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 w-full h-full mt-10">
                        <Link to="https://eden-on-earth.vercel.app/">
                            <div className="project cursor-pointer eoe h-80 md:h-72 rounded-2xl box-shadow">
                                <div className="w-full h-full">
                                    
                                </div>
                                <div className="project-desc rounded-2xl p-6">
                                    <h1 className="font-semibold text-xl md:text-2xl text-white">Eden On Earth</h1>
                                    <p className="text-base md:text-lg my-2 text-white">EOE is an e-commerce platform catered towards giving the best and fast experience for plant lovers to buy plants, I call it a frictionless process from start to finish.</p>
                                    <div className="flex items-center space-x-2">
                                        <p className="text-xs rounded-full py-1 px-3 bg-[#d5d5e0]">React</p>
                                        <p className="text-xs rounded-full py-1 px-3 bg-[#d5d5e0]">Css</p>
                                        <p className="text-xs rounded-full py-1 px-3 bg-[#d5d5e0]">Tailwind css</p>
                                    </div>
                                </div>
                            </div>                            
                        </Link>
                        <Link to="https://mountain-dreamers-lodge.vercel.app/">
                            <div className="project cursor-pointer mdl h-80 md:h-72 rounded-2xl box-shadow">
                                <div className="w-full h-full">
                                    
                                </div>
                                <div className="project-desc rounded-2xl p-6">
                                    <h1 className="font-semibold text-xl md:text-2xl text-white">Mountain Dreamers Lodge</h1>
                                    <p className="text-base md:text-lg my-2 text-white">A purely luxurious mountain resort that surpasses the conventional notion of hospitality in the region and presents a retreat experience immersed in holistic wellness practices and activities inspired by the four shades of the transforming seasons.</p>
                                    <div className="flex items-center space-x-2">
                                        <p className="text-xs rounded-full py-1 px-3 bg-[#d5d5e0]">React</p>
                                        <p className="text-xs rounded-full py-1 px-3 bg-[#d5d5e0]">Css</p>
                                        <p className="text-xs rounded-full py-1 px-3 bg-[#d5d5e0]">Tailwind css</p>
                                    </div>
                                </div>
                            </div>                            
                        </Link>

                        <Link>
                            <div className="project cursor-pointer portfolio h-80 md:h-72 rounded-2xl box-shadow">
                                <div className="w-full h-full">
                                    
                                </div>
                                <div className="project-desc rounded-2xl p-6">
                                    <h1 className="font-semibold text-xl md:text-2xl text-white">My Portfolio</h1>
                                    <p className="text-base md:text-lg my-2 text-white">A one page portfolio website that i created to show my skills, certificate and projects that i solely built.</p>
                                    <div className="flex items-center space-x-2">
                                        <p className="text-xs rounded-full py-1 px-3 bg-[#d5d5e0]">React</p>
                                        <p className="text-xs rounded-full py-1 px-3 bg-[#d5d5e0]">Css</p>
                                        <p className="text-xs rounded-full py-1 px-3 bg-[#d5d5e0]">Tailwind css</p>
                                    </div>
                                </div>
                            </div>                            
                        </Link>

                        <Link to="https://empire-storm.vercel.app/">
                            <div className="project cursor-pointer empire-storm h-80 md:h-72 rounded-2xl box-shadow">
                                <div className="w-full h-full">
                                    
                                </div>
                                <div className="project-desc rounded-2xl p-6">
                                    <h1 className="font-semibold text-xl md:text-2xl text-white">Empire Storm</h1>
                                    <p className="text-base md:text-lg my-2 text-white">Aims to provide users with accurate and personalized weather forecasts based on their location. It serves as a convenient tool for individuals who want to stay updated on current weather conditions.</p>
                                    <div className="flex items-center space-x-2">
                                        <p className="text-xs rounded-full py-1 px-3 bg-[#d5d5e0]">Html</p>
                                        <p className="text-xs rounded-full py-1 px-3 bg-[#d5d5e0]">Css</p>
                                        <p className="text-xs rounded-full py-1 px-3 bg-[#d5d5e0]">Api</p>
                                    </div>
                                </div>
                            </div>                            
                        </Link>
                    </div>
                </div>

                <div className="w-full h-full py-20 md:py-24 border-b border-black" id="skills">
                    <div className="text-center space-y-4 w-full">
                        <p className="text-base md:text-lg text-[#4d26b3] font-semibold">SKILLS</p>                               
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold">My Current Skills</h1>
                    </div> 
                    
                    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full h-full mt-10">
                        <div className="w-[70%] mx-auto sm:mx-0 sm:w-full h-full rounded-xl box-shadow bg-[#e1e1e166] hover:bg-[#d5d5e0]">
                            <div className="h-16 w-16 mx-auto my-7"><img src={ html } alt="" className="h-full w-full" /> </div>                  
                            <p className="text-base md:text-lg font-semibold text-center border-t border-black py-3">Html</p>
                        </div>
                        <div className="w-[70%] mx-auto sm:mx-0 sm:w-full h-full rounded-xl box-shadow bg-[#e1e1e166] hover:bg-[#d5d5e0]">
                            <div className="h-16 w-16 mx-auto my-7"><img src={ css } alt="" className="h-full w-full" /> </div>                  
                            <p className="text-base md:text-lg font-semibold text-center border-t border-black py-3">Css</p>
                        </div>
                        <div className="w-[70%] mx-auto sm:mx-0 sm:w-full h-full rounded-xl box-shadow bg-[#e1e1e166] hover:bg-[#d5d5e0]">
                            <div className="h-16 w-16 mx-auto my-7"><img src={ js } alt="" className="h-full w-full" /> </div>                  
                            <p className="text-base md:text-lg font-semibold text-center border-t border-black py-3">Js</p>
                        </div>
                        <div className="w-[70%] mx-auto sm:mx-0 sm:w-full h-full rounded-xl box-shadow bg-[#e1e1e166] hover:bg-[#d5d5e0]">
                            <div className="h-16 w-16 mx-auto my-7"><img src={ react } alt="" className="h-full w-full" /> </div>                  
                            <p className="text-base md:text-lg font-semibold text-center border-t border-black py-3">React</p>
                        </div>
                        <div className="w-[70%] lg:col-start-2 lg:col-span-1 mx-auto sm:mx-0 sm:w-full h-full rounded-xl box-shadow bg-[#e1e1e166] hover:bg-[#d5d5e0]">
                            <div className="h-16 w-16 mx-auto my-7"><img src={ tailwind } alt="" className="h-full w-full" /> </div>                  
                            <p className="text-base md:text-lg font-semibold text-center border-t border-black py-3">Tailwind</p>
                        </div>
                        <div className="w-[70%] mx-auto sm:mx-0 sm:w-full h-full rounded-xl box-shadow bg-[#e1e1e166] hover:bg-[#d5d5e0]">
                            <div className="h-16 w-16 mx-auto my-7"><img src={ github } alt="" className="h-full w-full" /> </div>                  
                            <p className="text-base md:text-lg font-semibold text-center border-t border-black py-3">Github</p>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full py-20 md:py-24 border-b border-black" id="contact">
                    <div className="text-center space-y-4 w-full">
                        <p className="text-base md:text-lg text-[#4d26b3] font-semibold uppercase">Interested in working with me?</p>                               
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold">Contact With Me</h1>
                    </div> 
                    
                    <div className="w-full h-full mt-10 grid lg:grid-cols-3 gap-7 sm:gap-10 lg:gap-8">
                        <div className="box-shadow p-6 md:p-7 rounded-xl w-full h-fit">
                            <div className="h-56 sm:h-72 md:h-[450px] lg:h-56"><img src={ img1 } alt="image" className="w-full h-full object-cover rounded-xl hover:transition-all hover:scale-105 duration-700" /> </div>
                            <h2 className="font-semibold text-xl md:text-2xl mt-5 md:mt-4">Jennifer Igboabalu</h2>
                            <p className="text-lg md:text-xl mt-3 md:mt-4 text-[#4d26b3]">Frontend Web Developer</p>
                            <p className="font-semibold text-base md:text-lg my-3 md:my-4">I am always open to opportunities. Connect with me via:</p>
                            <p className="font-semibold text-sm md:text-base">Phone: <span className="font-sans text-base md:text-lg">+2349055093903</span></p>
                            <p className="font-semibold text-sm md:text-base">Email: <span className="font-sans text-base md:text-lg">jennyigboabalu@gmail.com</span></p> 

                            <div className="flex items-center w-full h-fit mt-5 md:mt-4 space-x-7">
                                <Link to="https://github.com/JenniferIgboabalu03"><div className="w-fit h-fit box-shadow rounded-lg cursor-pointer font-semibold bg-[#e1e1e166] hover:bg-[#d5d5e0] p-4 hover:transition-all hover:scale-90 duration-500 hover:text-[#4d26b3]"><RiGithubLine size={25}/></div> </Link>
                                <Link to="https://www.linkedin.com/in/jenny-i-239397205/"><div className="w-fit h-fit box-shadow rounded-lg cursor-pointer font-semibold bg-[#e1e1e166] hover:bg-[#d5d5e0] p-4 hover:transition-all hover:scale-90 duration-500 hover:text-[#4d26b3]"><CiLinkedin size={25} /></div></Link>
                            </div>
                        </div>  

                        <div className="w-full h-full lg:col-span-2 gap-8 p-6 md:p-7 rounded-xl box-shadow">
                            <form action="">
                                <div className="w-full h-full grid sm:grid-cols-2 ">
                                    <div className="w-full sm:col-span-2 lg:col-span-1">
                                        <label htmlFor="name" className="text-sm font-semibold">YOUR NAME</label>
                                        <div className="mt-2 lg:mr-4 md:mt-3"><input type="text" name="name" id="name" className="py-2 md:py-3 w-full rounded-lg bg-[#e1e1e166] outline-[#4d26b3]" /></div>
                                    </div>
                                    <div className="w-full sm:col-span-2 lg:col-span-1">
                                        <label htmlFor="number" className="text-sm font-semibold lg:ml-4">PHONE NUMBER</label>
                                        <div className="mt-2 lg:ml-4 md:mt-3"><input type="text" name="number" id="number" className="py-2 md:py-3 w-full rounded-lg bg-[#e1e1e166] outline-[#4d26b3]" /></div>
                                    </div>
                                    <div className="w-full sm:col-span-2 mt-3 md:mt-4">
                                        <label htmlFor="email" className="text-sm font-semibold">EMAIL</label>
                                        <div className="mt-2 md:mt-3"><input type="email" name="email" id="email" className="py-2 md:py-3 w-full rounded-lg bg-[#e1e1e166] outline-[#4d26b3]" /></div>
                                    </div>
                                    <div className="w-full sm:col-span-2 mt-3 md:mt-4">
                                        <label htmlFor="subject" className="text-sm font-semibold">SUBJECT</label>
                                        <div className="mt-2 md:mt-3"><input type="text" name="subject" id="subject" className="py-2 md:py-3 w-full rounded-lg bg-[#e1e1e166] outline-[#4d26b3]" /></div>
                                    </div>
                                    <div className="w-full sm:col-span-2 mt-3 md:mt-4">
                                        <label htmlFor="message" className="text-sm font-semibold">YOUR MESSAGE</label>
                                        <div className="mt-2 md:mt-3"><input type="text" name="message" id="message" className="py-20 w-full rounded-lg bg-[#e1e1e166] outline-[#4d26b3]" /></div>
                                    </div>
                                    <div className="w-full py-3 md:py-4 text-center sm:col-span-2 font-semibold text-sm box-shadow rounded-lg mt-4 hover:transition-all hover:scale-105 cursor-pointer duration-500"><button type="submit">SEND MESSAGE</button></div>
                                </div>
                            </form>                            
                        </div>
                    </div>
                </div>

                <div className="w-full h-full py-16 md:py-20 text-center"><p className="font-semibold text-lg md:text-xl"><sup className="text-xs">&copy;</sup> 2024. Built from scratch by Jennifer Igboabalu.All Rights Reserved.</p></div>
            </div>           
        </div>
    )
} 