import ReactApexChart from 'react-apexcharts';
import Emptable from './employee';

const PieChart = (props) => {
    const options = {
        chart: {
            type: 'pie',
        },
        
        labels: ['Devlopers', 'Front-end', 'Testers', 'Others'], // Fixed typo in 'Front-end'
        series: [35, 25, 40, 12], // ta percentages for each slice
        legend: {
            labels: {
                colors: props.mode === 'dark' ? 'white' : 'green',
            },
        },
    };

    return (
        <div  style={{ color: props.mode === 'dark' ? 'white':'red' }}>
            <Emptable/>
            <h3 >Company Employees Salary performance</h3>
            <ReactApexChart options={options} series={options.series} type="pie" width="500" />
        </div>
    );
};

export default PieChart;
