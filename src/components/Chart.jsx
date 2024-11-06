import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = ({ temperature, humidity, wind }) => {
  const canvasRef = React.useRef(null);

  const data = {
    labels: ['Temperature (°C)', 'Humidity (%)', 'Wind (km/h)'],
    datasets: [
      {
        label: 'Weather Metrics',
        data: [temperature, humidity, wind],
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, 'rgba(255, 99, 132, 0.8)');
          gradient.addColorStop(1, 'rgba(255, 159, 64, 0.8)');
          return gradient;
        },
        borderRadius: 10,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Enhanced Weather Data',
        color: '#333',
        font: {
          size: 18,
          weight: 'bold',
        },
        padding: 20,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#666',
          font: {
            size: 14,
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(200, 200, 200, 0.2)',
          borderDash: [5, 5],
        },
        ticks: {
          color: '#666',
          font: {
            size: 14,
          },
          stepSize: 10,
        },
      },
    },
    elements: {
      bar: {
        borderWidth: 2,
        borderRadius: 10,
      },
    },
  };

 
  const downloadPDF = async () => {
    const canvas = await html2canvas(canvasRef.current.canvas);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'landscape',
    });
    pdf.addImage(imgData, 'PNG', 10, 10, 280, 150); 
    pdf.save('chart.pdf');
  };

  return (
    <div>
      <Bar ref={canvasRef} data={data} options={options} />
      <button onClick={downloadPDF} style={{ marginTop: '10px', padding: '8px 16px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Download as PDF
      </button>
    </div>
  );
};

export default Chart;
