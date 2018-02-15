import { Component, OnInit, Input } from '@angular/core';
import { Dice } from '../model/DiceModel';
import { Observable } from 'rxjs/Observable';
import { RollDiceService } from '../../roll-dice.service';
import 'rxjs/add/observable/merge';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-dice-frequency',
  templateUrl:'./dice-frequency.component.html',
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

  @Input() dice$: Observable<Dice[]>;
  //dice2$: Observable<Dice[]>;

  diceFrequency: Dice[];

  allDice$: Observable<Dice[]>;
  @Input() bgColor:string;
  diceSize = '2em';
  boxHeight = "70px";
  boxWidth = "70px";

  constructor(private diceService: RollDiceService) {
    //this.dice$ = this.diceService.getDice();

  }

  ngOnInit() {
 
  }

  private initializeDice() {
    this.diceFrequency = [];
    for (let i = 1; i != 7; i++) {
      this.diceFrequency.push({ side: i, success: false, count: 0 });

    }
  }

  updateFrequency(dice:Dice[]){
     
      this.diceFrequency.forEach(d => {
            let getDice = dice.find(dice => {
                return d.side === dice.side;
            });

      });
  }

}
