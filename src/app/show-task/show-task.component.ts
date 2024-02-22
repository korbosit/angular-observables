import { TaskService } from './../Services/task.service';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.scss',
})
export class ShowTaskComponent implements OnInit {
  tasks: string[] = ['task 1', 'task 2', 'task 3'];

  taskService: TaskService = inject(TaskService);

  // observe from TaskService
  ngOnInit() {
    this.taskService.CreateTask.subscribe((value) => {
      this.tasks.push(value);
    });
  }
}
