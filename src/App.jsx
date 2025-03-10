import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Experience from './components/Experience'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import ProjectSection from './components/ProjectSection'
import TechStack from './components/TechStack'
import Footer from './components/Footer'
import Blogs from './components/Blogs'


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <Navbar />
              <LandingPage />
              <TechStack />
              <ProjectSection />
              <Experience />
              <Footer />

            </>
          } />

          <Route path='/blogs' element={<Blogs />} />


        </Routes>

      </Router>

    </>
  )
}

export default App
