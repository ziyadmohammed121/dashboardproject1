import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {
  Highcharts=Highcharts
  chartOptions={}
  constructor(){
    this.chartOptions={
      chart: {
        type: 'column'
    },
    title: {
        text: 'Marketing World'
    },
    subtitle: {
        text: 'Source: WorldMarket.com'
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'income level'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
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
        name: 'Tokyo',
        data: [1149.9, 7100.5, 1106.4, 10299.2, 14466.0, 17666.0, 13665.6, 56148.5, 6216.4,
            1964.1, 96665.6, 5466.4]

    }, {
        name: 'New York',
        data: [8334.6, 7668.8, 9866.5, 6693.4, 1666.0, 864.5, 1056.0, 1046.3, 9561.2, 8366.5,
            10666.6, 9266.3]

    }, {
        name: 'London',
        data: [4866.9, 38666.8, 36669.3, 46661.4, 46667.0, 4668.3, 5669.0, 5669.6, 5662.4, 66775.2, 5977.3,
            5661.2]

    }, {
        name: 'Berlin',
        data: [4266.4, 3663.2, 3466.5, 3669.7, 5266.6, 7566.5, 5667.4, 6660.4, 4667.6, 39666.1, 4666.8,
            5661.1]

    }]
    }
      
    }
  }



