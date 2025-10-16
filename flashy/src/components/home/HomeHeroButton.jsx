import React from 'react'
import Video from './Video'

const HomeHeroButton = () => {
  return (
    <div className='font-[font2] pt-5 text-center' >
      <div className='text-[9vw] uppercase leading-[7.5vw]  flex justify-center items-center' >The spark</div>
      <div className='text-[9vw] uppercase leading-[5vw] flex justify-center items-center  ' >who <div className='h-[8vw] w-[16vw] rounded-full overflow-hidden mb-8' loop  ><Video /></div></div>
      <div className='text-[9vw] uppercase leading-[7.5vw]  flex justify-center items-center' >Generates</div>
      <div className='text-[9vw] uppercase leading-[7.5vw] flex justify-center items-center' >thecreativity</div>
    </div>
  )
}

export default HomeHeroButton
