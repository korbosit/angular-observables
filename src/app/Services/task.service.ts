import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // 1.Create Event
  CreateTask: EventEmitter<string> = new EventEmitter<string>();

  OnCreateTask(value: string) {
    this.CreateTask.emit(value);
  }

  constructor() {}
}
