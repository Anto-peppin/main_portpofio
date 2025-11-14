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

        className="flex md:flex-row gap-4 py-5 md:py-3 sm:py-20 px-4 md:px-10 w-full min-h-[93vh] h-full  items-center justify-between"
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

            <p className="text-[14px] sm:text-[15px] text-white/80 w-full sm:w-[95%] text-justify">
              <span className="font-bold text-[14px]">I</span>
           'm a passionate MERN Stack Developer with a strong foundation in MongoDB, Express.js, React.js, and Node.js. I enjoy building responsive and user-friendly web applications, integrating front-end and back-end logic smoothly. I have good hands-on experience with JavaScript, HTML, CSS, and Tailwind CSS, along with knowledge of RESTful APIs and deployment on platforms like Netlify and Vercel. I have successfully completed a certified MERN Stack course from Error Makes Clever (EMC).
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
            <a href='./Anto-resume.pdf' download='Anto-resume' className="mt-3  font-bold text-sm px-4 py-2 bg-linear-to-r from-blue-600 to-violet-600 text-white rounded shadow-md cursor-pointer flex items-center gap-2">
              Download CV <BiDownload />
            </a>
          </div>
        </div>




<div className="hidden relative md:flex md:w-[38%] h-full justify-start items-center rounded-full">
    <img src='./crack.gif' className='absolute -top-5 -left-5  w-[100px] h-[100px] '  />
    {/* <img src='./crack.gif' className='absolute -top-5 right-[10%] w-[100px] h-[100px]  '  /> */}
  {/* <div className=" relative p-2  overflow-hidden rounded-full mask mask-decagon "> */}
    

    {/* ROTATING WRAPPER */}
    {/* <div className="absolute inset-0 flex justify-center items-center animate-spin-slow blur-4xl">
      <div className="absolute w-[50px] h-[153%] bg-green-500"></div>
      <div className="absolute w-[50px] h-[153%] bg-red-500 rotate-45"></div>
      <div className="absolute w-[50px] h-[153%] bg-yellow-500 rotate-90"></div>
      <div className="absolute w-[50px] h-[153%] bg-blue-500 -rotate-45"></div>
    </div> */}

    {/* CENTER IMAGE */}
   
      <img src="./my1.png" className=" mask drop-shadow-[0_0_3px_white] hover:drop-shadow-[0px_0px_6px_white] mask-decagon w-[322px] h-[322px] relative " alt=""/>
    

  {/* </div> */}
</div>



      </Vortex>
    </div>
  );
};

export default Home;
