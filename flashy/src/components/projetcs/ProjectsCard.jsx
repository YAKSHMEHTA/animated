import React from 'react'

const ProjectsCard = (props) => {
  return (
    <>
          <div className="w-1/2 transition-all group hover:rounded-[50px] relative overflow-hidden h-full ">
            <img className="h-full w-full object-cover" src={props.image1} alt="" />
            <div className="absolute opacity-0 transition-all group-hover:opacity-100 flex items-center justify-center top-0 h-full w-full left-0 bg-black/10 ">
              <h2 className="font-[font2] text-4xl rounded-full pt-3 px-4 text-white border-white border-4">WATCH NOW</h2>
            </div>
          </div>
          <div className="w-1/2 transition-all group hover:rounded-[50px] relative overflow-hidden h-full ">
            <img className="h-full w-full object-cover" src={props.image2} alt="" />
            <div className="absolute opacity-0 transition-all group-hover:opacity-100 flex items-center justify-center top-0 h-full w-full left-0 bg-black/10 ">
              <h2 className="font-[font2] text-4xl rounded-full pt-3 px-4 text-white border-white border-4">WATCH NOW</h2>
            </div>
          </div>
    </>
    
  )
}

export default ProjectsCard
