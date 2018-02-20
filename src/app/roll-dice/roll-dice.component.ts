import { Component, OnInit } from '@angular/core';
import { Dice } from './model/DiceModel';
import { Observable } from 'rxjs/Observable';
import { RollDiceService } from '../roll-dice.service';
import { MatSnackBar } from '@angular/material';
import 'rxjs/add/operator/map';

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

  constructor(private diceservice: RollDiceService, public snackBar: MatSnackBar) {

  }

  ngOnInit() {

    this.dice$ = this.diceservice.subject;

    this.dice2$ = this.diceservice.subject2;

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
