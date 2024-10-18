import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/User';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: 'localhost',
      port: 1521,
      username: 'your_username',
      password: 'your_password',
      sid: 'your_sid',   // e.g., XE or ORCL
      entities: [User],
      synchronize: true, // Turn off in production
    }),
    TypeOrmModule.forFeature([User]), // Import entities for your features
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
