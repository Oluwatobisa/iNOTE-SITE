
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

  return (
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


<div className=' home Class
Properties
font-sans	font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; grid grid-cols-2 space-x-28 '>
  <div className=' mt-48 ml-[140px] space-y-2 '>
 <div className=' '>
    <h1 className=' text-white text-xl font-bold'>Welcome To </h1>
    </div>
    <div>
    <h1 className=' text-white text-xl font-bold'>iNOTE </h1>
    <h1 className=' text-white text-xl font-bold'>INSTITUTE</h1>
    </div>
  <div>
    <h1 className=' text-white text-xl font-bold'>Get High Rating Piano</h1>
    <h1 className=' text-white text-xl font-bold'> Courses For Affordable Price</h1>
  </div>
  
    <div className='pt-14'>
      <p className='text-white'>Find The Right intructor From 10,000+ Teachers</p>
 </div>
 <div className=' w-60'>
    <div className='grid grid-cols-2 '>
      <button className='bg-white text-orange-500 rounded-3xl w-28 font-bold h-10'>Sign Up</button>
      <button className='bg-white text-orange-500 rounded-3xl w-28 font-bold h-10 text-center '>Login <p className=' text-[8px]'> Already a member </p></button>
   </div>
</div>

  </div>


    <div className=' mt-[30rem]'>
    <h1 className=' text-orange-600 text-2xl font-extrabold'>iNOTE </h1>
    <h1 className=' text-orange-600 text-2xl font-extrabold'>INSTITUTE</h1>
    <div className='font-serif	font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;'>
    <p className=' text-orange-600 '>Inote is a place of learning </p>
    <p className=' text-orange-600 '>and creativity a place where </p>
    <p className=' text-orange-600 '>different kinds of talant are being molded </p>
    <p className=' text-orange-600 '>into the intrumentation of music</p>
    <p className=' text-orange-600 font-bold text-sm'>Over 1000 trianed pianist</p>
    <div className='w-[25rem] grid grid-cols-2 m-14'>
    <button className=' bg-white shadow-xl w-40 h-14 rounded-3xl text-orange-600'>Buy A Course</button>
    <button className='bg-orange-600 w-40 h-14 rounded-3xl shadow-xl text-white'>Join Our Community</button>
    </div>
    </div>
    </div>
</div>

  <div className='second '>
    <div className='third '>
      <div className='fourth'>
      <div className='ml-[140px] mt-24'>
        <p className=' text-orange-600 font-bold text-lg'>Practice Advice </p>
        <h1 className=' text-white text-2xl font-bold'>Every Client Matter </h1>
        <p className='text-white'>Learn every pattern of music your have ever dreamed of</p>
        <p className='text-white'>From Contenpoary-Jazz-Classical-Fusion music</p>
        <p className='text-white font-bold'>Explore Courses</p>
        </div>
        </div>
      </div>
  </div>


    </div>

  );
}

export default App;
