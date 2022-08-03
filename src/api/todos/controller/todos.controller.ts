import { Body, Controller, Post } from '@nestjs/common';
import { TodosService } from '../service/todos.service';
import { TodoRequestDto } from '../dto/req/todo-request.dto';
import { TodoResDto } from '../dto/res/todo-res.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Todo')
@Controller('todos')
export class TodosController {
  constructor(private todoService: TodosService) {
  }

  @Post()
   async createTodo(@Body() dto: TodoRequestDto): Promise<TodoResDto>{
    let todo = await this.todoService.create(dto)

     return todo
  }
}
