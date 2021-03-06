const ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['0'],
        datasets: [{
            label: 'Temperature',
            data: [{
                x: 0,
                y: 0
            }]
        }]
    },
    options: {
        maintainAspectRatio: true,
        title: {
            display: true,
            text: "Temperature Over Time"
        },
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }],
            yAxes: [{
                scaleStartValue: 10,
                max: 50
            }]
        }
    }
});

function addData(time, temp) {
    if(temp == 0xDEADBEEF)
    {
        myChart.data.datasets[0].data.push({x:time, y:null});
    } else {
        myChart.data.datasets[0].data.push({x: time, y: temp});
    }
    myChart.update();
}
