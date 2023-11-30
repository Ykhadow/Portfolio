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
    <div className="section p-4" id="about">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="container bg-neutral-800/60 text-white backdrop-blur-sm p-12 z-10 text-center mx-auto"
      >
        {/* text */}
        <div className="flex flex-col items-center gap-8">
          <div className="h2 text-6xl leading-tight font-thin ">
            <h2>About Me</h2>
          </div>

          {/* image */}
          <img className=" w-0 md:w-1/6 " alt="Profile" src={profile} />

          <p className="max-w-lg text-xl  text-gray-400 ">
            As a MERN stack developer with two years of experience in React.js
            and a Bachelor's degree in Computer Science, I am pursuing a career
            as a professional Software Engineer. While primarily focusing on
            frontend development, I have hand's on experience with Node.js,
            Express, MySQL, and MongoDB, and am always ready to take on new
            challenges.
          </p>

          <button
            onClick={downloadResume}
            className="hover:text-black border mt-4 border-gray-400 border-opacity-40 hover:bg-white py-3 px-8 duration-200 lg:text-[20px]"
          >
            Download Resume
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
