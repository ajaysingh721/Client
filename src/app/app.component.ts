import { Component, OnInit } from '@angular/core';
import { HelloRequest } from '../generated/greet.pb';
import { GreeterClient } from '../generated/greet.pbsc';
import { StreamServiceClient } from '../generated/stream.pbsc';
import { StreamRequest, StreamResponse } from '../generated/stream.pb';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'grpc-ui';
  message!: string;
  subs!: Subscription;
  messages: any[] = [];

  constructor(
    private greet: GreeterClient,
    private stream: StreamServiceClient
  ) {}

  ngOnInit(): void {
    this.greet
      .sayHello(new HelloRequest({ name: 'Ajay' }))
      .subscribe(r => (this.message = r.message));
  }

  startStream() {
    this.subs = this.stream
      .fetchResponse(new StreamRequest({ id: 1 }))
      .subscribe({
        next: (r: StreamResponse) => this.messages.push(r.toObject().result),
        error: err => console.log(err)
      });
  }

  stopStream() {
    this.subs.unsubscribe();
  }
}
