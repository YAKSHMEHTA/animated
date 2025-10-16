import React from 'react'
import {Link} from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex font-[font2] items-center justify-center gap-2 ' >
      <Link className='border-4 pt-1 pb-0 text-[6vw] border-white rounded-full px-10 uppercase '>Projects</Link>
      <Link className='border-4  text-[6vw] border-white rounded-full px-10 uppercase '>Agence</Link>
    </div>
  )
}

export default HomeBottomText;