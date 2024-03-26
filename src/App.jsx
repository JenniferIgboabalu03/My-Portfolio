import { Home } from './components/home'
import { About } from "./components/about"
import { Projects } from "./components/projects"
import { Contact } from "./components/contact"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion' 

function App() {
  
  return (
    <AnimatePresence>
      <Router>
        <div>
            <Routes>
              <Route path="/" element={ <Home /> }  />
              <Route path="/about" element={ <About /> }  />
              <Route path="/projects" element={ <Projects /> }  />
              <Route path="/contact" element={ <Contact /> }  />
            </Routes>    
        </div>
      </Router> 
    </AnimatePresence>    
  )
}

export default App
