import React, { useRef } from 'react'

const Navbar = () => {

  const greenRef = useRef(null);

  return (
    <div className='flex z-4  fixed top-0 justify-between items-start w-full ' >
        <div className='p-4'>
            <h1><b>YAKSH</b></h1>
        </div>
      
      <div onMouseEnter={
        ()=>{greenRef.current.style.height='100%'}
      } 
      onMouseLeave={()=>{
        greenRef.current.style.height='0%'
      }}
      className='h-12 bg-black relative w-[18vw]' >
        <div ref={greenRef}  className= 'absolute transition-all top-0 bg-[#D3FD50] h-0 w-full' ></div>
        <div className='relative' ></div>
      </div>
    </div>
  )
}

export default Navbar