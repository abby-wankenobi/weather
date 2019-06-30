import React from 'react';
import { Bootstrap, Grid, Row, Container, Col } from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import BarGraph from './weatherGraph';

import cloudy from '../images/icons/cloudy.png';
import partlyCloudy from '../images/icons/partlycloudy.png';
import rainCloud from '../images/icons/raincloud.png';
import snow from '../images/icons/snow.png';
import stormCloud from '../images/icons/stormcloud.png';
import sunny from '../images/icons/sunny.png';
import wind from '../images/icons/wind.png';



export default class Weather extends React.Component {


  componentDidMount() {
    console.log(this.props)
  }

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
    }else {
      return sunny
    }
  }


  render() {
    return (
      <FadeIn transitionDuration="850">
        <div className="todayWeather">
          <div className="weatherIcon"><img src={this.iconDisplay()} /></div>

          <div className="weatherInfo">
            <span className="locationHeader">{this.props.weather.city}</span><br/>
            <span className="locationWeather">{this.props.weather.percipitation}</span><br/>
            <span className="">Temperature: {this.props.weather.temp}</span><br/>
            <span className="">Low: {this.props.weather.minTemp}</span><br/>
            <span className="">High: {this.props.weather.maxTemp}</span><br/>
            <span className="">Humitidy: {this.props.weather.humidity}</span><br/>
          </div>
        </div>

        <BarGraph hours={this.props.hours} hourlyTemp={this.props.hourlyTemp}/>
      </FadeIn>


    )
  }
}
