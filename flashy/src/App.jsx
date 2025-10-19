import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import { Routes, Route } from 'react-router-dom'

const App = () => {
 

  return (
    <div className='text-white yak relative'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App;