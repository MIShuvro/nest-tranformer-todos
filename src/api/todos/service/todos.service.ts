import { Injectable } from '@nestjs/common';
import { TodoRepository } from '../repository/todo.repository';
import { TodoRequestDto } from '../dto/req/todo-request.dto';
import { TodoResDto } from '../dto/res/todo-res.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class TodosService {
  constructor(private todoRepository: TodoRepository) {}

  async create (dto: TodoRequestDto): Promise<TodoResDto>{
    let newTodo = await this.todoRepository.create(dto)
    return plainToInstance(TodoResDto, newTodo, {excludeExtraneousValues: true, enableImplicitConversion: true})
  }
}
