import React from 'react';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const CashFlowBarChart = () => {
  const series = [
    {
        name: 'Income',
        data: [180, 90, 135, 114, 120, 145, 180, 90, 135, 114, 120, 145]
    },
    {
        name: 'Expends',
        data: [120, 45, 78, 150, 168, 99, 120, 45, 78, 150, 168, 99]
    }
];

const options:any = {
    chart: {
        type: 'bar',
        height: 210,
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '70%',
            borderRadius: 2
        }
    },
    fill: {
        opacity: [1, 0.4],
    },
    stroke: {
        show: true,
        width: 3,
        colors: ['transparent']
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        show: true,
        fontFamily: `'Public Sans', sans-serif`,
        offsetX: 10,
        offsetY: 10,
        labels: {
            useSeriesColors: false
        },
        markers: {
            width: 10,
            height: 10,
            radius: '50%',
            offsexX: 2,
            offsexY: 2
        },
        itemMargin: {
            horizontal: 15,
            vertical: 5
        }
    },
    colors: ['#04a9f5', '#04a9f5'],
    grid: {
        borderColor: '#00000010',
    },
    yaxis: {
        show: false
    }
};

return (
    <React.Fragment>
        <ReactApexChart series={series} options={options} type="bar" height={210} />
    </React.Fragment>
);
};

export default CashFlowBarChart;
