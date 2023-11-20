//lets me authorize my account to be veiwed.
export function stravaPermission() {
  const authUrl = 'https://www.strava.com/oauth/authorize?client_id=' + import.meta.env.VITE_APP_STRAVA_CLIENT_ID + '&response_type=code&redirect_uri=' + 'http://localhost:5173' + '&scope=activity:read_all';
  window.location.href = authUrl;
}



 export async function strava() {

  const headers = {
    'Accept': 'application/json , text/plain , */*',
    'Content-Type': 'application/json'
  }
  
  const body = JSON.stringify({
    client_id: import.meta.env.VITE_APP_STRAVA_CLIENT_ID,
    client_secret: import.meta.env.VITE_APP_STRAVA_SECRET,
    refresh_token: import.meta.env.VITE_APP_STRAVA_REFRESH_TOKEN,
    grant_type: 'refresh_token',
  })
  
  
  const reAuthResponse = await fetch('https://www.strava.com/oauth/token', {
    method: 'post',
    "headers": headers,
    "body": body
})

  console.log(reAuthResponse)
  const reAuthData = await reAuthResponse.json()
  // console.log(reAuthData);

  //grab Athletes Stats
  const athleteStats = await fetch(`https://www.strava.com/api/v3/athletes/${import.meta.env.VITE_APP_STRAVA_ID}/stats?access_token=`+ reAuthData.access_token , {
    method: 'get',
    headers,
  })
  
  const athleteStatsJson = await athleteStats.json() //converts response into json.
  console.log(athleteStatsJson)

  const athleteData = await fetch('https://www.strava.com/api/v3/athlete?access_token=' +reAuthData.access_token, {
    method: 'get',
    headers,
  })

  const athleteDataJson = await athleteData.json() //converts response into json.
  console.log(athleteDataJson)


}

