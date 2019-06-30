import React from 'react';
import { Bootstrap, Grid, Row, Container, Col } from 'react-bootstrap';
import cloudy from '../images/icons/cloudy.png';
import FadeIn from 'react-fade-in';

export default class Weather extends React.Component {


  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <FadeIn transitionDuration="850">
        <div className="todayWeather">
          <div className="weatherIcon"><img src={cloudy} /></div>

          <div className="weatherInfo">
            <span className="locationHeader">{this.props.weather.city}</span><br/>
            <span className="locationWeather">{this.props.weather.percipitation}</span><br/>
            <span className="">Temperature: {this.props.weather.temp}</span><br/>
            <span className="">Low: {this.props.weather.minTemp}</span><br/>
            <span className="">High: {this.props.weather.maxTemp}</span><br/>
            <span className="">Humitidy: {this.props.weather.humidity}</span><br/>
          </div>
        </div>
      </FadeIn>


    )
  }
}
