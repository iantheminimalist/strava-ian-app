import { useEffect, useState } from "react";
import { stravaActivity } from "../../APIS/strava";

function Activity() {
  const [ activityData, setActivityData] = useState(null);
  useEffect(() => {
    stravaActivity()
    .then(data => setActivityData(data))
    .catch(err => console.log(err))
  },[]);

  useEffect(() => {
    console.log(activityData);
  }, [activityData]);
  
  return (
    <div className="top-20 relative">
      <div className="container mx-auto p-2 m-3">
        <div className="p-2 m-2">
          <h1 className="text-4xl font-bold text-center text-slate-100 h-[100px] ">
            My Activity
          </h1>
        </div>

        <div className=" border-sky-950 border-2 rounded-md bg-white">
          <div className="flex p-2">
            <div className="">
              <img
                className="rounded-full w-[100px] h-[100px]"
                src="https://api.multiavatar.com/Binx Bond.svg"
                alt=""
              />
            </div>
            <div className=" ">
              <h1 className="text-1xl font-bold text-left text-stone-400 ">
                Binx Bond
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
