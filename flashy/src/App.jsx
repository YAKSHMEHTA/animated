import React from 'react'
import Home from './pages/Home'  // Ensure your file is named Home.jsx (capital H)
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import { Link ,Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='text-white'>
      
      <Link className='text-blue-500 mr-5 text-m' to='/' >Home</Link>
        <Link className='text-blue-500 mr-5 text-m' to='/agence' >Agence</Link>
        <Link className='text-blue-500 mr-5 text-m' to='/projects' >Projects</Link>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App;