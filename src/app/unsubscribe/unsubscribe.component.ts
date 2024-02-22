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
  data1: number[] = [];
  data2: number[] = [];
  data3: number[] = [];
  subscribe1;
  subscribe2;
  subscribe3;

  OnSubscribe1() {
    this.subscribe1 = this.counter.subscribe((val) => {
      this.data1.push(val);
    });
  }
  OnSubscribe2() {
    this.subscribe2 = this.counter.subscribe((val) => {
      this.data2.push(val);
    });
  }
  OnSubscribe3() {
    this.subscribe3 = this.counter.subscribe((val) => {
      this.data3.push(val);
    });
  }

  OnUnsubscribe1() {
    this.subscribe1.unsubscribe();
  }
  OnUnsubscribe2() {
    this.subscribe2.unsubscribe();
  }
  OnUnsubscribe3() {
    this.subscribe3.unsubscribe();
  }
}
