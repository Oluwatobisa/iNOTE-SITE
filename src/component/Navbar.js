import {Link} from 'react-router-dom'

import './index.css'



export const Navbar = () => { 
  return(
    <nav className='navbar'>
    <h1 className="logo text-xl">iNOTE INSTITUTE</h1>
    <div className='link space-x-4'>    
    <Link to='/'> Home </Link>
    <Link to='/Learn'> Learn </Link>
    <Link to='/Explore'> Explore </Link>
    <Link to='/About'> About </Link>
    <Link to='/Contact'> Contact </Link>
    </div>

    <div className='Btn'>
    <Link to ='/Signup'> <button className=' bg-orange-500 text-white w-20 rounded-3xl h-10'>Sign Up </button></Link>
    <Link to ='/Login'> <button className=' bg-orange-500 text-white w-20 rounded-3xl h-10'>Login </button></Link>
    </div>
  </nav>
  )

}