import { Component, signal } from '@angular/core';
import { Card } from './pages/card/card';
import { Navigation } from './pages/navigation/navigation';

@Component({
  selector: 'app-root',
  imports: [Navigation, Card],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('app-signal');
}

