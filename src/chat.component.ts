import { Component, OnInit } from '@angular/core';
import { LivestreamService } from '../livestream.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {
  messages: any[] = [];

  constructor(private stream: LivestreamService) {}

  ngOnInit() {
    this.stream.messages$.subscribe(msgs => {
      this.messages = msgs;
    });
  }

  getMessageLength(msg: any) {
    return msg.text.length;
  }
}
