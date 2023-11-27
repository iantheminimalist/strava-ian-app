// import {  useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './index.css'
// import { strava } from './APIS/strava.js';
// import { stravaPermission } from './APIS/strava.js';


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



function App() {
  // useEffect(() => {
  //   strava();
  // }, []);


  return (
    <div className=' bg-sky-950	 min-h-screen'>

      <BrowserRouter>
      <header className=' bg-white '>
      <nav className=' flex justify-between items-center p-4 border-b-2 border-gray-300 '>
        <div>
        <Link to="/" className='w-16 cursor-pointer'><img src="../src/assets/strava-badges/48.png " alt=""  /></Link>

        </div>
        <div className='  '>
          <ul className=' nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5 '>
            <li>
              <Link className="hover:text-gray-500" to="/pages/activity">Activity</Link>
            </li>
            <li>
              <Link className="hover:text-gray-500" to="pages/about">About</Link>
            </li>
          </ul>
        </div>
        <div className='hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
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
