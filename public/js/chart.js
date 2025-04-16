var options = {
    series: window.commitsChartData.series,
    chart: {
        height: 350,
        type: 'area'
    },
    title: {
        text: 'Graphique des commits',
        style: {
            fontSize: '30px',
            fontWeight: 'bold',
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: window.commitsChartData.dates
    },
    tooltip: {
        x: {
            type: 'datetime'
        },
    },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
