import { Component, OnInit } from '@angular/core';
import { Dice } from './model/DiceModel';
import { Observable } from 'rxjs/Observable';
import { RollDiceService } from '../roll-dice.service';

@Component({
  selector: 'app-roll-dice',
  template: `
  <div class="row">
  <div class="col-lg-2" style="margin-top:20px;">
  <app-dice-frequency></app-dice-frequency>
  
  </div>
  <div class="col-lg-10">
  <button (click)="rollDice()" class="btn btn-lg btn-success">Roll Dice</button>
  <div class="row">
    <div class="col-lg-2" *ngFor="let d of dice$ | async" ><app-dice [selected]="d.success" [dicesize]= "diceSize"  [diceNumber]="d.side"></app-dice></div>
  </div>
  </div>
  </div>

  `,
  styles: []
})
export class RollDiceComponent implements OnInit {

  dice$: Observable<Dice[]>;
  diceSize = '3em';

  constructor(private diceservice: RollDiceService) {
    this.dice$ = this.diceservice.getDice(); 
  }

  ngOnInit() {
    
  }

  rollDice() {

    this.diceservice.rollDice();
    
    
  }

}
