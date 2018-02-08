import { Component, OnInit } from '@angular/core';
import { Dice } from '../model/DiceModel';
import { Observable } from 'rxjs/Observable';
import { RollDiceService } from '../../roll-dice.service';
import 'rxjs/add/observable/merge';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-dice-frequency',
  template: `
  <div style="background-color:#292b2c; border-radius:10px">
  <div class="row"  *ngFor="let d of dice$ | async " >
  <div class="col-lg-6">
  <app-dice [dicesize] ="diceSize" 
      [diceNumber]="d.side" 
      [boxHeight]="boxHeight" 
      [boxWidth]="boxWidth">
  </app-dice>
  </div>
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
  dice2$: Observable<Dice[]>;

  diceFrequency: Dice[];

  allDice$: Observable<Dice[]>;
  diceSize = '2em';
  boxHeight = "70px";
  boxWidth = "70px";

  constructor(private diceService: RollDiceService) {
    this.dice$ = this.diceService.getDice();
    //this.initializeDice();

    // this.diceService.getDice2().subscribe(d => {
    //   console.log(d);
    //   this.updateFrequency(d);
    // });
    // this.diceService.getDice().subscribe(d => {
    //   console.log(d);
    //   this.updateFrequency(d);
    // });
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

            console.log(getDice);

            //d.count += getDice.count;;
      });
  }

}
