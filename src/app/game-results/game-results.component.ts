import { Component, OnInit } from "@angular/core";
import { GameService } from "../game.service";
import { Ball } from "../ball/ball.model";
import { Subscription } from "rxjs";
import { BallSelectorService } from "../ball-selector.service";
import { BetSlipService } from "../bet-slip.service";

@Component({
  selector: "app-game-results",
  templateUrl: "./game-results.component.html",
  styleUrls: ["./game-results.component.scss"],
})
export class GameResultsComponent implements OnInit {
  winnerBall: Ball;
  isWinner: boolean;
  moneyWon: number;
  gameResultsDisplay: boolean = false;
  gameResultsSubs: Subscription;

  constructor(
    private gameService: GameService,
    private ballSelectorService: BallSelectorService,
    private betSlipService: BetSlipService
  ) {}

  ngOnInit(): void {
    this.gameResultsSubs = this.gameService.displayGameResults.subscribe(
      (results) => {
        this.gameResultsDisplay = true;
        this.winnerBall = new Ball(results.winnerNumber);

        if (results.isWinnerNumber) {
          this.isWinner = true;
          this.moneyWon = results.totalMoney;
        }
      }
    );
  }

  clearGame() {
    this.gameResultsDisplay = false;
    this.isWinner = false;
    this.moneyWon = 0;
    this.ballSelectorService.clearBallSelector();
    this.betSlipService.clearBetSlip.next();
  }

  onDestroy() {
    this.gameResultsSubs.unsubscribe();
  }
}
