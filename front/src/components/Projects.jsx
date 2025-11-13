import React, { useEffect, useState } from "react";
import Carousal from "./Carousal";
import axios from "axios";

import Slider1 from "./Slider1";
import { Vortex } from "./bg";
const Projects = () => {
  const [project, setProject] = useState([]);

  const ProApi = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_PROJECTS}`);
      setProject(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    ProApi();
  }, []);

  return (
    <div className="w-full min-h-fit overflow-hidden relative" id="project">
      <Vortex
        className="w-full min-h-screen py-5 h-full flex gap-3 flex-col border-t-3 border-dashed"
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
      >
      <div className='w-full min-h-screen h-full flex flex-col gap-5 justify-center items-center'>
          <h2 className=" flex flex-col items-center gap-1 font-bold text-5xl sm:text-6xl bg-linear-to-t from-purple-500 to-blue-400  bg-clip-text text-transparent">
          PROJECTS <span className="font-medium text-white text-2xl text-center">A Showcase of shipped thoughts and sleepless nights</span>
        </h2>

        <div className="w-full h-full flex justify-center px-5 py-2">
          <div className="w-[95%] sm:w-[90%] relative rounded-xl ">
            <Slider1 data={project} />
          </div>
        </div>
      </div>
      </Vortex>
    </div>
  );
};

export default Projects;
