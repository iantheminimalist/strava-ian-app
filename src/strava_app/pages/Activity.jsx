// import { useEffect } from "react"
// import { stravaActivity } from "../../APIS/strava"


function Activity() {

    // useEffect(() => {
    //     stravaActivity();
    // })

  return (
    <div className="top-20 relative">
    <div className="container mx-auto p-2 m-3">
      <div className="p-2 m-2">
        <h1 className="text-4xl font-bold text-center text-slate-100 h-[100px] ">My Activity</h1>
      </div>

      <div className=" border-sky-950 border-2 rounded-md  bg-white">
        <div className=" p-2 m-2 ">
            <div>
              <img src="https://api.multiavatar.com/Binx Bond.svg" alt=""  />
            </div>
        </div>
      </div>
    </div>


  

  </div>
  )
}

export default Activity