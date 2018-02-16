import { AngularMaterialModule } from './angular-material-Module/angular-material.module';
import { NotificationService } from './notification.service';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { appRoutes } from './Routing';

import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { RollDiceService } from './roll-dice.service';
import { RollDiceComponent } from './roll-dice/roll-dice.component';
import { DiceComponent } from './roll-dice/dice/dice.component';
import { DiceFrequencyComponent } from './roll-dice/dice-frequency/dice-frequency.component';




@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent, RollDiceComponent, DiceComponent, DiceFrequencyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [RollDiceService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
