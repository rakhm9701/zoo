import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// localhost:3000/detail
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // getHello
  @Get()
  public getHello(): string {
    return this.appService.getHello();
  }

  // getDetail
  @Get("detail")
  public getDetail(): string {
    return this.appService.getDetail();
  }
}
