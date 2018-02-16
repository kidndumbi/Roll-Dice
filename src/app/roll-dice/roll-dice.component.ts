import { Component, OnInit } from '@angular/core';
import { Dice } from './model/DiceModel';
import { Observable } from 'rxjs/Observable';
import { RollDiceService } from '../roll-dice.service';
import { MatSnackBar } from '@angular/material';

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

  constructor(private diceservice: RollDiceService, public snackBar: MatSnackBar) {

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

      console.log('Dice roll done', data);

      let snackBarRef = this.snackBar.open('Dice roll done', "OK", {
        duration: 2000,
      });

      snackBarRef.onAction().subscribe(() => {
        console.log('The snack-bar action was triggered!');
        snackBarRef.dismiss();
      });

    });
  }

}
