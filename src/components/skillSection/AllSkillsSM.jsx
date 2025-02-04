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
function AllSkillsSM() {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
          {skills.map((item, index) => {
            return (
              <div className="flex flex-col items-center" key={index}>
                <item.icon className="text-7xl text-orange" />
                <p className="text-center mt-4 text-white">{item.skill}</p>
              </div>
            );
          })}
        </div>
      );
}

export default AllSkillsSM
