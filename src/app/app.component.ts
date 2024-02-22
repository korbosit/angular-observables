import { resolve } from 'node:path';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable, of, from, fromEvent } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'angular-observables';

  data: any[] = [];

  promiseData = new Promise((resolve, reject) => {
    resolve([10, 20, 30, 40, 50]);
  });

  // OBSERVABLE
  // myObservable - 2, 4, 6, 8, 10
  // Result - 10, 20, 30, 40, 50
  // The map operator is used to transform data emmited by a source observable in some way
  // myObservable = from([2, 4, 6, 8, 10]);
  // transformedObs = this.myObservable.pipe(
  //   map((val) => {
  //     return val * 5;
  //   })
  // );

  // OBSERVABLE
  // myObservable - 2, 4, 6, 8, 10, 12
  // Result - 10, 20, 30, 40, 50,60
  // The filter operator is used to filter data emitted by a source observable based on a given condition
  myObservable = from([2, 4, 6, 8, 10, 12]).pipe(
    map((val) => {
      return val * 5;
    }),
    filter((val, i) => {
      return val % 4 === 0;
    })
  );
  // transformedObs - 10, 20, 30, 40, 50,60
  // filteredObs = this.myObservable.pipe(
  //   map((val) => {
  //     return val * 5;
  //   }),
  //   filter((val, i) => {
  //     return val % 4 === 0;
  //   })
  // );
  // 20, 40, 60
  // filteredObs = this.transformedObs.pipe(
  //   filter((val, i) => {
  //     return val % 4 === 0;
  //   })
  // );

  // OBSERVE
  GetAsyncData() {
    this.myObservable.subscribe({
      next: (val: any) => {
        this.data.push(val);
      },
      error: (err) => {
        console.log(err.message);
      },
      complete: () => {
        console.log('All the data is streamed');
      },
    });
  }

  ngAfterViewInit() {}
}
