import { Component, computed, effect, inject, Injector, Signal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { ChatSession, Metrics } from '../model/metric.model';
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
  doubleCount: Signal<string> = computed(() => this.title());
  private injector =  inject(Injector)
  private controller = new WeakMap<ChatSession, string>();
  private session: ChatSession;

  constructor() {
    this.trigger();
  }


  metricData = toSignal(this.getMetricsData().pipe(
    map(metric => {
      metric.id = 2

      return metric;
    })
  ))

  getMetricsData():Observable<Metrics> {
    const data: Metrics = {
      id: 1,
      name: 'Metric Name'
    }

    return of(data);
    
  }

  trigger(){
  const session1 = new ChatSession();
  const session2 = new ChatSession();

  this.session = session1;

  this.controller.set(session1, 'value1');
  this.controller.set(session2, 'value1');

  session1.state.set('streaming');
  session2.state.set('streaming');
  //session2.threadId.set('threadIdOfSession2')

  const result = this.controller.get(session2);
  const isEqual = session1 === session1

  }

  initializeLogging() :void {
    effect(() => {
      console.log(this.title());
    })
  }

}

