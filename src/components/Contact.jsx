import React from "react";
const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full pb-6  text-gray-900 dark:text-white  bg-[#F3F4F5] dark:bg-slate-900"
    >
      <div className="flex flex-col p-4 container mx-auto justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-extrabold text-slate-900 dark:text-white inline border-b-4 border-[#ffca3a]">

            Contact

          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
        <div className="contact"></div>
          <form
            action="https://getform.io/f/7e5e51a3-f89a-43c3-b270-8be6baef5b6e"
            method="POST"
            className=" flex flex-col w-full md:w-1/2 "
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-gray-400 border-2 rounded-md text-gray-900 dark:text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-gray-400  border-2 rounded-md text-gray-900 dark:text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-gray-400  border-2 rounded-md text-gray-900 dark:text-white focus:outline-none"
            ></textarea>

            <button className="mt-4 relative text-sm font-medium  text-gray-500 active:text-white group focus:outline-none focus:ring">
            <span class="absolute inset-0 border-gray-400 rounded-md border-2"></span>
  <span class="block  px-12 py-3 rounded-md transition-transform bg-white border border-current group-hover:-translate-x-1 group-hover:-translate-y-1">
    Let's Talk
  </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;