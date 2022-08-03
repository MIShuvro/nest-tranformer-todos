import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Status } from '@common/utils/status';

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

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({enum: Object.values(Status)})
  @IsEnum(Status)
  status: Status

}
