import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const LineChart = () => {
  // Chart data and configuration
  const data = {
    labels: ['2021-02-03', '2021-02-04', '2021-02-05', '2021-02-06', '2021-02-07', '2021-02-08', '2021-02-09', '2021-02-10'],
    datasets: [
      {
        label: 'Exponential Growth',
        data: [0, 0, 0, 0, 0, 0, 0, 1.5],  // Values for exponential increase on the last point
        borderColor: 'skyblue', // Line color
        borderWidth: 2,
        pointBackgroundColor: 'skyblue', // Point color on the line
        pointBorderColor: 'skyblue',
        fill: false, // Do not fill below the line
      },
    ],
  };

  const options = {
    responsive: true,  // Ensures chart is responsive to parent container
    maintainAspectRatio: false,  // Disable default aspect ratio for better control
    scales: {
      x: {
        ticks: {
          color: 'gray', // X-axis text color
        },
        grid: {
            display: false,
        },
      },
      y: {
        min: 0,
        max: 1,
        ticks: {
          stepSize: 0.25, // Increments by 0.25
          color: 'gray', // Y-axis text color
        },
        grid: {
          display: false, // Disable grid lines on y-axis
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hides the legend
      },
    },
  };

  return (
    <div className='w-full h-52'>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
