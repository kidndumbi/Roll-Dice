import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Dice } from './roll-dice/model/DiceModel';
import { Promise } from 'q';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class RollDiceService {

  private dice: Dice[] = [];
  private dice2: Dice[] = [];

  public subject: BehaviorSubject<Dice[]>;
  public subject2: BehaviorSubject<Dice[]>;

  constructor() {

    this.initializeDice();
    this.subject = new BehaviorSubject(this.dice);
    this.subject2 = new BehaviorSubject(this.dice2);

  }

  emitDice() {
    this.subject.next(this.dice);
    this.subject2.next(this.dice2);
  }


  private initializeDice() {
    this.dice = [];
    this.dice2 = [];
    for (let i = 1; i != 7; i++) {
      this.dice.push({ side: i, success: false, count: 0 });
      this.dice2.push({ side: i, success: false, count: 0 });
    }
  }

  private resetSelected() {
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

  rollDice(): Promise<boolean> {
    this.resetSelected();

    return Promise((resolve, reject) => {
      let counter = 1;
      let inter = setInterval(() => {
        this.resetSelected();
        counter += 1;
        let randomeNumber: number = this.randomIntFromInterval(1, 6)
        let randomeNumber2: number = this.randomIntFromInterval(1, 6)
        this.setSuccessRoll(randomeNumber, randomeNumber2);

        if (counter === 20) {
          clearInterval(inter);
          this.setSuccessCount(randomeNumber, randomeNumber2);
          resolve(true)
        }

      }, 100)
    });

  }

  //triggerd after every randon number is choose
  private setSuccessRoll(side: number, side2: number) {
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
  private setSuccessCount(side: number, side2: number) {
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
