import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
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

    const subject = new ReplaySubject();
    // const subject = new ReplaySubject(2,1000);

    subject.next(100);
    subject.next(200);
    subject.next(300);

    // Subscriber 1
    subject.subscribe((data) => {
      console.log('Subscriber 1 ' + data);
    });
    // Subscriber 2
    subject.subscribe((data) => {
      console.log('Subscriber 2 ' + data);
    });
    subject.next(2020);

    // Subscriber 3
    subject.subscribe((data) => {
      console.log('Subscriber 3 ' + data);
    });

    subject.next(2023);
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
  }
}
