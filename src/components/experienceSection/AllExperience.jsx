import React from 'react'
import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";



const experiences = [
    {
      job: "Code Head cum Secretary",
      company: "GTA- Game To Aim",
      date: "2021 - Present",
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
      date: "2021 - Present",
      responsibilities: [
        "I was the part of Technical Chassis Team.",
        "Have Designed and built the Chassis of Electric Human Powered Vehicle.",
        "In the year 2023, I was made the Captain of Team BlueBird 1.0 Team.",
      ],
    },
    {
      job: "Core Team Member",
      company: "Nitrushav & Innovision",
      date: "2022 - 2024",
      responsibilities: [
        "I was the part of Event Management Team in Innovision, the Tech Fest of NITR",
        "I was the part of Travelling and Accomodation in Nitrushav, the Cultural Fest of NITR",
        "I have lead a team of 30+ members and have organized the events successfully",
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
                  <div>
                    <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
                  </div>
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
