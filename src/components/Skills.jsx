import React from 'react'

import html from "../assets/icons/Html5.png";
import css from "../assets/icons/css.png";
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
          src: html,
        },
        {
          id: 2,
          src: css,
        },
        {
          id: 3,
          src: javascript,
        },
        {
          id: 4,
          src: typescript,
        },
        {
          id: 5,
          src: reactImage,
        },
        {
          id: 6,
          src: nextjs,
        },
        {
          id: 7,
          src: graphql,
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
    className=' pb-12'
  >
    <div className="p-4 text-black">
      <div>
        <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
          Skills
        </p>
        <p className="py-6">These are the technologies I've worked with</p>
      </div>
      </div>

    <section className=''>
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