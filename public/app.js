function fetchAndVisualizeData() {
    fetch('../matchesPlayedPerYear.json')
    .then(r => r.json())
    .then(data => {
        visualizeData(data);
    })
}

function visualizeData(data) {
    Highcharts.chart("container", {
      chart: {
        type: "column"
      },
      title: {
        text: "Total Matches Played Per Year 2008-17"
      },
      subtitle: {
        text: "Source: iplt20.com"
      },
      xAxis: {
        categories: Object.keys(data),
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: "Number of Matches Per Year"
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y} matches</b></td></tr>',
        footerFormat: "</table>",
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [{
        name: 'Matches Played per Season',
        data: Object.values(data)
      }]
    });
}

fetchAndVisualizeData();