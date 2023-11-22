import React from "react";

// components
import Banner from "./components/Banner";
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
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-b from-black via-[#060003] to-[#090009] bg-no-repeat overflow-hidden font-secondary">
        {/* <Header /> */}
        <Banner />
        <Nav />
        <About />
        {/* <Services /> */}
        <Work />
        <Contact />
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
