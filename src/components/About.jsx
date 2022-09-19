import React from "react";
import { RoughNotation } from "react-rough-notation";
import ".././App.css";
const About = ({sendData}) => {
  return (
    <div
      name="about"
      className="  text-slate-900 dark:text-slate-300  bg-[#F3F4F5] dark:bg-slate-900"
    >
      <div className="p-4 container mx-auto flex flex-col justify-center w-full h-full">

        <p className="text-4xl font-extrabold text-slate-900 dark:text-white">
        <RoughNotation type="underline" animationDelay={1000} strokeWidth={5} show={sendData} color="#457b9d">
            About
            </RoughNotation>
          </p>

        <p className="text-xl mt-10">
          Hi! I'm based in Winnipeg, Manitoba and currently I work as a Product Support Specialist. My passion for web development started back in 2017 when I decided to try editing a Shopify theme — turns out hacking together a simple add to cart button taught me a lot about HTML & CSS! I’ve always been curious about technology and how things work. Figuring things out is what inspired me to learn how to code.
        </p>
        
       
        <br />

        <p className="text-xl">
        I love bringing new ideas to life so I code both the front-end and the back-end. In particular, I enjoy the sense of pride and accomplishment when combining everything into a complete project.
        </p>

        <br />
        <p className="text-xl " >Here is my <a className="dark:text-black"  href="/resume.pdf"                                     target="_blank"
                                    rel="noreferrer"> <RoughNotation  type="highlight" animationDelay={1000} padding={5}  show={true} color="#ffd54f">
            resume
            </RoughNotation></a> in case you want to have a look.</p>
      </div>
      
    </div>
  );
};

export default About;