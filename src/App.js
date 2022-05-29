import React, { useState } from "react";
import logo from "./logo.svg";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import data from "./data.json";

function App() {
  const [ chart, setChart ] = useState({
    labels: data.map((data)=> data.day),
    datasets: [
      {
        labels: "",
        data: data.map((data)=> data.amount),
        backgroundColor: ["hsl(10, 79%, 65%)"],
        hoverBackgroundColor: ["hsl(186, 34%, 60%)"],
        borderRadius: 3,
      }
    ],
  });
  const [chartOptions,setChartOptions] = useState({
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
    plugins: {
      legend: false,
    },
  })

  return (
    <div className="component">
      <div className="header">
        <div className="balance">
          <p>My balance</p>
          <span>$921.48</span>
        </div>
        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>
      </div>
      <div className="body">
        <h3>Spending - Last 7 days</h3>
        <div className="bar-chart">
          <Bar data={chart} options={chartOptions}/>
        </div>
        <hr></hr>
        <div className="bottom">
          <div className="bottom-left">
            <p>Total this month</p>
            <span>$478.33</span>
          </div>
          <div className="bottom-right">
            <span>+2.4%</span>
            <p>from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
