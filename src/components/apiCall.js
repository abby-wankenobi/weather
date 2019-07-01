
export const apiCall = (location,arg) => {

  var apiKey = "088b7bb74935e20b400b99cf2a05fd5f"

   fetch(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?${location}&APPID=${apiKey}`)
  .then(response=>{
    return response.json();
  })
  .then(data=>{
    arg(data)
  })

}

export const apiForecast = (location,arg) => {

  var apiKey = "088b7bb74935e20b400b99cf2a05fd5f"

   fetch(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?${location}&APPID=${apiKey}`)
  .then(response=>{
    return response.json();
  })
  .then(data=>{
    arg(data)
  })

}
