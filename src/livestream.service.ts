import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LivestreamService {
  messages$ = new BehaviorSubject<any[]>([]);
  viewers$ = new BehaviorSubject<number>(0);

  constructor() {
    setInterval(() => {
      const msgs = this.messages$.value;
      msgs.push({
        id: Date.now(),
        text: 'Message ' + msgs.length
      });
      this.messages$.next(msgs);
    }, 200);

    setInterval(() => {
      this.viewers$.next(Math.floor(Math.random() * 1000));
    }, 1000);
  }
}
