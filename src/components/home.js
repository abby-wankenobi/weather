import React from 'react';

import Search from './search.js';
import Weather from './weather.js';
import { apiCall, apiForecast } from './apiCall.js';




export default class Home extends React.Component {

  state = {
    location: "New York",
    data: {},
    forecast: {},
    weather: {},
    hourlyTemp: [],
    hours: [],
    rain: [],
    exists: true
  }

  componentDidMount(){
    this.setState({
      exists: true,
    })
    console.log(this.state)
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
    var forecast = apiForecast(location, this.handleForecast)
  }




  // Converts Temp to celsius and fahrenheit before setting value to state
  tempConversion = (temp) => {
    var celsius = Math.round(temp - 273.15)
    var fahrenheit = Math.round((temp - 273.15) * 9/5 + 32)

    return (
      <span>{fahrenheit}<sup className="sup">&deg;F</sup> &nbsp; {celsius}<sup className="sup">&deg;C</sup></span>
    )
  }





  // Sets data for chosen city information
  handleData = (arg) => {

    if (arg.cod == 200) {
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
    } else {
      this.setState({
        exists: false,
        data: {},
        weather: {},
      })
    }

    console.log(arg, this.state)
  }



  // Sets data for hourly weather forecast for bar graph
  handleForecast = (arg) => {

    if(arg.cod == 200) {
      var temps = [];
      var hour = [];
      var rain = [];

      for (let i = 0; i <= 8; i++) {
        temps.push(arg.list[i].main.temp)
        hour.push(arg.list[i].dt_txt.split(" ")[1].split(":").slice(0,2).join(":"))
        rain.push((arg.list[i].weather[0].main === "Rain" ? true : false))
      }


      this.setState({
        forecast: arg,
        hours: hour,
        hourlyTemp: temps,
        rain: rain,
      })
    } else {
      this.setState ({
        exists: false,
        forecast: {},
        hours: [],
        hourlyTemp: [],
        rain: [],
      })
    }

    console.log(this.state)
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
    } else if (weather === "Mist"){
      return "mainPage mist"
    } else if (weather ==="Haze"){
      return "mainPage sunny"
    } else {
      return "mainPage sunny"
    }
  }

  getDateTime = () => {
    var objToday = new Date(),
      	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
      	dayOfWeek = weekday[objToday.getDay()],
      	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
      	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
      	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
      	curMonth = months[objToday.getMonth()],
      	curYear = objToday.getFullYear(),
      	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
      	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
      	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
      	curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";

    var today = dayOfWeek + ", " + curMonth + " " + dayOfMonth + ", " + curYear;
    var time = curHour + ":" + curMinute + curMeridiem;

    return (<span className="day"><strong>{today}</strong><br/>{time}</span>);
  }



  handleError = () => {
    if (!this.state.weather.temp && this.state.exists) {
      return <div className="enterCity">Please enter a city</div>
    } else if (!this.state.weather.temp && !this.state.exists) {
      return <div className="enterCity">Sorry! Seems like we can't find that place. Please enter another city or state.</div>
    }
  }





  render() {


    return (
      <div className={this.handleGradient()} >

        <Search location={this.state.location}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
        />

        <div className="date">
          {this.getDateTime()}
        </div>

        <div>
          {!this.state.weather.temp ? this.handleError() : <Weather weather={this.state.weather} hours={this.state.hours} hourlyTemp={this.state.hourlyTemp} rain={this.state.rain} />}
        </div>


      </div>
    )
  }
}
