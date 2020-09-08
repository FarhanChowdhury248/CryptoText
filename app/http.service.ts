import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {

  constructor() { }

  myMethod() {
    return console.log('hey, wassup!');
  }
}
