import React from "react";
import ReactApexChart from "react-apexcharts";
import "./BarChart.scss"

export class BarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        }
      },
      series: [{
        name: 'Sales',
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
      }]
    };
  }

  render() {
    return (
      <div className="chart-container">
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={600}
            width={1000}
          />
        </div>
      </div>
    );
  }
}
