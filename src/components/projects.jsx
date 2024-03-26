import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; 
import { IoIosArrowRoundBack } from "react-icons/io";
import image from '../assets/home.jpg'
import { Second_navbar } from "./second_navbar";

export const Projects = () => { 
    
    return(
        <div>
            <motion.div className="w-full h-full  text-black font-sans overflow-visible"
                initial = {{ opacity: 0 }}
                animate = {{ opacity: 1 }}
                exit = {{ opacity: 0 }}
                transition = {{ duration: 3}}
            >
                <div className="grid xl:grid-cols-2 w-full h-full">
                    <div className="w-full hidden xl:flex h-full">
                        <div className="xl:columns-2 w-full h-full gap-0 space-y-0 ">
                            <div>
                                <div className="image">
                                    <img src={ image }alt="img" className="img" />
                                    <div className="content">
                                        <h1>my practice</h1>
                                        <Link to='/contact'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio tenetur distinctio</p></Link>
                                    </div>
                                </div>
                            </div>                           

                        </div>
                    </div>

                    <div className="w-full h-fit pb-20 px-10">                          
                        <div className="mb-20 sm:mb-28 mt-6 sm:mt-10 flex justify-between">
                            <Link to="/"><div className="w-fit items-center hover:bg-[#b1e82d] hover:hover:border-[#d5d5e0] hover:duration-500 hover:ease-in-out hover:transition-all hover:scale-110 py-3 px-6 rounded-full border border-[#2b2b2b] flex space-x-2 cursor-pointer"><IoIosArrowRoundBack size={20} /><span className="text-base font">Go Back</span> </div></Link>
                            <Second_navbar />
                        </div>

                        <div className="w-full">
                            <p className="text-lg sm:text-xl font-semibold text-[#2b2b2b]">Projects</p>
                            <div className="w-full mt-10 mb-6 text-4xl md:text-6xl font-bold">
                                <h1>HAVE A LOOK<span className="text-[#4d26b3]"> AT MY</span> PROJECTS</h1>
                            </div>
                            <h3 className="text-[#4c4c4c] text-lg md:text-xl font">Builing these projects really showed me how far I have come in my learning journey. Surely most of them were challenging but as someone that never gives up on a challenge, I made sure I solved them. I learnt alot while buiding them and I also enjoyed the process.</h3>
                        </div>
                        
                    </div>

                    <div className="w-full columns-2 flex xl:hidden h-full">
                        <div className="columns-1 sm:columns-2 w-full h-full gap-0 space-y-0 ">
                            <div>
                                <div className="image">
                                    <img src={ image }alt="img" className="img" />
                                    <div className="content">
                                        <h1>my practice</h1>
                                        <Link to='/contact'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio tenetur distinctio</p></Link>
                                    </div>
                                </div>
                            </div>                                                      

                        </div>
                    </div>

                </div> 
           </motion.div>
        </div>
    )
}

export default motion