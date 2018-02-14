import { Component, OnInit } from '@angular/core';
import { Dice } from './model/DiceModel';
import { Observable } from 'rxjs/Observable';
import { RollDiceService } from '../roll-dice.service';

@Component({
  selector: 'app-roll-dice',
  templateUrl: "./roll-dice.component.html",
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
