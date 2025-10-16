import React from 'react'
import {Link} from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex font-[font2] items-center justify-center gap-2 ' >
      <Link className='border-4 leading-[5.5vw]  pt-5 text-[6vw] border-white hover:border-lime-500 hover:text-lime-500 rounded-full px-10 uppercase '>Projects</Link>
      <Link className='border-4 leading-[5.5vw] pt-5 text-[6vw] border-white rounded-full px-10 uppercase hover:text-lime-500  hover:border-lime-500  '>Agence</Link>
    </div>
  )
}

export default HomeBottomText;