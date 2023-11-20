// import {  useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './index.css'
// import { strava } from './APIS/strava.js';
// import { stravaPermission } from './APIS/strava.js';


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Activity from './strava_app/Activity'
import About from './strava_app/About'

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
    <h1 className="text-3xl font-bold prose">
      HomePAge


      
      <BrowserRouter>
      <Link to="/pages/activity">Activity</Link>
      <Link to="pages/about">About</Link>
      <Routes>
        <Route path="/activity" element={<Activity />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </h1>    
    </div>
  )
}

export default App
