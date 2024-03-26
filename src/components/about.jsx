import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion" 
import { IoIosArrowRoundBack } from "react-icons/io";
import image from '../assets/home.jpg'
import { Second_navbar } from "./second_navbar";

export const About = () => { 
    
    return(
        <div>
           <motion.div className="w-full h-full text-black font-sans overflow-visible"
                initial = {{ opacity: 0 }}
                animate = {{ opacity: 1 }}
                exit = {{ opacity: 0 }}
                transition = {{ duration: 3}}
            >
               <div className="grid xl:grid-cols-2 w-full h-full">                    
                    <div className="w-full h-full hidden xl:flex about-image">

                    </div>

                    <div className="w-full h-full px-10"> 
                        <div className="mb-20 sm:mb-28 mt-6 sm:mt-10 flex justify-between">
                            <Link to="/"><div className="w-fit items-center hover:bg-[#b1e82d] hover:hover:border-[#d5d5e0] hover:duration-500 hover:ease-in-out hover:transition-all hover:scale-110 py-3 px-6 rounded-full border border-[#2b2b2b] flex space-x-2 cursor-pointer"><IoIosArrowRoundBack size={20} /><span className="text-base font">Go Back</span> </div></Link>
                            <Second_navbar />
                        </div>                         

                        <div className="w-full">
                            <p className="text-lg sm:text-xl font-semibold text-[#2b2b2b]">About me</p>
                            <div className="w-full mt-10 mb-6 text-4xl md:text-6xl font-bold">
                                <h1>A LITTLE BIT <span className="text-[#4d26b3]">ABOUT</span> MYSELF</h1>
                            </div>
                            <h3 className="text-[#4c4c4c] text-lg md:text-xl font ">Fully committed to the philosophy of life-long learning, I’m a frontend web developer with a passion for JavaScript, React and all things web development. The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for web development. When I’m not at my computer I like to spend my time Stretching, learning new skills and watching movies.</h3>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold my-12 sm:my-16 ">MY SKILLS</h1>

                        <div className="w-full border-y mb-24 xl:mb-0 border-[#b3b3c4] text-2xl md:text-3xl font-bold text-[#111111] divide-y divide-[#b3b3c4]">
                            <h1 className="py-5">HTML & CSS </h1>
                            <h1 className="py-5">JAVASCRIPT</h1>
                            <h1 className="py-5">REACT</h1>
                            <h1 className="py-5">TAILWIND CSS</h1>
                            <h1 className="py-5">GIT & GITHUB</h1>
                            <h1 className="py-5">RESPONSIVE DESIGN</h1>
                        </div>
                    </div>

                    <div className="w-full flex xl:hidden h-[500px] md:h-[710px]">
                        <img src={image} className="w-full h-full object-cover object-center rounded-t-3xl" alt="img" />
                    </div>
                </div> 
           </motion.div>
        </div>
    )
}

