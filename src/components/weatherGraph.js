import React, { Component } from 'react';
import Bar from './bar';


class BarChart extends Component {
    componentDidMount() {
    }


    render() {

      var style0 = {
        height: `${Math.round((this.props.hourlyTemp[0]- 273.15) * 9/5 + 32)}%`
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
                <span style={style0} title={this.props.hours[0]}></span>
              </li>
              <li>
                <span style={style1} title={this.props.hours[1]}></span>
              </li>
              <li>
                <span style={style2} title={this.props.hours[2]}></span>
              </li>
              <li>
                <span style={style3} title={this.props.hours[3]}></span>
              </li>
              <li>
                <span style={style4} title={this.props.hours[4]}></span>
              </li>
              <li>
                <span style={style5} title={this.props.hours[5]}></span>
              </li>
              <li>
                <span style={style6} title={this.props.hours[6]}></span>
              </li>
              <li>
                <span style={style7} title={this.props.hours[7]}></span>
              </li>
            </ul>
          </div>
        </div>

      )
    }
}
export default BarChart
