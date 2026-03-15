import React from 'react'
import ExperienceInfo from './ExperienceInfo'

function ExperienceTopLeft() {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
    <p className="text-orange font-bold uppercase text-2xl font-special text-center leading-none tracking-tighter ">
    Standard Chartered India
    </p>
    <div className="flex justify-center items-center gap-4">
      <ExperienceInfo number="19th" text="August 2025" />
      <p className="font-bold text-6xl text-lightBrown">-</p>
      <ExperienceInfo number="18th" text="August 2026" />
    </div>
    <p className="text-center text-1xl justify-evenly leading-none tracking-tighter text-lightGrey">
    Learned Python Automation, worked in developing various macro services, YOLO based Image processing techniques and got an exposure to banking operations. 
    </p>
    <ExperienceInfo number="Apprenticeship" text="Technology & Operations" />
  </div>
  )
}

export default ExperienceTopLeft
