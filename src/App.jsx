import React from 'react'
import Nav from './Components/Nav'
import Intro from './Components/Intro'
import About from './Components/About'
import './App.css'
import Projects from './Components/Projects'

import Contact from './Components/Contact'
import Photography from './Components/Photography'

function App() {


  return (
    <div>
     <Nav />
     <div className='body'>
     <Intro />
     <div id="about"><About /></div>
     <div id="projects"><Projects /></div>
     <div id="photography"><Photography/></div>
     <div id="contact"><Contact /></div>
     
     
     </div>
    </div>
  )
}

export default App
