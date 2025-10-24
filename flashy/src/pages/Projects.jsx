import React from "react";

const Projects = () => {
  return (
    <div className="p-4">
      <div className=" pt-[45vh]">
        <h1 className="text-black text-[9vw] font-[font2] ">PROJECTS</h1>
      </div>
      <div className="-mt-10">
        <div className=" w-full h-[425px] flex gap-4 mb-4 ">
          <div className="w-1/2 transition-all hover:rounded-[50px] relative overflow-hidden h-full ">
            <img className="h-full w-full object-cover" src="https://i.pinimg.com/1200x/6b/11/5f/6b115f86a20f33a70c399821bd562894.jpg" alt="" />
            <div className="absolute flex items-center justify-center top-0 h-full w-full left-0 bg-black/10 ">
              <h2 className="font-[font2] text-4xl rounded-full pt-3 px-4 text-white border-white border-4">WATCH NOW</h2>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
