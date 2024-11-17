import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  public getHello(): string {
    return ' MYEOW!';
  }

  public getIntroduce(): string {
    return ' My name is Tom!';
  }
}
