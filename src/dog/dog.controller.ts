import { Controller, Get, Param, Query, Req, Res } from '@nestjs/common';
import { DogService } from './dog.service';

// localhost:3000/dog
@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get()
  public getHello(): string {
    return this.dogService.getHello();
  }

  @Get('greet/:id/:cartId')
  public getIntroduce(@Param() params: string, @Query() query: any): string {
    console.log('params:', params);
    console.log('query:', query);
    return this.dogService.getIntroduce();
  }
}
