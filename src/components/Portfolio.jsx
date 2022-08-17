import React, { useState } from "react";
import { RoughNotation } from "react-rough-notation";
import unsplashProject from "../assets/projects/fullStack/Unsplash.png";
import memoryGame from "../assets/projects/miniProjects/memoryGame.png"
import mealGenerator from "../assets/projects/miniProjects/MealGenerator.png"
const Portfolio = () => {
  //FullStack Projects
  const fullstack = [
    {
      id: 1,
      src: unsplashProject,
      liveLink: "https://azmsurov.github.io/UnsplashApi/",
      sourceCode: "https://github.com/AzmSurov/UnsplashApi",
      title: "Unsplash API.",
      description:
        "A simply app to display pictures from Unsplash. This mini project makes use of unsplash API to search for and display images based on the search keyword",
      idx: ["HTML", "CSS", "JS"],
    },
    {
      id: 2,
      src: unsplashProject,
      liveLink: "https://azmsurov.github.io/UnsplashApi/",
      sourceCode: "https://github.com/AzmSurov/UnsplashApi",
      title: "fontend",
      description:
        "It is an application that fetches the current exchange rate of different currencies with the help of exchange rates api.",
      idx: ["React", "Typescript"],
    },
    {
      id: 3,
      src: unsplashProject,
      liveLink: "https://azmsurov.github.io/UnsplashApi/",
      sourceCode: "https://github.com/AzmSurov/UnsplashApi",
      title: "fontend",
      description:
        "It is an application that fetches the current exchange rate of different currencies with the help of exchange rates api.",
      idx: ["React", "Typescript"],
    },
    {
      id: 4,
      src: unsplashProject,
      liveLink: "https://azmsurov.github.io/UnsplashApi/",
      sourceCode: "https://github.com/AzmSurov/UnsplashApi",
      title: "fontend",
      description:
        "It is an application that fetches the current exchange rate of different currencies with the help of exchange rates api.",
      idx: ["React", "Typescript"],
    },
  ];
  const miniProjects = [
    {
      id: 1,
      src: memoryGame,
      liveLink: "https://memory-game-react-js.netlify.app/",
      sourceCode: "https://github.com/AzmSurov/magic-memory",
      title: "Memory Game",
      description:
        "A simple Memory Puuzzle game. Flip all of the matching tiles to win the game!",
      idx: ["React"],
    },
    {
        id: 2,
      src: unsplashProject,
      liveLink: "https://azmsurov.github.io/UnsplashApi/",
      sourceCode: "https://github.com/AzmSurov/UnsplashApi",
      title: "Unsplash API",
      description:
        "A simple app to display pictures from Unsplash. This mini project makes use of unsplash API to search for and display images based on the search keyword",
      idx: ["HTML", "CSS", "JS", "API"],
    },
    {
      id: 3,
    src: mealGenerator,
    liveLink: "https://beamish-phoenix-d80e8c.netlify.app/",
    sourceCode: "https://github.com/AzmSurov/random-meal-generator",
    title: "Random Meal Generator",
    description:
      "An app that fetches data from MealDB which displays a random meal on load.",
    idx: ["React", "Tailwind", "API"],
  }
  ];

  const [openTab, setOpenTab] = useState(1);
const [highlights, setHighlights] = useState(true)
const [highlightsSecond, setHighlightsSecond] = useState(false)
const [highlightsThird, setHighlightsThird] = useState(false)
  return (
    <div>
      <div name="portfolio" className="md:h-2/3">
        <div className="p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline">
            <RoughNotation type="underline" animationDelay={1000} strokeWidth={5} show={true} color="#c8b6ff">
            Portfolio
            </RoughNotation>
            </p>
            <p className="pt-6 text-xl" >Check out some of my featured work! </p>
          </div>
        </div>

        <div className="flex flex-wrap ">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <div
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block cursor-pointer leading-normal "
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                    setHighlights(true);
                    setHighlightsSecond(false);
                    setHighlightsThird(false);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  <RoughNotation type="underline" animationDelay={500} strokeWidth={5} show={highlights} color="#8ac926">
            Fullstack
            </RoughNotation>
                </div>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <div
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block cursor-pointer leading-normal "
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                    setHighlightsSecond(true);
                    setHighlights(false)
                    setHighlightsThird(false)
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  <RoughNotation type="underline" animationDelay={500} strokeWidth={5} show={highlightsSecond} color="#ff595e">
            Front-end
            </RoughNotation>
                </div>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <div
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block cursor-pointer leading-normal "
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                    setHighlightsThird(true);
                    setHighlights(false);
                    setHighlightsSecond(false);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                   <RoughNotation type="underline" animationDelay={500} strokeWidth={5} show={highlightsThird} color="#6a4c93">
            Others
            </RoughNotation>
                </div>
              </li>
            </ul>
            <div className="relative flex flex-row min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    {" "}
                    {fullstack.map(
                      ({
                        id,
                        src,
                        liveLink,
                        sourceCode,
                        title,
                        description,
                        idx,
                      }) => (
                        <div key={id} className="py-5">
                          <div class="grid grid-cols-1 overflow-hidden border border-gray-100 rounded-lg group sm:grid-cols-3">
                            <div class="relative">
                              <img
                                class="absolute inset-0 object-cover w-full h-full"
                                src={src}
                                alt=""
                              />
                            </div>

                            <div class="p-8 sm:col-span-2">
                              <ul class="flex space-x-1">
                                {idx.map((element, idx) => (
                                    <RoughNotation type="box" animationDelay={500} strokeWidth={1} show={highlights} color="#6a4c93">
                                  <li class="inline-block px-6 py-1 text-xs font-semibold text-black rounded-full">
                                    {element}
                                  </li>
                                  </RoughNotation>
                                ))}
                              </ul>

                              <p class="mt-4 font-bold">{title}</p>

                              <p class="mt-2 text-sm text-gray-600">
                                {description}
                              </p>

                              <br />
                              <div className="flex justify-between lg:justify-start gap-4 pt-10">
                                <a
                                  class="px-4 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                  href={sourceCode}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-5 h-5 text-white fill-current text-center"
                                  >
                                    <title>GitHub icon</title>
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                  </svg>
                                </a>
                                <div class="relative inline-flex group ">
                                  <div class="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

                                  <a
                                    href={liveLink}
                                    class="relative inline-flex items-center justify-center px-4 py-2 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    Demo
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <p>
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas.
                      <br />
                      <br />
                      Dynamically innovate resource-leveling customer service
                      for state of the art customer service.
                    </p>
                  </div>
                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link3"
                  >
                                        {miniProjects.map(
                      ({
                        id,
                        src,
                        liveLink,
                        sourceCode,
                        title,
                        description,
                        idx,
                      }) => (
                        <div key={id} className="py-5">
                          <div class="grid grid-cols-1 overflow-hidden border border-gray-100 rounded-lg group sm:grid-cols-3">
                            <div class="relative">
                              <img
                                class="absolute inset-0 object-cover w-full h-full"
                                src={src}
                                alt=""
                              />
                            </div>

                            <div class="p-8 sm:col-span-2">
                              <ul class="flex space-x-1">
                                {idx.map((element, idx) => (
                                    <RoughNotation type="box" animationDelay={500} strokeWidth={1} show={highlightsThird} color="#6a4c93">

                                  <li class="inline-block px-5 py-1 text-xs font-semibold text-black">
                                    {element}
                                  </li>
                                  </RoughNotation>
                                ))}
                              </ul>

                              <h5 class="mt-4 font-bold">{title}</h5>

                              <p class="mt-2 text-sm text-gray-600">
                                {description}
                              </p>

                              <br />
                              <div className="flex justify-between lg:justify-start gap-4 pt-10">
                                <a
                                  class="px-4 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                  href={sourceCode}
                                >
                                  <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-5 h-5 text-white fill-current text-center"
                                  >
                                    <title>GitHub icon</title>
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                  </svg>
                                </a>
                                <div class="relative inline-flex group ">
                                  <div class="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

                                  <a
                                    href={liveLink}
                                    title=""
                                    class="relative inline-flex items-center justify-center px-4 py-2 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                    role="button"
                                  >
                                    Demo
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
