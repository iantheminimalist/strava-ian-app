// lets me authorize my account to be veiwed.
export function stravaPermission() {
  const authUrl =
    "https://www.strava.com/oauth/authorize?client_id=" +
    import.meta.env.VITE_APP_STRAVA_CLIENT_ID +
    "&response_type=code&redirect_uri=" +
    "http://localhost:5173" +
    "&scope=activity:read_all";
  window.location.href = authUrl;
}

const headers = {
  Accept: "application/json , text/plain , */*",
  "Content-Type": "application/json",
};

const body = JSON.stringify({
  client_id: import.meta.env.VITE_APP_STRAVA_CLIENT_ID,
  client_secret: import.meta.env.VITE_APP_STRAVA_SECRET,
  refresh_token: import.meta.env.VITE_APP_STRAVA_REFRESH_TOKEN,
  grant_type: "refresh_token",
});

export async function stravaActivity() {
  const reAuthResponse = await fetch("https://www.strava.com/oauth/token", {
    method: "post",
    headers: headers,
    body: body,
  });

  // console.log(reAuthResponse)
  const reAuthData = await reAuthResponse.json();
  console.log(reAuthData);

  // grab Athletes Data
  const athleteData = await fetch(
    "https://www.strava.com/api/v3/athlete?access_token=" +
      reAuthData.access_token,
    {
      method: "get",
      headers,
    }
  );
  //converts response into json.
  const athleteDataJson = await athleteData.json();
  console.log(athleteDataJson.id);

  //grab athlets Activities
  const athleteActivitiesData = await fetch(
    `https://www.strava.com/api/v3/athlete/activities?per_page=1&order=desc&access_token=` +
      reAuthData.access_token,
    {
      method: "get",
      headers,
    }
  );
  // grab Athlete activity Data ID
  const athleteActivitiesDataJson = await athleteActivitiesData.json();
  console.log(athleteActivitiesDataJson[0].id);

  // grab Athlete activity Data
  const activityData = await fetch(
    `https://www.strava.com/api/v3/activities/${athleteActivitiesDataJson[0].id}?access_token=` +
      reAuthData.access_token,
    {
      method: "get",
      headers,
    }
  );

  const activityDataJson = await activityData.json();
  console.log(activityDataJson);
  return activityDataJson;
}

export async function strava() {
  // StravaRefreshToken();
  //   let params = new URLSearchParams(window.location.search);
  //   let code = params.get('code');
  //   console.log(code);
  //   const headers = {
  //     'Accept': 'application/json , text/plain , */*',
  //     'Content-Type': 'application/json',
  //   }
  //   const body = JSON.stringify({
  //     client_id: import.meta.env.VITE_APP_STRAVA_CLIENT_ID,
  //     client_secret: import.meta.env.VITE_APP_STRAVA_SECRET,
  //     refresh_token: import.meta.env.VITE_APP_STRAVA_REFRESH_TOKEN,
  //     grant_type: 'refresh_token',
  //   })
  //   // ReAuth in order to get my access token
  //   const reAuthResponse = await fetch('https://www.strava.com/oauth/token', {
  //     method: 'post',
  //     "headers": headers,
  //     "body": body
  //   })
  //   console.log(reAuthResponse)
  //   const reAuthData = await reAuthResponse.json()
  //    console.log(reAuthData);
  //   // grab Athletes Stats
  //   const athleteStats = await fetch(`https://www.strava.com/api/v3/athletes/${import.meta.env.VITE_APP_STRAVA_ID}/stats?access_token=`+ reAuthData.access_token , {
  //     method: 'get',
  //     headers,
  //   })
  //   const athleteStatsJson = await athleteStats.json() //converts response into json.
  //   console.log(athleteStatsJson)
  // // grab Athletes Data
  //   const athleteData = await fetch('https://www.strava.com/api/v3/athlete?access_token=' +reAuthData.access_token, {
  //     method: 'get',
  //     headers,
  //   })
  //   const athleteDataJson = await athleteData.json() //converts response into json.
  //   console.log(athleteDataJson)
  // //grab Athletes Activities
  //   const athleteActivities = await fetch(`https://www.strava.com/api/v3/athlete/activities?access_token=`+ reAuthData.access_token , {
  //     method: 'get',
  //     headers,
  //   })
  //   const athleteActivitiesJson = await athleteActivities.json()
  //   console.log(athleteActivitiesJson);
}
