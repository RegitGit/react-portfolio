import React from 'react'
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Footer from "./components/footer/Footer"
import Contact from "./components/contact/Contact"
import "./index.css"

const App = () => {
  return (
    <>
        <Header/>
        <Navbar/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App