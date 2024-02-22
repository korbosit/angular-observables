import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // create with EventEmitter
  // 1.Create Event
  // CreateTask: EventEmitter<string> = new EventEmitter<string>();

  // The Subject is a special type of observable that allows values to be muticasted to many observes. Subjects are like EventEmmitters.
  // Create with Subjects
  CreateTask = new Subject<string>();

  // Observe
  OnCreateTask(value: string) {
    this.CreateTask.next(value);
  }

  constructor() {}
}
