import { Controller, Get } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(@InjectDataSource() private dataSource: DataSource) {}

  @Get('ping')
  async ping() {
    const result = await this.dataSource.query('SELECT * FROM test');
    return {
      status: 'OK',
      data: result,
    };
  }
}
