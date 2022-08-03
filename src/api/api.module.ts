import { Module } from '@nestjs/common';
import { IndexModule } from './index/index.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@common/database/database.module';
import { TodosModule } from './todos/todos.module';



@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true
  }), IndexModule, DatabaseModule, TodosModule],
  controllers: [],
  providers: []
})
export class ApiModule {

}
