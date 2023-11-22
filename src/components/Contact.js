import React from "react";
import { motion } from "framer-motion";
import { BiPhoneCall, BiEnvelope } from "react-icons/bi";
import { TfiGithub, TfiLinkedin } from "react-icons/tfi";
import { Tooltip } from "react-tooltip";

import { fadeIn } from "./../variants";

const Contact = () => {
  return (
    <div className="section md:text-center " id="contact">
      <div className="container flex flex-col gap-3 mx-auto text-white min-w-fit">
        {/* text */}

        <div className="h2 text-6xl leading-tight font-thin ">
          <motion.h2
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.h2>
        </div>

        <div className="flex flex-col text-gray-400 items-center">
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="max-w-sm  "
          >
            If you have any questions, comments, or opportunities for
            collaboration, I would love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-12 md:gap-28 p-12 m:p-0">
          <div
            className="flex flex-col backdrop-blur-sm items-center p-10  duration-300 cursor-pointer border border-opacity-30 border-white hover:bg-white hover:text-black z-10"
            data-tooltip-id="tooltip"
            onClick={() => navigator.clipboard.writeText("+923041296864")}
          >
            <BiPhoneCall size={40} className="mb-4" />
            <h4 className="h4">Phone</h4>
            <p className="font-light">+92 3041296864</p>
          </div>

          <div
            className="flex flex-col backdrop-blur-sm items-center p-10  duration-300 cursor-pointer border border-opacity-30 border-white hover:bg-white hover:text-black z-10"
            data-tooltip-id="tooltip"
            onClick={() =>
              navigator.clipboard.writeText("khanyasirraees30@gmail.com")
            }
          >
            <BiEnvelope size={40} className="mb-4" />
            <h4 className="h4">Email</h4>
            <p className="font-light">khanyasirraees30@gmail.com</p>
          </div>

          <a
            className="flex flex-col backdrop-blur-sm items-center p-10  duration-300 cursor-pointer border border-opacity-30 border-white hover:bg-white hover:text-black z-10"
            href="https://www.linkedin.com/in/yasir-raees-khan-3444a5222/"
            target="_blank"
            rel="noreferrer"
          >
            <TfiLinkedin size={40} className="mb-4" />
            <h4 className="h4">LinkedIn</h4>
            <p className="font-light">Yasir Raees Khan</p>
          </a>

          <a
            className="flex flex-col backdrop-blur-sm items-center p-10  duration-300 cursor-pointer border border-opacity-30 border-white hover:bg-white hover:text-black z-10"
            href="https://github.com/Ykhadow"
            target="_blank"
            rel="noreferrer"
          >
            <TfiGithub size={40} className="mb-4 self-center" />
            <h4 className="h4">Github</h4>
            <p className="font-light">Ykhadow</p>
          </a>

          <Tooltip
            id="tooltip"
            content="Copied!"
            delayShow={30}
            openOnClick={true}
            noArrow={true}
            // afterShow={() => setTimeout(() => Tooltip.setIsOpen(false), 30)}
            place="bottom"
            offset={50}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
