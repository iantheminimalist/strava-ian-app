import {  useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './index.css'
import { strava } from './APIS/strava.js';


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Activity from './strava_app/pages/Activity'
import About from './strava_app/pages/About'
import Home from './strava_app/pages/Home'

// function Activity() {
//   return (
//     <div className=' bg-sky-950	 min-h-screen'>
//     <h1 className="text-3xl font-bold prose">
//       Activity
//     </h1>    
//     </div>
//   )
// }

// function About() {
  
//   return (
//   <div>About Page</div>
// )
// }

function menuToggle(){
  var navlinks = document.querySelector('.nav-links');
  navlinks.classList.toggle('top-[9%]' );
  navlinks.classList.toggle('opacity-100' );


}

function App() {
  useEffect(() => {
    strava();
  }, []);



  return (
    <div className=' bg-gradient-to-br from-orange-800 from-10% v	to-sky-950  to-90% min-h-screen'>

      <BrowserRouter>
      <header className=' bg-white  '>
      <nav className=' flex justify-between items-center p-2 border-b-2 border-gray-300 z-50'>
        <div className='  '>
        <Link to="/" className='w-100 cursor-pointer flex items-center'>
          <img className='' src="../src/assets/strava-badges/48.png " alt="strave-logo"  /> 
          <h1 className=' text-slate-900 hover:text-gray-500'>My Strava Journey</h1>
          </Link>

        </div>
        <div className=''>
            <ul className=' nav-links duration-1000 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 z-1 md:opacity-100 md:flex-row sm:relative sm:z-10 opacity-0 flex-col'>            
            <li className='md:mr-10 mr-0 md:mb-0 mb-10 '>
              <Link className="hover:text-gray-500" to="/">Home</Link>
            </li> 
            <li className='md:mr-10 mr-0 md:mb-0 mb-10 ' >
              <Link className="hover:text-gray-500" to="pages/about">About</Link>
            </li>
            <li className='md:mr-10 mr-0 md:mb-0 mb-10 ' >
              <Link className="hover:text-gray-500" to="pages/activites">Activities</Link>
            </li>
          </ul>
        </div>
        <div className='menu-toggle cursor-pointer md:hidden ' onClick={menuToggle}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </nav> 

      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/pages/activity" element={<Activity />} />
        <Route path="/pages/about" element={<About />} />
      </Routes>
      </BrowserRouter>

      <h1 className="text-3xl font-bold prose"> 
    </h1>    
    </div>
  )
}

export default App
