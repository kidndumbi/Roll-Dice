import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dice',
  template: `
    <div id="box" [ngClass]="{'selectedDice': selected}">
    <span [style.font-size]= "dicesize" class="dice dice-{{diceNumber}}" title="Dice {{ diceNumber }}"></span>
    </div>
  `,
  styles: [`
  #box{
    height: 100px;
    width: 100px;
    font-size: 24px;
    font-style: oblique;
    color: #FFF;
    text-align: center;
    padding: 0 20px;
    margin: 20px;
    display: flex;
    justify-content: center;
    /* align horizontal */
    align-items: center;
    /* align vertical */
    border-radius: 10px;
  }

  .selectedDice {
    background-color:green;
  }
  `]
})
export class DiceComponent implements OnInit {

  @Input() diceNumber:number;
  @Input() selected:boolean;
  @Input() dicesize:string;

  constructor() { }

  ngOnInit() {

  }

}
