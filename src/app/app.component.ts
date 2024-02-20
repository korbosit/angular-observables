import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

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

  //1. CREATE AN OBSERVABLE
  // Observable
  myObservable = new Observable((observer) => {
    setTimeout(() => {
      observer.next(1);
    }, 1000);
    setTimeout(() => {
      observer.next(2);
    }, 2000);
    setTimeout(() => {
      observer.next(3);
    }, 3000);
    // setTimeout(() => {
    //   observer.error(
    //     new Error('Something went wrong. Please try again later.')
    //   );
    // }, 3000);
    setTimeout(() => {
      observer.next(4);
    }, 4000);
    setTimeout(() => {
      observer.next(5);
    }, 5000);
    setTimeout(() => {
      observer.complete();
    }, 6000);
  });

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
