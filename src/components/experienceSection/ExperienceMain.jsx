import React from 'react'
import ExperienceText from './ExperienceText'
import ExperienceTop from './ExperienceTop'
import AllExperience from './AllExperience'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

function ExperienceMain() {
  return (
    <div id="experience" className="w-full mx-auto px-4 ">
      <motion.div
       variants={fadeIn("down", 0)}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.7 }}
      
      >
        <ExperienceText/>
      </motion.div>
      <motion.div
       variants={fadeIn("down", 0.5)}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0 }}
      >
        <ExperienceTop/>
      </motion.div>
      <div className="w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden"></div>
      <div className='flex flex-col items-center mt-[100px] text-6xl text-cyan'> Extra Curicular</div>
      <AllExperience/>
    </div>
  )
}

export default ExperienceMain
