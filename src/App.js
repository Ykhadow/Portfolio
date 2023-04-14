import React from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { particleConfig } from "./config";

const App = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
        {/* <Header /> */}
        <Banner />
        <Nav />
        <About />
        {/* <Services /> */}
        <Work />
        <Contact />
        {/* <div className="h-[4000px]"></div> */}
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleConfig()}
      />
    </>
  );
};

export default App;
