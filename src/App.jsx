// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div className='bg-primary bg-fixed min-h-[100vh]'>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App