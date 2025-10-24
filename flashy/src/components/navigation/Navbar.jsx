import React, { useContext,useRef } from 'react'
import { NavbarContext } from '../../context/NavContext';

const Navbar = () => {

  const greenRef = useRef(null);
  const [navOpen,setNavOpen]  = useContext(NavbarContext);

  return (
    <div className='flex z-4  fixed top-0 justify-between items-start w-full ' >
        <div className='p-4'>
            <h1><b>YAKSH</b></h1>
        </div>
      
      <div 
      onMouseEnter={
        ()=>{greenRef.current.style.height='100%'}
      } 
      onClick={()=>{
        setNavOpen(true);
        navOpen(true);
      }}
      onMouseLeave={()=>{
        greenRef.current.style.height='0%'
      }}
      className='h-12 bg-black relative w-[18vw]' >
        <div ref={greenRef}  className= 'absolute transition-all top-0 bg-[#D3FD50] h-0 w-full' ></div>
        <div className='relative h-full px-10 flex-col w-full gap-6' >
          <div className="bg-white w-36 h-0.5"></div>
          <div className="bg-white w-30 h-0.5"></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar