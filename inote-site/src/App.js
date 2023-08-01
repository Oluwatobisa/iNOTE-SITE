
import './App.css';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import {Home} from './pages/Home'
import {Navbar} from './component/Navbar'
import {Learn} from "../pages/Learn"

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/Learn" element = {<Learn />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
