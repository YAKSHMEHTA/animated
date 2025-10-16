import React from 'react'
import Video from '../components/home/Video'
import HomeBottomText from '../components/home/HomeBottomText'
import HomeHeroButton from '../components/home/HomeHeroButton'

const home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed' >
        <Video/>
      </div  >
      <div className='h-screen w-screen relative flex-col' >
        <HomeHeroButton/>
        <HomeBottomText/>
      </div>
    </div>
  )
}

export default home