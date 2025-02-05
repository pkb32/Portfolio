import React from 'react'
import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TbBrandLeetcode } from "react-icons/tb";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/prayash-kumar-behera-89b409240/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/pkb32?tab=repositories" Icon={FiGithub} />
      <SingleContactSocial link="https://leetcode.com/u/pkb32/" Icon={TbBrandLeetcode} />
    </div>
  );
};
export default ContactSocial
