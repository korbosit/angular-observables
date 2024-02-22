import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  newTask: string = '';

  taskService: TaskService = inject(TaskService);

  OnCreateTask() {
    console.log(this.newTask);
    this.taskService.OnCreateTask(this.newTask);
  }
}
