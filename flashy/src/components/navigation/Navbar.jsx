import React from 'react'

const Navbar = () => {
  return (
    <div className='flex z-4  fixed top-0 justify-between items-start w-full ' >
        <div className='p-4'>
            <h1><b>YAKSH</b></h1>
        </div>
      
      <div className='h-16 bg-black relative w-[16vw]' >
        <div className='absolute top-0 bg-green-500  h-0 w-full' ></div>
        <div className='relative' ></div>
      </div>
    </div>
  )
}

export default Navbar