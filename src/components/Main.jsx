import React from 'react'
import heroBg from '../assets/bgMain.png'
import '../App.css'
import { Link } from "react-scroll";
const Main = () => {
  return (
    <div >

        <section className="flex flex-col-reverse justify-between lg:flex-row lg:justify-between    lg:space-x-12 m-3">
            
            <div className=' mx-auto w-2/3 lg:w-full sm:py-10'><img className='rounded-2xl shadow-xl'  src={heroBg} /></div>
            <div className='xl:py-10 md:py-6'>
            <h1 className=" lg:text-3xl xl:text-6xl sm:text-4xl text-4xl font-grotesque font-bold tracking-wide  mb-6 leading-10 text-gray-900">
          Hi! I'm <span class="bg-clip-text text-transparent   bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
    Azm Mohibul Haque Surov
  </span> and I'm a Full Stack Developer.

          </h1>
          <p className="leading-7 mb-6 text-gray-900 text-xl">
          I'm a passionate JavaScript Developer focused on efficiency and constant learning. I have created solutions for my clients by improving their web development processes and accomplish their ideas come true, either from the front-end or the back-end mostly using technologies like JavaScript, React, Typescript, Node, Express.js, Firebase & MongoDB.
          </p>
          
          <div id='gone' class=" text-center">
            <div class="relative inline-flex mt-10 group ">
              <div class="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <Link
              to="about"
              smooth
              duration={500}
            >
              <a
                href="www.google.com"
                title=""
                class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Know More
              </a>
              </Link>
            </div>
          </div>

            </div>
        </section>

    </div>
  )
}

export default Main