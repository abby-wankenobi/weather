import React, { Component } from 'react';
import Bar from './bar';


class BarChart extends Component {

  render() {


    return (

      <div className="graphContainer">
        <div className="graph">
          <ul class="chart">
            {
              this.props.hours.map((hour, index) =>
                <Bar key={index} temp={this.props.hourlyTemp[index]} hour={this.props.hours[index]}/>
            )}

          </ul>
        </div>
      </div>

    )
  }
}
export default BarChart
