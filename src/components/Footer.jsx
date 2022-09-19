import React from 'react'
import {FaGithub, FaLinkedinIn } from "react-icons/fa";
import {FiMail} from 'react-icons/fi'
import { RiFilePaper2Line } from "react-icons/ri"
import {ImYoutube} from 'react-icons/im'
const Footer = () => {
  return (
    <div className='text-gray-900 dark:text-white  bg-[#F3F4F5] dark:bg-slate-900'>
        <footer class="text-center">
  <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto space-y-6">
      <div class="flex justify-center space-x-6">
        <a
          class="text-sky-600 hover:text-opacity-75 text-3xl"
          href="https://linkedin.com/in/azms"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaLinkedinIn />
        </a>

        <a
          class="text-gray-900 dark:text-white hover:text-opacity-75 text-3xl"
          href="https://github.com/AzmSurov"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
         <FaGithub />
        </a>
        <a
          class="text-blue-400	 hover:text-opacity-75 text-3xl"
          href="mailto:azm.surov@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
         <FiMail />
        </a>
        <a
          class="text-rose-700		 hover:text-opacity-75 text-3xl"
          href="https://www.youtube.com/channel/UCFL4w1Jz_LcIC62qyIKniFw"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
         <ImYoutube />
        </a>

      </div>


<p class="text-lg font-medium"> Made with ❤️️ by <span className='  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-lg'>Azm Mohibul Haque Surov</span> &copy; {new Date().getFullYear()}</p>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer