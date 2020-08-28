// Individuals charts.

var ctx_individuals = document.getElementById('individuals').getContext("2d")
var gradientFillIndividuals = ctx_individuals.createLinearGradient(0, 0, 0, 100);
gradientFillIndividuals.addColorStop(0, "rgba(11, 11, 56, 100)");
gradientFillIndividuals.addColorStop(1, "rgba(2, 136, 168, 100)");
var myChart = new Chart(ctx_individuals, {
    type: 'line',
    data: {
        labels: ["JUN 19", "JUN 19", "AUG 19", "OCT 19", "NOV 19", "DEC 19"],
        datasets: [{
            label: "Data",
            fill: true,
			backgroundColor: gradientFillIndividuals,
            borderWidth: 2,
            data: [100, 120, 150, 170, 180, 170, 160]
        }]
    },
    options: {
    	title: {
            display: true,
            text: 'Individuals'
        },
        legend: {
            position: "none"

        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "white",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20
                },
                gridLines: {
                    drawTicks: false,
                    display: false
                }
            }],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 20,
                    fontColor: "white",
                    fontStyle: "bold"
                }
            }]
        }
    }
});

// Compaines charts.

var ctx_companies = document.getElementById('companies').getContext("2d")
var gradientFillCompanies = ctx_companies.createLinearGradient(0, 0, 0, 100);
gradientFillCompanies .addColorStop(0, "rgba(11, 11, 56, 100)");
gradientFillCompanies .addColorStop(1, "rgba(153, 2, 163, 1)");

var myChart = new Chart(ctx_companies, {
    type: 'line',
    data: {
        labels: ["JUN 19", "JUN 19", "AUG 19", "OCT 19", "NOV 19", "DEC 19"],
        datasets: [{
            label: "Data",
            fill: true,
			backgroundColor: gradientFillCompanies ,
            borderWidth: 2,
            data: [100, 80, 120, 100, 180, 80, 160]
        }]
    },
    options: {
    	title: {
            display: true,
            text: 'Companies'
        },
        legend: {
            position: "none"
        },
        responsive:true,
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "white",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20
                },
                gridLines: {
                    drawTicks: false,
                    display: false
                }
            }],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 20,
                    fontColor: "white",
                    fontStyle: "bold"
                }
            }]
        }
    }
});

var ctx_total_signups = document.getElementById('total_singups').getContext("2d")

var data = {
    labels: ["Individuals ", "Companies"],
      datasets: [
        {
            fill: true,
            backgroundColor: [
                '#4effa1',
                '#ff56ee'],
            data: [248, 364],
            borderWidth: 0
        }
    ]
};

// Notice the rotation from the documentation.

var options = {
        title: {
            display: true,
            text: 'Total singups',
            },
        rotation: -0.7 * Math.PI
    };


// Chart declaration:
var myBarChart = new Chart(ctx_total_signups, {
    type: 'doughnut',
    data: data,
    options: options
});
// White fonts charts:
 
Chart.defaults.global.defaultFontColor = "#fff";
