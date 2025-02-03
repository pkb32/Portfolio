import React from 'react'
import { PiPentagonLight } from "react-icons/pi";
function HeroPic() {
    
  return (
    <div className='h-full flex items-center justify-center'>
        
    <img src="./../public/images/Profile2.png" alt=""  className='max-h-[450px] w-auto'/>
      <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
        <PiPentagonLight  className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite] " />
      </div>
    </div>
    
  )
}

export default HeroPic
