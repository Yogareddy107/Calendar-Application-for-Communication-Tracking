import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CommunicationFrequencyChart = () => {
  const data = {
    labels: ["LinkedIn Post", "Email", "Phone Call", "Visit", "Other"],
    datasets: [
      {
        label: "Frequency",
        data: [10, 15, 8, 12, 5], // Replace with your actual data
        backgroundColor: ["#4CAF50", "#2196F3", "#FFC107", "#FF5722", "#9C27B0"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Communication Frequency",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default CommunicationFrequencyChart;
