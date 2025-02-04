import React from 'react'
import ExperienceInfo from './ExperienceInfo'

function ExperienceTopLeft() {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
    <p className="text-orange font-bold uppercase text-2xl font-special text-center leading-none tracking-tighter ">
    Prospect Innovations
    </p>
    <div className="flex justify-center items-center gap-4">
      <ExperienceInfo number="19th" text="May" />
      <p className="font-bold text-6xl text-lightBrown">-</p>
      <ExperienceInfo number="19th" text="July" />
    </div>
    <p className="text-center leading-none tracking-tighter text-lightGrey">
    I was the part of Technical Team and worked as a trainee, leading my team for preparing
    critical deligence reports in the field of Mining and Industrial Automation.
    </p>
    <ExperienceInfo number="Internship" text="Engineer Trainee" />
  </div>
  )
}

export default ExperienceTopLeft
