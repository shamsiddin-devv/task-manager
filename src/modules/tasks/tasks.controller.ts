import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {};
  
  @Get()
  findAll() {
    return this.tasksService.findAll();
  };

  @Post()
  create(@Body('title') title: string) {
    return this.tasksService.create(title);
  };
};
