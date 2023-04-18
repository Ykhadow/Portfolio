import React from "react";

import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = (props) => {
  return (
    <div className="section" id="home">
      <div className="container mx-auto bg-white z-10 ">
        <div>
          <div className="flex-1  text-center font-secondary ">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              // viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] mb-4 font-bold leading-[0.8] lg:text-[110px]"
            >
              Yasir Raees Khan
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              // viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold 
            uppercase leading-[1]"
            >
              <span className=" text-black"></span>
              <TypeAnimation
                sequence={[
                  "React.js",
                  3000,
                  "React Native",
                  3000,
                  "Node.JS",
                  3000,
                  "Javascript",
                  3000,
                  "Tailwind",
                  3000,
                  "Bootstrap",
                  3000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              // viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto"
            >
              A frontend developer that uses React.JS and React Native give your
              projects beautiful, responsive, and functional UI.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto"
            >
              <Link to="contact" smooth={true}>
                <button className="btn btn-lg lg:text-[20px]">
                  Contact me
                </button>
              </Link>
              {/* <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a> */}
            </motion.div>

            {/* social */}
            {/* <a href="#">
              <FaYoutube />
            </a>

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaDribbble />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
