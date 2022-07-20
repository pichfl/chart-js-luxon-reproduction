import Component from '@glimmer/component';
import { action } from '@ember/object';

import { DateTime } from 'luxon';
import { Chart } from '../utils/chartjs';

export default class ChartComponent extends Component {
  @action
  renderChart(element) {
    new Chart(element, {
      type: 'line',
      data: {
        datasets: [
          {
            data: [
              {
                x: DateTime.now().toISODate(),
                y: 3,
              },
              {
                x: DateTime.now().minus({ days: 1 }).toISODate(),
                y: 1,
              },
              {
                x: DateTime.now().minus({ days: 2 }).toISODate(),
                y: 2,
              },
            ],
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day',
            },
          },
        },
      },
    });
  }
}
