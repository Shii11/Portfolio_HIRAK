import React from 'react'
import Navbar from './component/Navbar.jsx'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import WriteUps from './component/WriteUps.jsx'
import FeaturedWork from './component/FeaturedWork.jsx'
import Contact from './component/Contact.jsx'

const App = () => {
  return (
    <div className='relative'>
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        <FeaturedWork></FeaturedWork>
        <WriteUps></WriteUps>
        <Contact></Contact>
      </div>
  )
}

export default App
