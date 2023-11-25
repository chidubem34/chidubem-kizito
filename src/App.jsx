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
      <div className="">
        <Navbar />

        <Routes>
          <Route path='/chidubem-kizito/' element={<Home />} />
          <Route path='chidubem-kizito/about' element={<About />} />
          <Route path='chidubem-kizito/projects' element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App