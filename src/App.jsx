import { useState } from "react";
import logo from "./assets/strava-badges/48.png";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import "./index.css";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

import { IonIcon } from "@ionic/react";
import { menu, close } from "ionicons/icons";
import Activities from "./strava_app/pages/Activities";

//React Router
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

// Pages
import About from "./strava_app/pages/About";
import Home from "./strava_app/pages/Home";
import Activity from "./strava_app/pages/Activity.jsx";

function App() {
  let [open, openState] = useState(false);
  console.log("This is a menu: does this work?" + open);

  return (
    <div className="bg-gradient-to-br from-orange-800 from-10% v	to-sky-950  to-90% min-h-screen w-full">
      <BrowserRouter>
        <header className="  w-full fixed top-0 left-0 z-[100]">
          <nav className=" shadow-md bg-white flex justify-between items-center p-3 border-b-2 border-gray/30">
            <div className="  ">
              <NavLink
                to="/"
                className="w-100 cursor-pointer flex items-center"
              >
                <img className="mx-2" src={logo} alt="strave-logo" />
                <h1 className=" mx-2 text-slate-900 font-semibold hover:text-orange-700">
                  My Strava Journey
                </h1>
              </NavLink>
            </div>

            <div className="">
              <ul
                className={`  md:flex md:justify-center md:items-center md:static md:auto md:z-auto 
                            absolute w-full bg-white left-0 z-[-10] transition-all duration-500 
                            ${open ? "top-[73px]" : "top-[-490px]"}
                        `}
              >
                <li className="md:mr-5 my-3 md:mb-0 p-3 ">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-orange-700 font-semibold"
                        : "text-sky-950" +
                          " hover:text-orange-700  font-semibold hover:duration-500"
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="md:mr-5 my-3 md:mb-0 p-3">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-orange-700 font-semibold"
                        : "text-sky-950" +
                          " hover:text-orange-700  font-semibold hover:duration-500"
                    }
                    to="pages/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="md:mr-5 my-3 md:mb-0 p-3">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-orange-700 font-semibold"
                        : "text-sky-950" +
                          " hover:text-orange-700  font-semibold hover:duration-500"
                    }
                    to="pages/activity"
                  >
                    Activity
                  </NavLink>
                </li>
                <li className="md:mr-5 my-3 md:mb-0 p-3">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-orange-700 font-semibold"
                        : "text-sky-950" +
                          " hover:text-orange-700  font-semibold hover:duration-500"
                    }
                    to="pages/activities"
                  >
                    Activities
                  </NavLink>
                </li>
              </ul>
            </div>
            <div
              className="menu-toggle cursor-pointer md:hidden mx-2 "
              onClick={() => {
                openState(!open);
              }}
            >
              <IonIcon
                icon={open ? close : menu}
                className={"w-6 h-6"}
                onClick={() => {
                  openState(!open);
                }}
              ></IonIcon>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/about" element={<About />} />
          <Route path="/pages/activity" element={<Activity />} />
          <Route path="/pages/activities" element={<Activities />} />
        </Routes>
      </BrowserRouter>

      <h1 className="text-3xl font-bold prose"></h1>
    </div>
  );
}

export default App;
