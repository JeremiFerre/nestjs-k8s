import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Hello } from './hello.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Hello)
    private readonly helloRepository: Repository<Hello>,
  ) {}

  async getHello(): Promise<string> {
    const objs = await this.helloRepository.find();
    if (objs.length === 0) {
      await this.helloRepository.save({
        value: "hello",
      });
    }

    return 'Hello!';
  }
}
