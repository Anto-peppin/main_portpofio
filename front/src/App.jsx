import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='scroll-smooth'>
      <Nav/>
      <Home/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App