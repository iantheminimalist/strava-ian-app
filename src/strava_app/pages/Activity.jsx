import { useEffect } from "react"
import { strava } from "../../APIS/strava"


function Activity() {

    useEffect(() => {
        strava();
    })

  return (
    <div className="top-20 relative">
    <div className="container mx-auto p-2 m-3">
      <div className="p-2 m-2">
        <h1 className="text-4xl font-bold text-center text-slate-100 h-[100px] ">My Activity</h1>
      </div>
    </div>


  

  </div>
  )
}

export default Activity