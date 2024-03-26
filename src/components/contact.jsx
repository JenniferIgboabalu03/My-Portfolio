import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import { IoIosArrowRoundBack } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { RiGithubLine } from "react-icons/ri";
import image from '../assets/home.jpg'
import { Second_navbar } from "./second_navbar";


export const Contact = () => { 
    
    return(
        <div>
           <motion.div className="w-full h-full text-black font-sans overflow-visible "
                initial = {{ opacity: 0 }}
                animate = {{ opacity: 1 }}
                exit = {{ opacity: 0 }}
                transition = {{ duration: 3,}}
                               
           >
               <div className="grid xl:grid-cols-2 w-full h-full">                    
                    <div className="w-full hidden xl:flex contact-image ">

                    </div>

                    <div className="w-full h-fit px-10">                                              
                        <div className="mb-20 sm:mb-28 mt-6 sm:mt-10 flex justify-between">
                            <Link to="/"><div className="w-fit items-center hover:bg-[#b1e82d] hover:hover:border-[#d5d5e0] hover:duration-500 hover:ease-in-out hover:transition-all hover:scale-110 py-3 px-6 rounded-full border border-[#2b2b2b] flex space-x-2 cursor-pointer"><IoIosArrowRoundBack size={20} /><span className="text-base font">Go Back</span> </div></Link>
                            <Second_navbar />
                        </div>
                        <div className="w-full">
                            <p className="text-lg sm:text-xl font-semibold text-[#2b2b2b]">Contact me</p>
                            <div className="w-full mt-10 mb-6 text-4xl md:text-6xl font-bold">
                                <h1>LET US <span className="text-[#4d26b3]">WORK</span> TOGETHER</h1>
                            </div>
                            <h3 className="text-[#4c4c4c] text-lg md:text-xl font ">Have a question or want to work together with me? you can reach me through my email or phone numbers and I'll get back to you as soon as possible.</h3>
                        </div>

                        <div className="mt-12 sm:mt-20 mb-24 xl:mb-5 grid md:grid-cols-2 w-full h-full">
                            <div>
                                <h1 className="text-[#111111] text-2xl sm:text-3xl font-bold">LOCATION</h1>
                                <p className="text-[#4c4c4c] text-lg">Lagos State,</p>
                                <p className="text-[#4c4c4c] text-lg">Nigeria.</p>

                                <div className="my-6 sm:mt-6">
                                    <h1 className="text-[#111111] text-2xl sm:text-3xl font-bold">CALL ME</h1>
                                    <p className="text-[#4c4c4c] text-lg">+2349055087093</p>
                                    <p className="text-[#4c4c4c] text-lg">+2349055087093</p>
                                </div>
                            </div>

                            <div>
                                <h1 className="text-[#111111] text-2xl sm:text-3xl font-bold">FOLLOW ME</h1>
                                <div className="items-center flex space-x-2"><RiGithubLine size={20}/><span className="text-[#4c4c4c] text-lg">Github </span></div>
                                <div className="flex items-center space-x-2"><CiLinkedin size={20} /><span className="text-[#4c4c4c] text-lg">Linkedin</span></div>

                                <div className="my-6 sm:mt-6">
                                    <h1 className="text-[#111111] text-2xl sm:text-3xl font-bold">EMAIL ME</h1>
                                    <p className="text-[#4c4c4c] text-lg">jennyigboabalu@gmail.com</p>
                                </div>
                            </div>

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

