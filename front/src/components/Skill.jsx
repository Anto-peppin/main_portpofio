import React from "react";

const Skill = ({ card: [{ title, icon,name }] }) => {
  return (
    <div className="min-w-[200px] sm:min-w-[250px] w-[45%] h-fit border rounded-xl text-white border-white/90 shadow-[inset_2px_2px_3px_white,inset_-2px_-2px_3px_black] backdrop-blur-sm">
      <div className="flex px-2 py-1 gap-2 border-b ">
        <div className="flex gap-1 items-center">
          <div className="status status-error animate-bounce"></div>
          <div className="status status-warning animate-bounce"></div>
          <div className="status status-accent animate-bounce"></div>
        </div>
        <p className="font-bold text-lg">{title}</p>
      </div>
      <div className="p-2 py-4 flex flex-wrap gap-3.5 justify-center">
        {icon.map((val, ind) => (
          <div key={ind} className="tooltip ">
            <div className="tooltip-content bg-white">
              <div className="animate-bounce text-orange-400 text-lg md:text-xl font-medium md:font-bold">
                {name[ind]}
              </div>
            </div>
            <img
              
              className="w-15 sm:w-20 hover:rotate-8 transition-all duration-300 ease-in-out cursor-pointer "
              src={`./${val}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
