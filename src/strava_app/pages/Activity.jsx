// import { useEffect, useState } from "react";
// import { stravaActivity } from "../../APIS/strava";

function Activity() {
  // const [ activityData, setActivityData] = useState(null);
  // useEffect(() => {
  // stravaActivity()
  // .then(data => setActivityData(data))
  // .catch(err => console.log(err))
  // },[]);

  // useEffect(() => {
  //   console.log(activityData);
  // }, [activityData]);

  return (
    <div className="top-20 relative ">
      <div className="container mx-auto p-2 m-3">
        <div className="p-2 m-2">
          <h1 className="text-4xl font-bold text-center text-slate-100 h-[100px] ">
            My Activity
          </h1>
        </div>
      </div>
      <div className="container mx-auto p-2 m-3">
        {/* Card One - Activity Profile */}
        <div className="flex  flex-wrap gap-2 md:gap-5  md:flex-nowrap  ">
          <div className="container  md:flex-auto md:w-64 ">
              <div className="border-slate-900/10 border-2 rounded-xl  backdrop-blur-md shadow-xl opacity-1  relative bg-transparent  animate-fadeInAndUp ">
                <div className="flex p-2">
                  <img
                    className="rounded-full w-32 "
                    src="https://i.pravatar.cc/150?img=3"
                    alt="avatar"
                  />
                </div>
                <div className=" ">
                  <h1 className="text-1xl font-bold text-left text-white ">
                    Binx Bond
                  </h1>
                </div>
              </div>
            </div>
            {/* Card One - Activity Profile */}
            <div className="container md:flex-auto md:w-32">
              <div className="border-slate-900/10 border-2 rounded-xl  backdrop-blur-md shadow-xl opacity-1  relative bg-transparent  animate-fadeInAndUp">
                <div className="flex p-2">
                  <img
                    className="rounded-full w-32 "
                    src="https://i.pravatar.cc/150?img=3"
                    alt="avatar"
                  />
                </div>
                <div className=" ">
                  <h1 className="text-1xl font-bold text-left text-white ">
                    Binx Bond
                  </h1>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
