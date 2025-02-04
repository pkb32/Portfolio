import React from 'react'
import ExperienceText from './ExperienceText'
import ExperienceTop from './ExperienceTop'
import AllExperience from './AllExperience'

function ExperienceMain() {
  return (
    <div id="experience" className="w-full mx-auto px-4 ">
      <ExperienceText/>
      <ExperienceTop/>
      <div className="w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden"></div>
      <div className='flex flex-col items-center mt-[100px] text-6xl text-cyan'> Extra Curicular</div>
      <AllExperience/>
    </div>
  )
}

export default ExperienceMain
