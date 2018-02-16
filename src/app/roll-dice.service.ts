import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Dice } from './roll-dice/model/DiceModel';
import { Promise } from 'q';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RollDiceService {

  //dice$: Observable<Dice[]>;
  //dice2$: Observable<Dice[]>;
  //private observer: Observer<Dice[]>;
 // private observer2: Observer<Dice[]>;

  private subject = new Subject();
  diceNotify$ = this.subject.asObservable();

  private dice: Dice[] = [];
  private dice2: Dice[] = [];

  constructor() {

    this.initializeDice();
    this.emitDice();
    

    // this.dice$ = new Observable(obs => {
    //   this.observer = obs;
    //   this.observer.next(this.dice);
    // });

    // this.dice2$ = new Observable(obs => {
    //   this.observer2 = obs;
    //   this.observer2.next(this.dice2);
    // });

  }

  emitDice(){
    this.subject.next(this.dice);
  }

  // getDice(): Observable<Dice[]> {
  //   return this.dice$;
  // }

  // getDice2(): Observable<Dice[]> {
  //   return this.dice2$;
  // }

  private initializeDice() {
    this.dice = [];
    this.dice2 = [];
    for (let i = 1; i != 7; i++) {
      this.dice.push({ side: i, success: false, count: 0 });
      this.dice2.push({ side: i, success: false, count: 0 });
    }
  }

  private resetSelected(){
    this.dice.forEach(d => {
        d.success = false;
    });
    this.dice2.forEach(d => {
      d.success = false;
  });
  }

  private randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  rollDice():Promise<boolean> {
    this.resetSelected();
 
    return  Promise((resolve, reject ) => {
      let counter = 1;
      let inter = setInterval(() =>{ 
        this.resetSelected();    
          counter += 1;
          let randomeNumber: number = this.randomIntFromInterval(1, 6)
          let randomeNumber2: number = this.randomIntFromInterval(1, 6)
          this.setSuccessRoll(randomeNumber, randomeNumber2);
          //this.observer.next(this.dice);
          //this.observer2.next(this.dice2);

          if(counter === 20){
          clearInterval(inter);
          this.setSuccessCount(randomeNumber, randomeNumber2);
          resolve(true)
          }
            
      }, 100)
    });

  }

  //triggerd after every randon number is choose
  private setSuccessRoll(side: number, side2:number) {
    this.dice.forEach(d => {
      if (d.side === side) {
        d.success = true;
      }
    });
    this.dice2.forEach(d => {
      if (d.side === side2) {
        d.success = true;
      }
    });
  }

  //triggered when interval is stopped
  private setSuccessCount(side: number, side2:number) {
    this.dice.forEach(d => {
      if (d.side === side) {
        d.count += 1;
      }
    });
    this.dice2.forEach(d => {
      if (d.side === side2) {
        d.count += 1;
      }
    });
  }



}
