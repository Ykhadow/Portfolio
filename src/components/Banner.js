import React from "react";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = (props) => {
  return (
    <div className="section" id="home">
      <div className="container mx-auto text-white backdrop-blur-sm p-12 z-10 ">
        <div>
          <div className="flex-1 text-center ">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="text-[55px] mb-4 font-bold leading-[0.8] lg:text-[110px]"
            >
              Yasir Raees Khan
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="mb-6 text-[36px] lg:text-[60px] font-thin 
            uppercase leading-[1]"
            >
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
                  "Material UI",
                  3000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="mb-8 text-xl text-gray-400 max-w-lg mx-auto"
            >
              A frontend developer that uses React.JS and React Native to give
              your projects beautiful, responsive, and functional UI.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto"
            >
              <Link to="contact" smooth={true}>
                <button className="hover:text-black hover:drop-shadow-glow border mt-4 border-gray-400 border-opacity-40 hover:bg-white py-3 px-8 duration-200 lg:text-[20px]">
                  Contact me
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
