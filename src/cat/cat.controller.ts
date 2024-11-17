import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';

// localhost:3000/cat/greet
@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  // getHello
  @Get()
  public getHello(): string {
    return this.catService.getHello();
  }

  // getIntroduce
  @Get('greet')
  public getIntroduce(): string {
    return this.catService.getIntroduce();
  }
}
