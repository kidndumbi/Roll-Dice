import { Component, OnInit } from '@angular/core';
import { Dice } from '../model/DiceModel';
import { Observable } from 'rxjs/Observable';
import { RollDiceService } from '../../roll-dice.service';

@Component({
  selector: 'app-dice-frequency',
  template: `
  <div style="background-color:#292b2c; border-radius:10px">
  <div class="row"  *ngFor="let d of dice$ | async" >
  <div class="col-lg-6"><app-dice [dicesize] = "diceSize" [diceNumber]="d.side"></app-dice></div>
  <div class="col-lg-6 frequentcy"><span >{{ d.count }}</span></div>
  </div>
  </div>

  `,
  styles: [`
  
  .frequentcy {
    display: flex;
    padding-left:20px;
    /* align horizontal */
    align-items: center;
    /* align vertical */
    font-size:30px;
    color:white;

  }
  `]
})
export class DiceFrequencyComponent implements OnInit {

  dice$: Observable<Dice[]>;
  diceSize = '2em';

  constructor(private diceService: RollDiceService) {

     this.dice$ = diceService.getDice();

   }

  ngOnInit() {
  }

}
