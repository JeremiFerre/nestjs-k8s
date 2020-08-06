import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hello } from './hello.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST ?? 'localhost',
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306,
      username: process.env.DB_USERNAME ?? 'root',
      password: process.env.DB_PASSWORD ?? 'root',
      database: process.env.DB_DATABASE ?? 'sample',
      entities: [Hello],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Hello]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
