import React from 'react'
import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";


const experiences = [
    {
      job: "Code Head cum Secretary",
      company: "GTA- Game To Aim",
      date: "2021 - 2025 (NITR)",
      responsibilities: [
        "Started my journey in the technical team.",
        "Participate in various clubs events building FPS & VR Games.",
        "Promoted as one of the Executive-Body-Member.",
        "Lead a Team of 20+ Members organizing event in the College TechFest.",
      ],
    },
    {
      job: "Blue Bird 1.0 Team Captain",
      company: "ASME- American Society Of Mechanical Engineers",
      date: "2021 - 2025 (NITR)",
      responsibilities: [
        "I was the part of Technical Chassis Team.",
        "Have Designed and built the Chassis of Electric Human Powered Vehicle.",
        "In the year 2023, I was made the Captain of Team BlueBird 1.0 Team.",
      ],
    },
    {
      job: "Project Lead",
      company: "SCB- Standard Chartered Bank",
      date: "2025 - 2026 (Apprenticeship)",
      responsibilities: [
        "I was the lead of a team of 5 members working in developing a Python automation utility for the bank.",
        "Divided the project into various modules and assigned the tasks to my team members.",
        "Successfull in reducing the bussiness cost by 32% and enhancing operational efficiency.",
      ],
    },
  ];

function AllExperience() {
    return (
        <div className="flex md:flex-row sm:flex-col items-center justify-between">
          {experiences.map((experience, index) => {
            return (
              <>
                <SingleExperience key={index} experience={experience} />
                {index < 2 ? (
                  <motion.div
                  variants={fadeIn("right", 0)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                  >
                    <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
                  </motion.div>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
      );
}

export default AllExperience
