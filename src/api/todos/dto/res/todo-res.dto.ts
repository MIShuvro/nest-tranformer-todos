import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsEnum } from 'class-validator';
import { Status } from '@common/utils/status';
import mongoose from 'mongoose';


export class TodoResDto{

  @Expose()
  @ApiProperty()
  _id: mongoose.Types.ObjectId

  @Expose()
  @ApiProperty()
  name: string

  @Expose()
  @ApiProperty()
  start_at: Date

  @Expose()
  @ApiProperty()
  end_at: Date

  @Expose()
  @ApiProperty()
  @IsEnum(Status)
  status: Status

}

