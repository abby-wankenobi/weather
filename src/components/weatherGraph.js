import React, { Component } from 'react';
import Bar from './bar';


class BarChart extends Component {
  componentDidMount() {
  }

  handleTemp = (temp) => {
    return Math.round((temp - 273.15) * 9/5 + 32);
  }

  render() {

    var style0 = {
      height: `${this.handleTemp(this.props.hourlyTemp[0])}%`
    }
    var style1 = {
      height: `${Math.round((this.props.hourlyTemp[1]- 273.15) * 9/5 + 32)}%`
    }
    var style2 = {
      height: `${Math.round((this.props.hourlyTemp[2]- 273.15) * 9/5 + 32)}%`
    }
    var style3 = {
      height: `${Math.round((this.props.hourlyTemp[3]- 273.15) * 9/5 + 32)}%`
    }
    var style4 = {
      height: `${Math.round((this.props.hourlyTemp[4]- 273.15) * 9/5 + 32)}%`
    }
    var style5 = {
      height: `${Math.round((this.props.hourlyTemp[5]- 273.15) * 9/5 + 32)}%`
    }
    var style6 = {
      height: `${Math.round((this.props.hourlyTemp[6]- 273.15) * 9/5 + 32)}%`
    }
    var style7 = {
      height: `${Math.round((this.props.hourlyTemp[7]- 273.15) * 9/5 + 32)}%`
    }


    return (

      <div className="graphContainer">
        <div className="graph">
          <ul class="chart">
            <li>
              <span style={style0} className="mobileBar" title={this.props.hours[0]}></span><span className="degrees">{this.handleTemp(this.props.hourlyTemp[0])}<sup className="sup">&deg;</sup></span>
            </li>
            <li>
              <span style={style1} className="mobileBar" title={this.props.hours[1]}></span><span className="degrees">{this.handleTemp(this.props.hourlyTemp[1])}<sup className="sup">&deg;</sup></span>
            </li>
            <li>
              <span style={style2} className="mobileBar" title={this.props.hours[2]}></span><span className="degrees">{this.handleTemp(this.props.hourlyTemp[2])}<sup className="sup">&deg;</sup></span>
            </li>
            <li>
              <span style={style3} className="mobileBar" title={this.props.hours[3]}></span><span className="degrees">{this.handleTemp(this.props.hourlyTemp[3])}<sup className="sup">&deg;</sup></span>
            </li>
            <li>
              <span style={style4} className="mobileBar" title={this.props.hours[4]}></span><span className="degrees">{this.handleTemp(this.props.hourlyTemp[4])}<sup className="sup">&deg;</sup></span>
            </li>
            <li>
              <span style={style5} className="mobileBar" title={this.props.hours[5]}></span><span className="degrees">{this.handleTemp(this.props.hourlyTemp[5])}<sup className="sup">&deg;</sup></span>
            </li>
            <li>
              <span style={style6} className="mobileBar" title={this.props.hours[6]}></span><span className="degrees">{this.handleTemp(this.props.hourlyTemp[6])}<sup className="sup">&deg;</sup></span>
            </li>
            <li>
              <span style={style7} className="mobileBar" title={this.props.hours[7]}></span><span className="degrees">{this.handleTemp(this.props.hourlyTemp[7])}<sup className="sup">&deg;</sup></span>
            </li>
          </ul>
        </div>
      </div>

    )
  }
}
export default BarChart
