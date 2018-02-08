import { Routes } from '@angular/router';
import { RollDiceComponent } from './roll-dice/roll-dice.component';



export const appRoutes: Routes = [
    { path: 'roll-dice', component: RollDiceComponent },
    {
        path: '',
        redirectTo: '/roll-dice',
        pathMatch: 'full'
    },
    { path: '**', component: RollDiceComponent }
];


