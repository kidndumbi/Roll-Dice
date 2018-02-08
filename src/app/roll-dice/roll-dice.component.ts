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
    <div class="col-lg-2" *ngFor="let d of dice$ | async" >
    <app-dice [selected]="d.success" 
    [dicesize]= "diceSize"  
    [diceNumber]="d.side" [boxHeight]="boxHeight" [boxWidth]="boxWidth" ></app-dice>
    </div>
  </div>
  <div class="row">
  <div class="col-lg-2" *ngFor="let d of dice2$ | async" >
  <app-dice [selected]="d.success" 
  [dicesize]= "diceSize"  
  [diceNumber]="d.side" [boxHeight]="boxHeight" [boxWidth]="boxWidth" ></app-dice>
  </div>
</div>
  </div>
  </div>

  `,
  styles: []
})
export class RollDiceComponent implements OnInit {

  dice$: Observable<Dice[]>;
  dice2$: Observable<Dice[]>;
  diceSize = '3em';
  boxHeight = "100px";
  boxWidth = "100px";

  constructor(private diceservice: RollDiceService) {
    this.dice$ = this.diceservice.getDice(); 
    this.dice2$ = this.diceservice.getDice2(); 
  }

  ngOnInit() {
    
  }

  rollDice() {

    this.diceservice.rollDice().then(data => {
      console.log('Dice roll done',data);
    });
    
    
  }

}
