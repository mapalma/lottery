import { Injectable } from "@angular/core";
import { Ball } from "./ball/ball.model";
import { Subject } from "rxjs";
import { GameResults } from "./game-results/game-results.model";

@Injectable({
  providedIn: "root",
})
export class GameService {
  constructor() {}

  winnerNumber: number;
  isWinnerNumberFound: boolean = false;
  totalMoney: number = 0;
  displayGameResults = new Subject<GameResults>();

  randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  isWinnerBall(selectedBalls: Ball[], winner: number) {
    const result = selectedBalls.find((ball) => ball.ballNumber == winner);

    if (result) {
      return true;
    }
    return false;
  }

  updateMoney(money: number) {
    this.totalMoney = money * 1.5;
  }

  startGame(selectedBalls: Ball[], money: number) {
    this.winnerNumber = this.randomInteger(1, 10);
    this.isWinnerNumberFound = this.isWinnerBall(
      selectedBalls,
      this.winnerNumber
    );

    if (this.isWinnerNumberFound) {
      this.updateMoney(money);
    }

    this.displayGameResults.next(
      new GameResults(
        this.isWinnerNumberFound,
        this.winnerNumber,
        this.totalMoney
      )
    );
  }
}
