import React, { Component } from 'react';
import Bar from './bar';
import { AreaChart } from 'react-charts-d3';



class WeatherGraph extends Component {

  areaData = () => {
    const data = [
      { key: 'Temp',
        values: [ {x: 'A', y: 25}]
      }
    ]

    if (this.props.hours) {
      this.props.hours.map((hour, index) => {
        data[0].values.push({
          x: `${this.props.hours[index]}`,
          y: Math.round((parseInt(`${this.props.hourlyTemp[index]}`) - 273.15) * 9/5 + 32)
        })
      })
    }


    return data
  }

  render() {


    console.log(this.areaData()[0])

    return (

      <div className="graphContainer">
        <div className="graph">
          <ul class="chart">
            {
              this.props.hours.map((hour, index) =>
                <Bar key={index} temp={this.props.hourlyTemp[index]} hour={this.props.hours[index]} rain={this.props.rain[index]}/>
            )}

          </ul>
        </div>



      </div>

    )
  }
}
export default WeatherGraph
