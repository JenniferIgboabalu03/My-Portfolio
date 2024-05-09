import React from 'react'
import img1 from "../assets/certificate.jpg"

export const Certificate = () => {
  return (
    <div className='w-full h-screen grid grid-col-1 px-6'>        
        <div className="max-w-screen-xl mx-auto h-full py-14">
            <img src={ img1 } alt="image" className="w-full h-full rounded-xl object-contain box-shadow" />            
        </div>
    </div>
  )
}
