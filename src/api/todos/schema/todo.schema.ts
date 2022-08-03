import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Status } from '@common/utils/status';
import { Document } from 'mongoose';


export type TodoDocument = Todo & Document;

export class Todo{

  @Prop({type: String})
  name: string

  @Prop({type: Date})
  start_at: Date

  @Prop({type: Date})
  end_at: Date

  @Prop({enum: Status, default: Status.UPCOMING, type: String})
  status: Status

}

export const TodoSchema = SchemaFactory.createForClass(Todo);
