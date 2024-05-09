import { Home } from './components/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion' 
import { Navbar } from './components/navbar'
import { Certificate } from './components/certificate'

function App() {  
  return (
    <AnimatePresence>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={ <Home /> }  />  
            <Route path='/certificate'  element={ <Certificate/> }/>    
          </Routes>    
        </div>
      </Router> 
    </AnimatePresence>    
  )
}

export default App
