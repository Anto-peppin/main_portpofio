import React from "react";
import Skill from "./Skill";
import { Vortex } from "./bg";

const Skills = () => {
  const data = [
    
    [{ title: "Programming", icon: ['html.webp','css.webp','js.webp'],name:['HTML','CSS','JAVASCRIPT'] }],
        [{ title: "Devops Tools", icon: ['git.webp','git-hub.webp','postman.webp'],name:['GIT','GITHUB','POSTMAN'] }],
    [{ title: "Data Base", icon: ['mongo-db.webp'],name:['MONGO-DB'] }],
    [{ title: "IDEs", icon: ['visual-studio-code.webp','js1.webp'],name:['VS-CODE','NODE-JS'] }],
    [{ title: "Libraries", icon: ['react.webp','tailwind.webp','npm.webp','js.webp'],name:['REACT','TAILWIND','NPM','EXPRESS'] }],

  ];

  return (
     <div className="w-full h-full  relative overflow-hidden" id="skill">
          <Vortex
            backgroundColor="black"
            rangeY={800}
            particleCount={500}
            baseHue={120}
            className="px-4 md:px-10 w-full py-5 min-h-[calc(100vh - 100px )] relative  flex flex-col gap-3 border-t-3 border-dashed"
          >
              <h2 className="flex flex-col gap-1 items-center font-bold text-5xl sm:text-5xl  bg-linear-to-t from-purple-500 to-blue-400  p-1 bg-clip-text text-transparent ">
        Skills<span className="text-2xl font-medium text-white  text-center">Fuel Behind My Project</span>
      </h2>

    <div className="w-full flex flex-wrap gap-5 mb-3 justify-center">
         {
        data.map((val,ind)=>(
             <Skill key={ind} card={val} />
        ))
     }
    </div>
     </Vortex>
    </div>
  );
};

export default Skills;
