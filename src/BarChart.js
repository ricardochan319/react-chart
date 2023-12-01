// src/BarChart.js

import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Monthly Sales (in thousands)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          data: [65, 59, 80, 81, 56],
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    const myChart = new Chart(chartRef.current, {
      type: "bar",
      data: data,
      options: options,
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default BarChart;
