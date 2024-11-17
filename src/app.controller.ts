import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// localhost:3000/detail
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public getHello(): string {
    return this.appService.getHello();
  }

  @Get("detail")
  public getDetail(): string {
    return this.appService.getDetail();
  }
}
