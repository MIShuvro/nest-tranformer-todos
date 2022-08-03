import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import mongoose from 'mongoose';


@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService)=>{
        console.log('DB URL', configService.get('MONGO_DB_URL'))
        if(configService.get('ENABLE_MONGO_DB_LOG')){
          mongoose.set('debug', true)
        }
        return {
          uri: configService.get('MONGO_DB_URL')
        }
      }
    })
  ]
})
export class DatabaseModule{}
