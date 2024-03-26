import React from "react"
import { Navbar } from "./navbar"
import { motion } from 'framer-motion'
import { ReactTyped } from "react-typed"
import { PiHandWavingThin } from "react-icons/pi";
import image from '../assets/home.jpg'
import { GoArrowRight } from "react-icons/go";



export const Home = () => { 
    
    return(
        <div>
           <motion.div className="w-full h-full xl:h-screen text-black font-sans overflow-visible"
                initial = {{ opacity: 0 }}
                animate = {{ opacity: 1 }}
                exit = {{ opacity: 0 }}
                transition = {{ duration: 3}}
                >
               <div className="grid xl:grid-cols-2 w-full h-full">
                    <div className="w-full h-full mb-24 xl:mb-14 xl:pb-0 px-10">
                        <Navbar />
                        <div className="w-full xl:flex xl:flex-col xl:">
                            <div className="items-center space-x-2 flex"><PiHandWavingThin className="text-[#4c4c4c] size-4 sm:size-5"/><span className="text-xl font-semibold text-[#2b2b2b]">Let's meet</span></div>
                            <div className="w-full mt-10 mb-6 md:text-7xl hidden md:flex font-bold">
                                <h1 className="text">I'M <span className="text-[#4d26b3]">JENNIFER <br /> IGBOABALU</span></h1>
                            </div>
                            <div className="w-full mt-5 sm:mt-7 mb-2 sm:mb-1 text-5xl sm:text-4xl flex md:hidden font-bold">
                                <h1 className="text">I'M <span className="text-[#4d26b3]">JENNIFER IGBOABALU</span></h1>
                            </div>
                            <ReactTyped className="text-2xl sm:text-4xl font-bold flex sm:hidden"
                            strings={["Frontend Developer"]} typeSpeed={60} backSpeed={90} loop />
                            <ReactTyped className="text-2xl sm:text-4xl font-bold hidden sm:flex"
                            strings={["Frontend Web Developer"]} typeSpeed={60} backSpeed={90} loop />
                        </div>
                        <div className="flex items-center mt-10 xl:mt-16 space-x-2 cursor-pointer">
                            <h1 className="text-2xl xl:text-3xl font-semibold text-[#2b2b2b]">VIEW MY CERTIFICATE</h1> <div className="border-[#2b2b2b] border p-1 sm:p-2 rounded-full hover:bg-[#b1e82d] hover:border-[#d5d5e0] hover:duration-500 hover:ease-in-out hover:transition-all hover:scale-110"><GoArrowRight className="size-8 "/></div>
                        </div>
                    </div>

                    <div className="w-full hidden h-full xl:flex flex-col items-end home-image"></div>

                    <div className="w-full flex xl:hidden h-[500px] md:h-[710px]">
                        <img src={image} className="w-full h-full object-cover object-center" alt="img" />
                   </div>

                </div> 
           </motion.div>
        </div>
    )
}

