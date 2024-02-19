import React from 'react'
import './App.css'
import Home from './components/home/Home'
import About from './components/about/About'
import Certification from './components/certifications/Certification'
import CV from './components/cv/cv'
import Experience from './components/experience/Experience'
import Personal_Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import TopButton from './components/topButton/TopButton'

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Experience />
      <Certification/>
      <Personal_Projects />
      {/* <CV /> */}
      <Contact />
      <Footer />
      <TopButton />
    </div>
  )
}

export default App
