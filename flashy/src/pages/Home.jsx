import React from 'react'
import Video from '../components/home/Video'
import HomeBottomText from '../components/home/HomeBottomText'
import HomeHeroButton from '../components/home/HomeHeroButton'

const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed' >
        <Video/>
      </div  >
      <div className='h-[120vh] w-screen relative flex flex-col justify-between' >
        <HomeHeroButton/>
        <HomeBottomText/>
      </div>
    </div>
  )
}

export default Home