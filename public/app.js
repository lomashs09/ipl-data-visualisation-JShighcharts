function fetchAndVisualizeData() {
    fetch('../data.json')
    .then(r => r.json())
    .then(data => {
      visualizeData(data);
      visualizeDataWon(data);
      visualizeDataRun(data);
      visualizeDataEconomy(data)
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
        categories: Object.keys(data["matchesPlayed"]),
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
        data: Object.values(data["matchesPlayed"])
      }]
    });
}
fetchAndVisualizeData();

function visualizeDataWon(data) {
Highcharts.chart('new-container', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Total Matches Won Per Team Per Year 2013-17'
  },
  subtitle: {
    text: "Source: iplt20.com"
  },
  xAxis: {
    categories: ['2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018']
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Total Matches Won Per Team Per Year'
    },
    stackLabels: {
      enabled: true,
      style: {
        fontWeight: 'bold',
        color: ( // theme
          Highcharts.defaultOptions.title.style &&
          Highcharts.defaultOptions.title.style.color
        ) || 'gray'
      }
    }
  },
  legend: {
    align: 'right',
    x: -30,
    verticalAlign: 'top',
    y: 25,
    floating: true,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || 'white',
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false
  },
  tooltip: {
    headerFormat: '<b>{point.x}</b><br/>',
    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      dataLabels: {
        enabled: true
      }
    }
  },
  series: data.matchesWon
});
}
// Create the chart
function visualizeDataRun(data) {
  Highcharts.chart("new1-container", {
    chart: {
      type: "column"
    },
    title: {
      text: "Extra Runs Conceded By Teams in 2016"
    },
    subtitle: {
      text: "Source: iplt20.com"
    },
    xAxis: {
      categories: Object.keys(data["extraRunsObj"]),
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: "Extra Runs Conceded"
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
      name: 'IPl Teams',
      data: Object.values(data["extraRunsObj"])
    }]
  });
}
function visualizeDataEconomy(data) {
  Highcharts.chart("eco-container", {
    chart: {
      type: "bar"
    },
    title: {
      text: "Top 10 Economical Bowler 2015"
    },
    subtitle: {
      text: "Source: iplt20.com"
    },
    xAxis: {
      categories: Object.keys(data["topEconomy"]),
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy of Bowler"
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
      name: 'Economy',
      data: Object.values(data["topEconomy"])
    }]
  });
}