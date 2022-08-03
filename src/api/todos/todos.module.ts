import { Module } from '@nestjs/common';
import { TodosController } from './controller/todos.controller';
import { TodosService } from './service/todos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from './schema/todo.schema';
import { TodoRepository } from './repository/todo.repository';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Todo.name,
        useFactory: ()=>{
          const schema = TodoSchema
          schema.plugin(require('mongoose-paginate-v2'))
          return schema
        }
      }
    ])
  ],
  controllers: [TodosController],
  providers: [TodosService, TodoRepository]
})
export class TodosModule {}
