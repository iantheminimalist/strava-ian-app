import {  useEffect, useState } from 'react'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './index.css'

//Strava API
import { strava } from './APIS/strava.js';
//React Router
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// Pages
import Activity from './strava_app/pages/Activities.jsx'
import About from './strava_app/pages/About'
import Home from './strava_app/pages/Home'


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';


import { IonIcon } from '@ionic/react';
import { menu, close } from 'ionicons/icons';

function App() {

  useEffect(() => {
    strava();
  }, []);

  let [open, openState] = useState(false);
  console.log(open)
  
  return (
    <div className=' bg-gradient-to-br from-orange-800 from-10% v	to-sky-950  to-90% min-h-screen w-full'>

      <BrowserRouter>
      <header className=' w-full fixed top-0 left-0 z-2'>
      <nav className=' shadow-md bg-white flex justify-between items-center p-3 border-b-2 border-gray-300 z-1'>
        
        <div className='  '>
          <Link to="/" className='w-100 cursor-pointer flex items-center'>
            <img className='mx-2' src="./src/assets/strava-badges/48.png" alt="strave-logo"  /> 
            <h1 className=' mx-2 text-slate-900 hover:text-gray-500'>My Strava Journey</h1>
          </Link>
        </div>

        <div className=''>
          <ul className={`md:flex md:justify-center md:items-center md:static md:auto md:z-auto absolute w-full bg-white left-0 z-[-1] transition-all duration-1000 ${open ? 'top-[65px]' : 'top-[-490px]' }`}>            
            <li className='md:mr-10 mr-0 md:mb-0 p-3 '>
              <Link className="hover:text-gray-500" to="/">Home</Link>
                  </li> 
            <li className='md:mr-10 mr-0 md:mb-0 p-3' >
              <Link className="hover:text-gray-500" to="pages/about">About</Link>
            </li>
            <li className='md:mr-10 mr-0 md:mb-0 p-3' >
              <Link className="hover:text-gray-500" to="pages/activites">Activities</Link>
            </li>
          </ul>
        </div>
        <div className='menu-toggle cursor-pointer md:hidden mx-2' onClick={ () => { openState(!open) } }>
          <IonIcon icon={open ? close : menu} className={"w-6 h-6"} onClick={ () => { openState(!open) }} ></IonIcon>  
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
