import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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
    let obs = new Observable((observer) => {
      observer.next(Math.random());
    });

    // Subscriber 1
    obs.subscribe((data) => {
      console.log(data);
    });

    // Subscriber 2
    obs.subscribe((data) => {
      console.log(data);
    });
  }
}
