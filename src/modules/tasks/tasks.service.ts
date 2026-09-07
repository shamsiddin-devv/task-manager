import { Injectable } from '@nestjs/common';
import { Task } from './tasks.interface';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private idCounter = 1;

  findAll() {
    return this.tasks;
  };

  create(title: string): Task {
    const newTask: Task = { id: this.idCounter++, title, status: 'active' };
    this.tasks.push(newTask);
    return newTask;
  };
};
