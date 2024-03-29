import React from 'react'
import { RoughNotation } from "react-rough-notation";

import aws from "../assets/icons/AWS.png";
import supabase from "../assets/icons/supabase.png";
import javascript from "../assets/icons/js.png";
import reactImage from "../assets/icons/react.png";
import graphql from "../assets/icons/graphql.png";
import nextjs from "../assets/icons/nextjs.png";
import tailwind from "../assets/icons/tailwind.png";
import typescript from "../assets/icons/typescript.png";
import firebase from "../assets/icons/firebase.png"
import mongodb from '../assets/icons/mongodb.png';
const Skills = () => {

    const skills = [
        {
          id: 1,
          src: reactImage,
        },
        {
          id: 2,
          src: javascript,
        },
        {
          id: 3,
          src: typescript,
        },
        {
          id: 4,
          src: nextjs,
        },
        {
          id: 5,
          src: graphql,
        },
        {
          id: 6,
          src: aws,
        },
        {
          id: 7,
          src: supabase,
        },
        {
          id: 8,
          src: tailwind,
        },
        {
            id: 9,
            src: firebase,
          },
          {
            id: 10,
            src: mongodb,
          },
      ];

      
      
  return (
    <div
    name="skills"
    className=' pb-12  text-gray-900 dark:text-white  bg-[#F3F4F5] dark:bg-slate-900'
  >
    <div className="p-4 text-black dark:text-white container mx-auto">
      <div>
        
        <p className="text-4xl font-extrabold text-slate-900 dark:text-white inline">
        <RoughNotation type="underline" animationDelay={1000} strokeWidth={7} show={true} color="#ff595e">
            Skills
            </RoughNotation>
        </p>
        <p className="py-6 text-xl">These are the technologies I've worked with and learning something new every other day!</p>
        
      </div>
      </div>

    <section className=''>
    <div className="center"></div>
    <div className='container mx-auto'>
      <div
        className='grid grid-cols-5 md:grid-cols-10 md:grid-flow-col gap-y-10 '
      >
        {skills.map((skill, index) => {
          return (
            <div
              className='flex items-center justify-center '
              key={index}
            >
              <img className='h-10 md:h-16 lg:h-20' src={skill.src} alt='' />
            </div>
          );
        })}
      </div>
    </div>
  </section>
  </div>

)} 
export default Skills