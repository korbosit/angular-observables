import { resolve } from 'node:path';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable, of, from } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-observables';

  data: any[] = [];

  array1 = [1, 3, 5, 7, 9];
  array2 = ['A', 'B', 'C', 'D'];

  //1. CREATE AN OBSERVABLE
  // Observable
  // myObservable = new Observable((observer) => {
  //   setTimeout(() => {
  //     observer.next(1);
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next(2);
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next(3);
  //   }, 3000);
  //   // setTimeout(() => {
  //   //   observer.error(
  //   //     new Error('Something went wrong. Please try again later.')
  //   //   );
  //   // }, 3000);
  //   setTimeout(() => {
  //     observer.next(4);
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next(5);
  //   }, 5000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 6000);
  // });
  // The of operator creates an observable from the arguments that we pass into it.You can pass any number of arguments to of operator
  // Earch argument is emitted separately one after the other.It send the complete signal at the end.
  // myObservable = of(this.array1, this.array2, 20, 30, 'Hello', true);

  promiseData = new Promise((resolve, reject) => {
    resolve([10, 20, 30, 40, 50]);
  });

  // The from operator takes a single argument which can be iterated over and convers it into an observable
  myObservable = from(this.promiseData);
  // myObservable = from(this.array1);

  // Observer
  // next, error, complete
  GetAsyncData() {
    // this.myObservable.subscribe(
    //   (val: any) => {
    //     this.data.push(val);
    //   },
    //   (err) => {
    //     alert(err.message);
    //   },
    //   () => {
    //     alert('All the data streamed!');
    //   }
    // );
    this.myObservable.subscribe({
      next: (val: any) => {
        this.data.push(val);
        console.log(val);
      },
      error(err) {
        alert(err.message);
      },
      complete() {
        alert('All the data streamed!');
      },
    });
  }
}
