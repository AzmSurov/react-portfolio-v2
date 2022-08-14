import React from 'react'
import {FaGithub, FaLinkedinIn } from "react-icons/fa";
import {FiMail} from 'react-icons/fi'
import { RiFilePaper2Line } from "react-icons/ri"
import { RoughNotation } from "react-rough-notation";
const Footer = () => {
  return (
    <div>
        <footer class="text-center">
  <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto space-y-6">
      <div class="flex justify-center space-x-6">
        <a
          class="text-sky-600 hover:text-opacity-75 text-4xl"
          href="https://linkedin.com/in/azms"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaLinkedinIn />
        </a>

        <a
          class="text-gray-900 hover:text-opacity-75 text-4xl"
          href="https://github.com/AzmSurov"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
         <FaGithub />
        </a>
        <a
          class="text-rose-600	 hover:text-opacity-75 text-4xl"
          href="mailto:azm.surov@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
         <FiMail />
        </a>
        <a
          class="text-violet-700		 hover:text-opacity-75 text-4xl"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
         <RiFilePaper2Line />
        </a>

      </div>


<p class="text-sm font-medium"> Made with ❤️️ by <RoughNotation type="highlight" show={true} color="#8ac926">Azm Mohibul Haque Surov</RoughNotation> { } &copy; {new Date().getFullYear()}</p>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer