import React from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { FaTimes, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";
import { useState } from "react";
import { RoughNotation } from "react-rough-notation";
import icon from "../assets/icons/A2.png"
const Navbar = ({ setSendData }) => {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "portfolio",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  const [nav, setNav] = useState(false);
  return (
    <div>
      <header className="mb-4">
        <div className="flex justify-between items-center px-4 py-6">
          <div className="w-10 ">
          <div class="relative inline-flex group ">
                                  <div class="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#19A186] to-[#F2CF43]  blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

                                  <a

                                    class={"relative inline-flex items-center justify-center px-4 py-2 text-2xl  font-extrabold text-white transition-all duration-200 bg-gray-900 font-pj  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:opacity-90"}
                                    target="_blank"
                                    href="/"

                                  >
                                    A
                                  </a>
                                </div>
            
          </div>
          <div className="flex justify-around">
            <ul className="hidden md:flex space-x-5">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="text-lg px-3 cursor-pointer capitalize font-medium text-gray-900 "
                >
                  <Link to={link} smooth duration={500}>
                    <RoughNotation
                      type="underline"
                      brackets={["left", "right"]}
                      strokeWidth={2}
                      show={true}
                      color="#8ac926"
                      animationDelay={500}
                    >
                      {link}
                    </RoughNotation>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:flex space-x-5 text-3xl border-gray-100 border-x">
            <a
              href="https://github.com/AzmSurov"
              target="_blank"
              rel="noreferrer"
              c
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/azms"
              target="_blank"
              rel="noreferrer"
              class="text-sky-600 hover:text-opacity-75"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div
            onClick={() => {
              setNav(!nav);
              setSendData(false);
            }}
            className="cursor-pointer pr-4 z-10 text-gray-600 md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <BiMenuAltRight size={50} />}
          </div>

          {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white text-black">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                  <Link
                    onClick={() => {
                      setNav(!nav);
                    }}
                    to={link}
                    smooth
                    duration={500}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {!nav &&           setSendData(true)}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
