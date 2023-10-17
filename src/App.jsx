import React from 'react'
import Nav from './Components/Nav'
import Intro from './Components/Intro'
import About from './Components/About'
import './App.css'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact'

function App() {


  return (
    <>
     <Nav />
     <Intro />
     <div id="about"><About /></div>
     <div id="skills"><Skills /></div>
     <div id="projects"><Projects /></div>
     <div id="contact"><Contact /></div>
     
     
    </>
  )
}

export default App
