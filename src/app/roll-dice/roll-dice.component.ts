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

  dice: Dice[];
  dice2: Dice[];
  diceSize = '3em';
  boxHeight = "100px";
  boxWidth = "100px";

  constructor(private diceservice: RollDiceService) {

  }

  ngOnInit() {
    this.diceservice.subject.subscribe(d => {
         this.dice = d;
    });
    this.diceservice.subject2.subscribe(d => {
      this.dice2 = d;
 });
    
  }

  rollDice() {
    this.diceservice.rollDice().then(data => {
      console.log('Dice roll done',data);
    });
  }

}
