import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

function SingleExperience({ experience }) {
    return (
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="md:h-[380px] md:w-[290px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4"
        >
          <p className="font-bold text-cyan">{experience.job}</p>
          <p className="text-orange">{experience.company}</p>
          <p className="text-lightGrey">{experience.date}</p>
          <ul className="list-disc mt-4 pl-4">
            {experience.responsibilities.map((resp, index) => {
              return <li key={index} className='text-white'>{resp}</li>;
            })}
          </ul>
        </motion.div>
      );
}

export default SingleExperience
