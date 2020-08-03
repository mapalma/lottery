import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { BallSelectorComponent } from "./ball-selector/ball-selector.component";
import { BetSlipComponent } from "./bet-slip/bet-slip.component";
import { BallComponent } from "./ball/ball.component";
import { GameResultsComponent } from "./game-results/game-results.component";
import { DisplayBallComponent } from "./display-ball/display-ball.component";

@NgModule({
  declarations: [
    AppComponent,
    BallSelectorComponent,
    BetSlipComponent,
    BallComponent,
    GameResultsComponent,
    DisplayBallComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
