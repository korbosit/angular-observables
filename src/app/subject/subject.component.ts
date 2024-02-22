import { Component, OnInit } from '@angular/core';
import {
  AsyncSubject,
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss',
})

// A BehaviourSubject is a subject wich can hold an initial value wich it emits if no new value is emitted.A BehaviourSubject emits an initial value or last emitted value for a new subsc
export class SubjectComponent implements OnInit {
  ngOnInit() {
    // Observable
    // let obs = new Observable((observer) => {
    //   observer.next(Math.random());
    // });
    // // Subjects
    // const subject = new Subject();
    // const subject = new BehaviorSubject<number>(100);
    // const subject = new ReplaySubject();
    // // const subject = new ReplaySubject(2,1000);
    // subject.next(100);
    // subject.next(200);
    // subject.next(300);
    // Subscriber 1
    // subject.subscribe((data) => {
    //   console.log('Subscriber 1 ' + data);
    // });
    // // Subscriber 2
    // subject.subscribe((data) => {
    //   console.log('Subscriber 2 ' + data);
    // });
    // subject.next(2020);
    // // Subscriber 3
    // subject.subscribe((data) => {
    //   console.log('Subscriber 3 ' + data);
    // });
    // subject.next(2023);
    // AJAX CALL
    //   const subject = new Subject();
    //   const data = ajax('https://randomuser.me/api/');
    //   data.subscribe((res) => {
    //     console.log(res);
    //   });
    //   data.subscribe((res) => {
    //     console.log(res);
    //   });
    //   data.subscribe((res) => {
    //     console.log(res);
    //   });
    //   data.subscribe(subject);
    // }
    // ASYNC SUBJECT
    // const asyncSubject = new AsyncSubject();
    // asyncSubject.next(100);
    // asyncSubject.next(200);
    // asyncSubject.next(300);
    // // asyncSubject.complete();
    // // asyncSubject.next(300);
    // asyncSubject.subscribe((data) => console.log(`Subsciber 1: ${data}`));
    // asyncSubject.complete();
    // asyncSubject.next(400);
    // asyncSubject.complete();
    // asyncSubject.subscribe((data) => console.log(`Subsciber 2: ${data}`));

    // Promise vs Observable

    const promise = new Promise((resolve, reject) => {
      console.log('Promise is called');
      resolve(100);
    });

    promise.then((data) => {
      console.log(data);
    });

    const obs = new Observable((sub) => {
      console.log('Observable is called');
      sub.next(100);
      sub.next(200);
      sub.next(300);
    });

    obs.subscribe((data) => console.log(`Subsciber`, data));
  }
}
