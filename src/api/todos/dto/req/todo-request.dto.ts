import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class TodoRequestDto{

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string

  @IsNotEmpty()
  @IsString()
  start_at: Date

  @IsString()
  @IsString()
  end_at: Date

}
