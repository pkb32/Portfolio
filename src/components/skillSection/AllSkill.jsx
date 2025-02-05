import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiUnity } from "react-icons/si";
import { BsHeadsetVr } from "react-icons/bs";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNode } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiArduino } from "react-icons/si";
import SingleSkill from './SingleSkill';

import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";


const skills = [
      {
          skill: "HTML",
          icon: FaHtml5,
      },
      {
        skill: "CSS",
        icon: FaCss3Alt,
      },
      {
        skill: "JavaScript",
        icon: IoLogoJavascript,
      },
      {
        skill: "ReactJS",
        icon: FaReact,
      },
      {
        skill: "Mongo DB",
        icon: BiLogoMongodb
      },
      {
        skill: "NodeJS",
        icon:FaNode
      },
      {
        skill: "TailwindCSS",
        icon: RiTailwindCssFill,
      },
      {
        skill:"BootStrap",
        icon: FaBootstrap
      },
      {
        skill: "Unity Engine",
        icon: SiUnity
      },
      {
        skill: "Virtual Reality",
        icon: BsHeadsetVr
      },
      {
        skill: "MySql",
        icon:SiMysql
      },
      {
        skill:"Arduino",
        icon:SiArduino
      }
]

function AllSkill() {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `${index * 0.1}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
                <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
        
          );
        })}
      </div>
    </div>
  )
}

export default AllSkill
