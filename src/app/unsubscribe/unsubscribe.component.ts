import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './unsubscribe.component.html',
  styleUrl: './unsubscribe.component.scss',
})
export class UnsubscribeComponent {
  counter = interval(1000);
  data: number[] = [];
  subscribe1;

  OnSubscribe() {
    this.subscribe1 = this.counter.subscribe((val) => {
      this.data.push(val);
    });
  }

  OnUnsubscribe() {
    this.subscribe1.unsubscribe();
  }
}
