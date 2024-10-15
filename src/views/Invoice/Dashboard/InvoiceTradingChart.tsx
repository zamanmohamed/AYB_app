import React from 'react';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

function InvoiceTradingChart() {
  const options_invoice:any = {
    chart: {
      height: 300,
      type: 'line',
      toolbar: {
        show: false,
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
      }
    },
    legend: {
      show: false
    },
    stroke: {
      width: [0, 2],
      curve: 'smooth'
    },
    dataLabels: {
      enabled: false
    },
    series: [
      {
        name: 'TEAM A',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 25]
      },
      {
        name: 'TEAM B',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 35]
      }
    ],
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: 'vertical',
        opacityFrom: [0, 1],
        opacityTo: [0.5, 1],
        stops: [0, 100],
        hover: {
          inverseColors: false,
          shade: 'light',
          type: 'vertical',
          opacityFrom: 0.15,
          opacityTo: 0.65,
          stops: [0, 96, 100]
        }
      }
    },
    markers: {
      size: 3,
      colors: '#fFF',
      strokeColors:'#f4c22b',
      strokeWidth: 2,
      shape: "circle",
      hover: {
        size: 5,
      }
    },
    colors: ['#f4c22b', '#f4c22b'],
    labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    yaxis: {
      tickAmount: 3,
    },
    grid: {
      show: true,
      borderColor: '#00000010',
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tickAmount: 11
    },
  };

  return (
    <React.Fragment>
      <ReactApexChart options={options_invoice} series={options_invoice.series} type="line" height={300} />
    </React.Fragment>
  );
}

export default InvoiceTradingChart;
