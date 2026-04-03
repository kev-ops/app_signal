import { Component, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { Metrics } from '../model/metric.model';
import { Card } from './pages/card/card';
import { Navigation } from './pages/navigation/navigation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, Card],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('app-signal');
  metricData = toSignal(
    this.getMetricsData().pipe(
      map((metric) => {
        metric.id = 2;
        return metric;
      })
    )
  );

  getMetricsData(): Observable<Metrics> {
    const data: Metrics = {
      id: 1,
      name: 'Metric Name'
    };

    return of(data);
  }
}

