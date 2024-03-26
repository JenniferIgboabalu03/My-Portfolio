import React from "react"
import { Link } from "react-router-dom"
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { useState} from "react";


export const Second_navbar = () => { 

    const [menu, setMenu] = useState(false)
     
    return(
        <div className="w-fit">                       
            <div onClick={() => {setMenu(true)} } className="hover:bg-[#b1e82d] hover:border-[#d5d5e0] hover:duration-500 hover:ease-in-out hover:transition-all hover:scale-110 justify-end rounded-full border p-2 border-[#2b2b2b]">
                {<IoMenuOutline size={20}  className="hover:scale-110 transition-all"/>}
            </div>

            {
                menu ? 
                <div className="">
                    <div className="fixed inset-0 top-0 left-0 h-screen w-full backdrop-blur-sm bg-gray-500 bg-opacity-60 "></div>
                    <div className="fixed inset-0 top-0 left-0 p-5 ">
                        <div className='w-full bg-white rounded-3xl p-8 md:p-16 max-w-screen-sm mx-auto'>
                            <div className="flex items-center justify-between">
                                <Link to='/'><h1 className="text-xl sm:text-3xl font-bold cursor-pointer">J</h1></Link>
                                <div onClick={() => {setMenu(false)}} className="rounded-full hover:bg-[#b1e82d] hover:border-[#d5d5e0] hover:duration-500 hover:ease-in-out hover:transition-all border p-2 border-[#2b2b2b] cursor-pointer hover:scale-110 transition-all">
                                    <IoCloseOutline size={20}/>
                                </div>
                            </div>                        
                            <div className="text-lg sm:text-2xl md:text-3xl font-semibold mt-4 md:mt-7">
                                <Link to='/about'><div className="py-5 font border-b border-b-[#b3b3c4]"><h4>ABOUT ME</h4></div></Link>
                                <Link to='/projects'><div className="py-5 font border-b border-b-[#b3b3c4]"><h4>PROJECTS</h4></div></Link>
                                <Link to='/contact'><div className="pt-5"><h4>CONTACT</h4></div></Link>
                            </div>
                        </div>
                    </div>
                </div>
                : <></>
                
            }
        </div>
        
    )
}
