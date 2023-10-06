import React from "react";
import ReactApexChart from "react-apexcharts";

export class BarMultiple extends React.Component {
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
      series: [
        {
          name: 'Дані 1',
          data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
        },
        {
          name: 'Дані 2',
          data: [20, 35, 42, 35, 50, 60, 80, 100, 120]
        }
      ]
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
