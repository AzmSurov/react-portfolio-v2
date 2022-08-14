import React from 'react'

import { BiMenuAltRight } from "react-icons/bi";
import { FaTimes, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";
import { useState } from "react";
import { RoughNotation } from "react-rough-notation";
const Navbar = () => {

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
              <header className="pt-4 mb-4">
        <div className="flex justify-between items-center px-4 py-6">
          <div className="text-3xl font-signature"><p>
            Azm
</p></div>
          <div className="flex justify-around">
            <ul className="hidden md:flex space-x-5">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="text-lg px-3 cursor-pointer capitalize font-medium text-gray-900 "
                >
                  <Link to={link} smooth duration={500}>
                  <RoughNotation type='underline' brackets={["left", "right"]} strokeWidth={2}  show={true} color="#57cc99">
            {link}
          </RoughNotation>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='hidden md:flex space-x-5 text-3xl border-gray-100 border-x'>
              <a href='https://github.com/AzmSurov' target="_blank" rel="noreferrer">
<FaGithub/>
              </a>
              <a href='https://linkedin.com/in/azms' target="_blank" rel="noreferrer">
<FaLinkedinIn/>
              </a>
          </div>
          <div
            onClick={() => setNav(!nav)}
            className="curson-pointer pr-4 z-10 text-gray-600 md:hidden"
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
                    onClick={() => setNav(!nav)}
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
        </div>
      </header>
    </div>
  )
}

export default Navbar