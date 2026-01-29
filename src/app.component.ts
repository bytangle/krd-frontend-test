import { Component, OnInit } from '@angular/core';
import { LivestreamService } from './livestream.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  viewers = 0;

  constructor(public stream: LivestreamService) {}

  ngOnInit() {
    this.stream.viewers$.subscribe(v => {
      this.viewers = v;
    });
  }

  formatViewers(v: number): string {
    return v.toLocaleString();
  }
}
