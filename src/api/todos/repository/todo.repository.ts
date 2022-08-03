import { BaseRepository } from '@common/database/repository/base.repository';
import { Todo, TodoDocument } from '../schema/todo.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


export  class TodoRepository extends BaseRepository<TodoDocument>{
  constructor(
    @InjectModel(Todo.name)
    private todo: Model<TodoDocument>
  ) {
    super(todo);
  }


}
