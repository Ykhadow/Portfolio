import React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import Card from "./Card";

import portfolioImg from "../assets/portfolio.png";
import portalImg from "../assets/portal.png";
import landingImg from "../assets/landingPage.png";
import redRiding from "../assets/redRiding.png";
import gallery from "../assets/gallery.png";

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

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-fr p-12 md:p-0 justify-center md:justify-start gap-6 ">
          <Card
            image={portfolioImg}
            heading={"Personal Portfolio"}
            description={"My personal portfolio. You are here!"}
            link={"https://github.com/Ykhadow/Portfolio"}
          />
          <Card
            image={landingImg}
            heading={"Basic Landing Page"}
            description={"Landing page for a healthy food site"}
            link={"https://vege-landing-page-301u5anj5-ykhadow.vercel.app/"}
          />
          <Card
            image={portalImg}
            heading={"Dashboard"}
            description={
              "A responsive dashboard app with role based authentication, graphs, and datatables"
            }
            link={"https://portal-1-lbbz9w8d1-ykhadow.vercel.app/"}
          />
          <Card
            image={gallery}
            heading={"Image Gallery"}
            description={"An image gallery that takes photos from a public API"}
            link={"https://image-gallery-d3yzn07yl-ykhadow.vercel.app"}
          />
          <Card
            image={redRiding}
            heading={"Red Riding Hood"}
            description={
              "A flipbook created in react with images and text generated from Stable Diffusion"
            }
            link={"https://red-riding-hood.vercel.app"}
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
