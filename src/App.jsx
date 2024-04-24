import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Experience from './components/Experience'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import ProjectSection from './components/ProjectSection'
import TechStack from './components/TechStack'
import Footer from './components/Footer'


function App() {
 

  return (
    <>
    <Router>
    
      <Navbar/>
      <LandingPage/>
      <TechStack/>
      <ProjectSection/>
      <Experience/>
      <Footer/>

    </Router>
    
    </>
  )
}

export default App
