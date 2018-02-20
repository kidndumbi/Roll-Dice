import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/zip';

@Injectable()
export class ObservablesTestService {

  numbers: Observable<number[]>;

  constructor() { 
  
    this.numbers = new Observable();
    
  }

  getNumber(){
     return this.numbers;
  }

}
