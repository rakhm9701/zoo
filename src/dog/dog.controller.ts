import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { DogService } from './dog.service';

// localhost:3000/dog
@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  //   getHello
  @Get()
  public getHello(): string {
    return this.dogService.getHello();
  }

  //   getIntroduce
  @Get('greet/:id/:cartId')
  public getIntroduce(@Param() params: string, @Query() query: any): string {
    console.log('params:', params);
    console.log('query:', query);
    return this.dogService.getIntroduce();
  }

  //   modifyDetail
  @Post('edit')
  public modifyDetail(@Body() body: any): string {
    console.log('body:', body);
    return this.dogService.modifyDetail();
  }
}
