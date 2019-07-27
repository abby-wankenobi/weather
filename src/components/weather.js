import React from 'react';
import FadeIn from 'react-fade-in';
import WeatherGraph from './weatherGraph';
import { AreaChart } from 'react-charts-d3';

import cloudy from '../images/icons/cloudy.png';
import partlyCloudy from '../images/icons/partlycloudy.png';
import rainCloud from '../images/icons/raincloud.png';
import snow from '../images/icons/snow.png';
import stormCloud from '../images/icons/stormcloud.png';
import sunny from '../images/icons/sunny.png';
import wind from '../images/icons/wind.png';



export default class Weather extends React.Component {

  iconDisplay = () => {
    var weather = this.props.weather.percipitation.toLowerCase()
    if(weather === "clear") {
      return sunny
    } else if(weather === "clouds"){
      return cloudy
    } else if (weather === "snow") {
      return snow
    } else if (weather === "rain" || weather === "drizzle") {
      return rainCloud
    } else if (weather === "thunderstorm") {
      return stormCloud
    } else if (weather === "windy") {
      return wind
    } else if (weather ==="partly cloudy"){
      return partlyCloudy
    }else if (weather === "mist"){
      return wind
    } else if (weather === "haze"){
      return partlyCloudy
    } else {
      return sunny
    }
  }


  render() {

    const areaData = [
        { key: 'Temp', values: [ { x: 'A', y: 25 }, { x: 'B', y: 50}, { x: 'C', y: 12 }, { x: 'D', y: 81 }, { x: 'E', y: 25 }, { x: 'F', y: 35}, { x: 'G', y: 4 }, { x: 'H', y: 102 } ] },
    ];

    console.log(this.props)
    return (
      <FadeIn transitionDuration="850">
        <div className="todayWeather">
          <div className="weatherIcon"><img src={this.iconDisplay()} /></div>

          <div className="weatherInfo">
            <span className="locationHeader">{this.props.weather.city}</span><br/>
            <span className="locationWeather">{this.props.weather.percipitation}</span><br/>
            <span className="locationWeatherTemp">{this.props.weather.temp}</span><br/>
            <span className="">Low: &nbsp;{this.props.weather.minTemp}</span><br/>
            <span className="">High: &nbsp;{this.props.weather.maxTemp}</span><br/>
            <span className="">Humitidy: &nbsp;{this.props.weather.humidity}</span><br/>
          </div>
        </div>

        <WeatherGraph rain={this.props.rain} hours={this.props.hours} hourlyTemp={this.props.hourlyTemp}/>

      </FadeIn>


    )
  }
}
