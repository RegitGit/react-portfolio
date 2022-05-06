import React from 'react'
import "./index.css"

import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Footer from "./components/footer/Footer"
import Contact from "./components/contact/Contact"

const App = () => {
  return (
    <>
        <Header/>
        <About/>
        <Navbar/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App