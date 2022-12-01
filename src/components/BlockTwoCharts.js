import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";

function BlockTwoCharts() {
  return (
    <div className="block-two-container">
      <Graph />
      <Pie />
    </div>
  );
}

function Graph() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
    scales: {
      // to remove the labels
      x: {
        ticks: {
          display: true,
        },

        // to remove the x-axis grid
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      // to remove the y-axis labels
      y: {
        ticks: {
          display: true,
          beginAtZero: true,
        },
        // to remove the y-axis grid
        grid: {
          drawBorder: true,
          display: false,
        },
      },
    },
  };

  const labels = [
    "Jan",
    "",
    "Mar",
    "",
    "May",
    "",
    "Jul",
    "",
    "Sep",
    "",
    "Nov",
    "",
  ];

  const data = {
    labels,
    datasets: [
      {
        data: [
          0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000,
          25000, 35000,
        ],
        borderColor: "#4e73df",
        lineTension: 0.35,
        lable: "# $",
      },
    ],
  };

  return (
    <div className="graph-container">
      <h4 className="graph-title">Earnings Overview</h4>
      <div className="graph-info">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}

function Pie() {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ["Social", "Direct", "Referal"],
    datasets: [
      {
        label: "Customers %",
        data: [15, 55, 30],
        backgroundColor: ["#36b9cc", "#4e73df", "#1cc88a"],

        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="pie-container">
      <h4 className="pie-title">Revenue Sources</h4>
      <div className="pie-info">
        <Doughnut data={data} />
      </div>
    </div>
  );
}

export default BlockTwoCharts;
