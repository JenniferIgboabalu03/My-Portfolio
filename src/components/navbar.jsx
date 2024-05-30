import React from "react"
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { useState} from "react";
import { CiLinkedin } from "react-icons/ci";
import { RiGithubLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Navbar = () => { 

    const [menu, setMenu] = useState(false)

    const [fix, setFix] = useState(false)

    const scroll = () => { 
        if(window.scrollY >=400) { 
            setFix(true)
        }else{ 
            setFix(false)
        }
    }
    window.addEventListener("scroll", scroll)
     
    return(
        <div className="w-full text-black font-serif" id="home">
            {
                fix &&
                <div className="w-full h-fit flex justify-between box-shadow bg-[#d5d5e0] items-center py-3 px-5 sm:px-7 fixed top-0 left-0 z-50">
                    <div className="text-5xl  font-bold">J</div>
                    <nav className="h-full">
                        <ul className="hidden md:flex text-base space-x-4 font-semibold">
                            <li className="py-2 px-1 hover:text-[#4d26b3]">
                                <a href="#home">HOME</a>
                            </li>
                            <li className="py-2 px-1 hover:text-[#4d26b3]">
                                <a href="#about">ABOUT</a>
                            </li>
                            <li className="py-2 px-1 hover:text-[#4d26b3]">
                                <a href="#projects">PROJECTS</a>
                            </li>  
                            <li className="py-2 px-1 hover:text-[#4d26b3]">
                                <a href="#skills">SKILLS</a>
                            </li> 
                            <li className="py-2 px-1 hover:text-[#4d26b3]">
                                <a href="#contact">CONTACT</a>
                            </li>                                          
                        </ul>
                    </nav> 
                    <div onClick={()=>{setMenu(true)}} className="block md:hidden p-1 sm:p-2 w-fit box-shadow rounded-full hover:scale-105 cursor-pointer hover:duration-700 hover:transition-all"><IoMenuOutline size={25}/></div>
                    
                    { 
                        menu &&
                        <div className="fixed top-0 inset-0 left-0 w-full h-screen backdrop-blur-sm backdrop-brightness-50">
                            <div className="fixed top-0 inset-0 left-0 w-[70%] sm:w-[50%] md:w-[40%] lg:w-[30%] bg-[#d5d5e0] text-black py-4 md:py-6 px-4 md:px-6">
                                <div className="flex items-center justify-between py-3 border-b border-black">
                                    <p>J</p>
                                    <div onClick={()=>{setMenu(false)}} className="p-1 w-fit sm:p-2 box-shadow rounded-full hover:scale-105 cursor-pointer hover:duration-700 hover:transition-all"><IoCloseOutline size={25}/></div>
                                </div>
                                <nav className="h-fit w-full border-b border-black py-6">
                                    <ul className="text-base space-y-1 font-semibold">
                                        <li className="py-2" onClick={()=>{setMenu(false)}}>
                                            <a href="#home">HOME</a>
                                        </li>
                                        <li className="py-2 " onClick={()=>{setMenu(false)}}>
                                            <a href="#about">ABOUT</a>
                                        </li>
                                        <li className="py-2" onClick={()=>{setMenu(false)}}>
                                            <a href="#projects">PROJECTS</a>
                                        </li>  
                                        <li className="py-2" onClick={()=>{setMenu(false)}}>
                                            <a href="#skills">SKILLS</a>
                                        </li> 
                                        <li className="py-2" onClick={()=>{setMenu(false)}}>
                                            <a href="#contact">CONTACT</a>
                                        </li>                     
                                    </ul>
                                </nav>

                                <p className="text-base my-6 font-semibold">FIND ME WITH:</p>
                                <div className="flex items-center w-full h-fit md:mt-4 space-x-5">                                
                                    <Link to="https://github.com/JenniferIgboabalu03"><div className="w-fit h-fit box-shadow rounded-lg cursor-pointer font-semibold bg-[#e1e1e166] hover:bg-[#d5d5e0] p-3 hover:transition-all hover:scale-90 duration-500 hover:text-[#4d26b3]"><RiGithubLine size={25}/></div></Link>
                                    <Link to="https://www.linkedin.com/in/jenny-i-239397205/"><div className="w-fit h-fit box-shadow rounded-lg cursor-pointer font-semibold bg-[#e1e1e166] hover:bg-[#d5d5e0] p-3 hover:transition-all hover:scale-90 duration-500 hover:text-[#4d26b3]"><CiLinkedin size={25} /></div></Link>
                                </div>
                                
                            </div>                        
                        </div>                    
                    }
                </div>
            }            
        </div>
    )
}
