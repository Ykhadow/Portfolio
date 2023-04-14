import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import img1 from "../assets/portfolio.png";
import img2 from "../assets/portal.png";
import Card from "./Card";

const Work = () => {
  return (
    <section className="section " id="work">
      <div className="text-center lg:text-left container  mx-auto">
        {/* text */}

        <div className="h2 leading-tight text-accent">
          <motion.h2
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
          >
            My Latest Work
          </motion.h2>
          <p className="max-w-sm mb-16"></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-fr p-12 md:p-0 justify-center md:justify-start gap-6">
          <Card
            image={img1}
            heading={"Personal Portfolio"}
            description={"My personal portfolio. You are here!"}
            link={"https://github.com/Ykhadow/Portfolio"}
          />
          <Card
            image={img2}
            heading={"Dashboard"}
            description={
              "A responsive dashboard app with role based authentication, graphs, and datatables"
            }
            link={"https://github.com/Ykhadow/Portal-1"}
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
