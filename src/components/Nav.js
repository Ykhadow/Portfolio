import React from "react";

import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div
          className="w-full  bg-black/20 h-[70px] lg:h-[96px] backdrop-blur-2xl rounded-full 
        max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50  items-center duration-200"
        >
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            // offset={-100}
            to="home"
            className="cursor-pointer w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] flex items-center justify-center hover:text-white"
          >
            <BiHomeAlt />
          </Link>

          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="about"
            className="cursor-pointer w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] flex items-center justify-center hover:text-white"
          >
            <BiUser />
          </Link>

          {/* <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="services"
            className="cursor-pointer w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] flex items-center justify-center hover:text-white"
          >
            <BsClipboardData />
          </Link> */}

          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="work"
            className="cursor-pointer w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] flex items-center justify-center hover:text-white"
          >
            <BsBriefcase />
          </Link>

          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="contact"
            className="cursor-pointer w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] flex items-center justify-center hover:text-white"
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
