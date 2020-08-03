import { Injectable } from "@angular/core";
import { Ball } from "./ball/ball.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BallSelectorService {
  selectedBallNumber = new Subject<number>();

  balls: Ball[] = [
    new Ball(1),
    new Ball(2),
    new Ball(3),
    new Ball(4),
    new Ball(5),
    new Ball(6),
    new Ball(7),
    new Ball(8),
    new Ball(9),
    new Ball(10),
  ];

  constructor() {}

  disableBalls() {
    this.balls = this.balls.map((ball) => {
      ball.chosenBall = true;
      return ball;
    });
  }

  clearBallSelector() {
    this.balls = this.balls.map((ball) => {
      ball.chosenBall = false;
      return ball;
    });
  }
}
