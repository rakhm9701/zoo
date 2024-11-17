import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  public getHello(): string {
    return 'WOW, WOW!';
  }

  public getIntroduce(): string {
    return ' My name is Bobik!';
  }

  public modifyDetail(): string {
    return 'Successfully modifyed!';
  }
}
