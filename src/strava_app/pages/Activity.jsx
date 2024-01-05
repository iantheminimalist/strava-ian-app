import { useEffect, useState } from "react";
import { stravaActivity } from "../../APIS/strava";

function StravaActivity() {
  const [activityData, setActivityData] = useState(null);

  useEffect(() => {
    stravaActivity()
      .then((data) => setActivityData(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(typeof(activityData));
  }, [activityData]);


  return (
    <>
      <div className="flex p-2">
        <img
          className="rounded-full w-32 "
          src="https://i.pravatar.cc/150"
          alt="avatar"
        />
      </div>
      <div className=" ">
        <h1 className="text-1xl font-bold text-left text-white ">
          My Total Activities
        </h1>
        {activityData && <div>{activityData.resource_state}</div>}
      </div>
    </>
  );
}

function Activity() {
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
          <div className="container w-100 md:flex-auto md:w-40 ">
            <div className="border-slate-100/10 border-2 rounded-xl  backdrop-blur-md shadow-xl opacity-1  relative bg-transparent  animate-fadeInAndUp ">
              <div className="flex p-2">
                <StravaActivity />
              </div>
            </div>
          </div>

          {/* Card Two - Latest Activity */}
          <div className="container  w-100  md:flex-auto md:w-60 ">
            <div className="border-slate-100/10 border-2 rounded-xl  backdrop-blur-md shadow-xl opacity-1  relative bg-transparent  animate-fadeInAndUp ">
              <div className="flex p-2">
                <div className="flex p-2">
                  <img
                    className="rounded-full w-32 "
                    src="https://i.pravatar.cc/150"
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
    </div>
  );
}

export default Activity;
