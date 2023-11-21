import React from "react";
import profile from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";
import { motion } from "framer-motion";
import { fadeIn } from "./../variants";

const About = () => {
  const downloadResume = () => {
    // using Java Script method to get PDF file
    fetch(resume).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Yasir Raees Khan Resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="section" id="about">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="container backdrop-blur-sm md:p-12 z-10 text-center lg:text-left flex flex-col gap-14 lg:flex-row justify-center items-center mx-auto"
      >
        {/* text */}
        <div>
          <div className="h2 leading-tight text-accent">
            <h2>About Me</h2>
          </div>

          <p className="max-w-sm mb-16">
            I'm a MERN stack developer with 2 years of React.JS and have
            completed my Bachelors in Computer Science, persuing my career as a
            professional Software Engineer. While primarily being a Frontend
            developer, I also have experience with Node.JS, Express, MySql and
            Mongo.
          </p>

          <button
            onClick={downloadResume}
            className="btn btn-lg lg:text-[20px]"
          >
            Download Resume
          </button>
        </div>

        {/* image */}
        <img className=" w-0 md:w-2/6 " alt="Profile" src={profile} />
      </motion.div>
    </div>
  );
};

export default About;
