
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
import { About } from './pages/About';
import { Learn } from './pages/Learn';
import { Explore } from './pages/Explore';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Navbar } from './component/Navbar';



function App() {


  return(
  
  <div className='App'>
      <Router>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/Contact" element = {<Contact />} />
        <Route path = "/Learn" element = {<Learn />} />
        <Route path = "/About" element = {<About />} />
        <Route path = "/Explore" element = {<Explore />} />
        <Route path = "/Signup" element = {<Signup />} />
        <Route path = "/Login" element = {<Login />} />
      </Routes>
    </Router>

  </div>
  

  )
  
}

export default App;
