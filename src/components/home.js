import React from 'react';

import Search from './search.js';
import Weather from './weather.js';
import { apiCall } from './apiCall.js';


export default class Home extends React.Component {

  state = {
    location: "New York",
    data: {},
    weather: {},
  }


  handleChange = (e) =>{
    this.setState({
      location: e.target.value
    })
  }



  // Sends proper text to API call depending if input is a city name or zip code
  handleSubmit = e =>{
    var location = this.state.location
    e.preventDefault()

    if(!parseInt(location) === !NaN){
      location = "q=" + location + ",us"
    }
    else{
      location = "zip=" + location
    }
    var input = apiCall(location, this.handleData)
  }




  // Converts Temp to celsius and fahrenheit before value to state
  tempConversion = (temp) => {
    var celsius = Math.round(temp - 273.15)
    var fahrenheit = Math.round((temp - 273.15) * 9/5 + 32)

    return (
      <span>{fahrenheit}<sup className="sup">&deg;F</sup> / {celsius}<sup className="sup">&deg;C</sup></span>
    )
  }





  // Sets data for chosen city information
  handleData = (arg) => {
    var humidity = <span>{arg.main.humidity}<sup className="sup">%</sup></span>

    this.setState({
      data: arg,
      weather: {
        temp: this.tempConversion(arg.main.temp),
        minTemp: this.tempConversion(arg.main.temp_min),
        maxTemp: this.tempConversion(arg.main.temp_max),
        humidity: humidity,
        percipitation: arg.weather[0].main,
        city: arg.name,
      }
    })
    console.log(this.state.weather)
  }



  handleGradient = () => {
    var weather = this.state.weather.percipitation;
    if(weather === "Clear") {
      return "mainPage clear"
    } else if(weather === "Clouds"){
      return "mainPage clouds"
    } else if (weather === "Snow") {
      return "mainPage snow"
    } else if (weather === "Rain" || weather === "Drizzle") {
      return "mainPage rainCloud"
    } else if (weather === "Thunderstorm") {
      return "mainPage stormCloud"
    } else if (weather === "Windy") {
      return "mainPage wind"
    } else if (weather ==="Partly cloudy"){
      return "mainPage partlyCloudy"
    }else {
      return "mainPage sunny"
    }
  }


  render() {
    return (
      <div className={this.handleGradient()} >

        <Search location={this.state.location}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
        />

        <div>
          {!this.state.weather.temp ? <div className="enterCity">Please enter a city</div> : <Weather weather={this.state.weather} />}
        </div>
      </div>
    )
  }
}
