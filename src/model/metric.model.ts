import { Signal, signal } from "@angular/core"

export interface Metrics {
    name: string
    id: number
}

export type State  = 'idle' | 'streaming';

export class ChatSession {
    threadId = signal<string | null>(null);
    state = signal<State>('idle');

}

