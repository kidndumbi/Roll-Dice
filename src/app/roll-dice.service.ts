import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Dice } from './roll-dice/model/DiceModel';

@Injectable()
export class RollDiceService {

  dice$: Observable<Dice[]>;
  private observer: Observer<Dice[]>

  private dice: Dice[] = [];

  constructor() {

    this.initializeDice();
    this.dice$ = new Observable(obs => {
      this.observer = obs;
      this.observer.next(this.dice);
    });

  }

  getDice(): Observable<Dice[]> {
    return this.dice$;
  }

  private initializeDice() {
    this.dice = [];
    for (let i = 1; i != 7; i++) {
      this.dice.push({ side: i, success: false, count: 0 });
    }
  }

  private resetSelected(){
    this.dice.forEach(d => {
        d.success = false;
    });
  }

  private randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  rollDice() {
    this.resetSelected();
    let randomeNumber: number = this.randomIntFromInterval(1, 6)
    this.setSuccessRoll(randomeNumber);
    this.observer.next(this.dice);
  }

  private setSuccessRoll(side: number) {
    this.dice.forEach(d => {
      if (d.side === side) {
        d.success = true;
        d.count += 1;
      }
    });
  }

}
