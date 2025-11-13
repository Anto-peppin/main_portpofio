import React from "react";
import { Vortex } from "./bg";
import TypeWritter from "./TypeWritter";
import { BiDownload } from "react-icons/bi";

const Home = () => {
  const arr = ['https://github.com/Anto-peppin','https://www.instagram.com/peppin_1969/','www.linkedin.com/in/peppin03','antopeppin22@gmail.com']
  return (

    <div className="w-full h-full overflow-hidden relative " id="home">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}

        className="flex md:flex-row gap-4 py-5 sm:py-20 px-4 md:px-10 w-full min-h-[93vh] h-full  items-center justify-between"
      >
        {/* Left Section */}
        <div className="w-full py-6 sm:py-none md:w-[60%] flex justify-center items-center h-full backdrop-blur-lg sm:backdrop-blur-none">
          <div className="w-[95%] md:w-full lg:w-[80%] p-3 flex gap-3 flex-col items-start ">
            <div className="text-[12px] sm:text-md font-bold text-white bg-blue-400/20 rounded px-4 py-1 inline">
              ANTO PEPPIN
            </div>

            <h2 className="text-white font-bold text-4xl sm:text-5xl">
              HAY! I'M PEPPIN
            </h2>

            <div className="flex gap-2 items-center font-bold bg-linear-to-r from-blue-400 to-violet-500 text-transparent bg-clip-text text-2xl sm:text-3xl">
              <h2>I'M a </h2> <TypeWritter />
            </div>

            <p className="text-[14px] sm:text-[16px] text-white/80 w-full sm:w-[90%] text-justify">
              <span className="font-bold text-[14px]">I</span>'m a passionate
              and detail-oriented Fullstack developer, focused on building
              responsive, user-friendly web interfaces. I specialize in HTML,
              CSS, JavaScript, React, Node.js, Express, and MongoDB. I'm always
              eager to learn and explore new technologies. As a fresher, I bring
              enthusiasm, adaptability, and a strong foundation in modern web
              development practices.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2 md:gap-4 mt-2">
              {["git hub", "instagram", "linkedin", "mail"].map((icon, ind) => (
              <div className="tooltip" key={ind}>
  <div className="tooltip-content">
    <div className="animate-bounce text-orange-400 text-xl font-medium">{icon}</div>
  </div>
                   <a href={icon == 'mail' ?`mailto:${arr[ind]}`:arr[ind]} className="w-fit h-fit " target="_blank">
                      <img
                        className="rounded-[20px_0_20px_20px] cursor-pointer relative p-1 border-white border-2 w-13 h-13 "
                        src={`./${icon}.gif`}
                        alt={icon}
                      />
                   </a>
                    </div>
                
              ))}
            </div>

            {/* Button */}
            <button className="mt-3  font-bold text-sm px-4 py-2 bg-linear-to-r from-blue-600 to-violet-600 text-white rounded shadow-md cursor-pointer flex items-center gap-2">
              Download CV <BiDownload />
            </button>
          </div>
        </div>




<div className="hidden relative md:flex md:w-[38%] h-full justify-start items-center rounded-full">
    <img src='./crack.gif' className='absolute -top-5 -left-5  w-[100px] h-[100px] '  />
    {/* <img src='./crack.gif' className='absolute -top-5 right-[10%] w-[100px] h-[100px]  '  /> */}
  <div className=" relative p-2  overflow-hidden rounded-full mask mask-decagon">
    

    {/* ROTATING WRAPPER */}
    <div className="absolute inset-0 flex justify-center items-center animate-spin-slow blur-4xl">
      <div className="absolute w-[50px] h-[153%] bg-green-500"></div>
      <div className="absolute w-[50px] h-[153%] bg-red-500 rotate-45"></div>
      <div className="absolute w-[50px] h-[153%] bg-yellow-500 rotate-90"></div>
      <div className="absolute w-[50px] h-[153%] bg-blue-500 -rotate-45"></div>
    </div>

    {/* CENTER IMAGE */}
   
      <img src="./my1.png" className="border mask mask-decagon w-[322px] h-[322px] relative bg-black border-white rounded-full" alt=""/>
    

  </div>
</div>



      </Vortex>
    </div>
  );
};

export default Home;
