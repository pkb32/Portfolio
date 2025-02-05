import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
    {
      name: " Videotube-Server",
      year: "January 2025",
      align: "right",
      image: "/images/VideoTube.png",
      link: "https://github.com/pkb32/Metube/tree/main",
    },
    {
      name: "Shareo",
      year: "December 2024",
      align: "left",
      image: "/images/blogging.png",
      link: "https://blogging-site-flax.vercel.app/",
    },
    {
      name: "Virtual Reality Game",
      year: "October 2023",
      align: "right",
      image: "/images/VR2.jpeg",
      link: "https://github.com/pkb32/VR_Rush",
    },
    {
      name: "Autonomous Bot",
      year: "March 2023",
      align: "left",
      image: "/images/BB1.jpeg",
      link: "https://drive.google.com/file/d/1Bn5PRUaIaAfYxgeta-qkNR94jHTBAJxq/view?usp=drivesdk",
    },
    {
      name: "First Person Shooter",
      year: "September 2022",
      align: "right",
      image: "/images/Hunt.png",
      link: "https://github.com/pkb32/The_Hunt",
    },
    
  ];

function ProjectsMain() {
    return (
        <div id="projects" className="max-w-[1290px] mx-auto px-4">
          <motion.div
          variants={fadeIn("top", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          >
            <ProjectsText />
          </motion.div>
        
          <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
            {projects.map((project, index) => {
              return (
                <SingleProject
                  key={index}
                  name={project.name}
                  year={project.year}
                  align={project.align}
                  image={project.image}
                  link={project.link}
                />
              );
            })}
          </div>
        </div>
      );
}

export default ProjectsMain
