var options = {
    chart: {
        type: 'area',
        stacked: true,

    },
    series: window.chartData,
    xaxis: {
        type: 'datetime'
    }
}

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
