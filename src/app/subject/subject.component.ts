import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss',
})
export class SubjectComponent implements OnInit {
  ngOnInit() {
    // Observable
    // let obs = new Observable((observer) => {
    //   observer.next(Math.random());
    // });

    // Subjects
    const subject = new Subject();

    // Subscriber 1
    subject.subscribe((data) => {
      console.log(data);
    });

    // Subscriber 2
    subject.subscribe((data) => {
      console.log(data);
    });

    subject.next(Math.random());
  }
}
