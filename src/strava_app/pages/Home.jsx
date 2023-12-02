import { stravaPermission } from '../../APIS/strava';


function Home() {
  
    return (
    <div>Home Page

     <button onClick={stravaPermission}>strava permission</button> 
    </div>
  )
}

export default Home;