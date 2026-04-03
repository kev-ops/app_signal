import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root',
})
export class Signalr {
  private connection: signalR.HubConnection;

  constructor() {
    this.connection = new signalR.HubConnectionBuilder().withUrl('/chat').build();
  }

  onMessageReceived(callback: (chunk: string) => void) {
    this.connection.on('MessageReceived', callback);
  }
}


