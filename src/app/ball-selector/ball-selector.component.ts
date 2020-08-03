import { Component, OnInit } from "@angular/core";
import { Ball } from "../ball/ball.model";
import { BallSelectorService } from "../ball-selector.service";
import { BetSlipService } from "../bet-slip.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-ball-selector",
  templateUrl: "./ball-selector.component.html",
  styleUrls: ["./ball-selector.component.scss"],
})
export class BallSelectorComponent implements OnInit {
  balls: Ball[];
  chooseBallSubs: Subscription;
  betIsFullSubs: Subscription;

  constructor(
    private ballSelectorService: BallSelectorService,
    private betSplitService: BetSlipService
  ) {
    this.balls = this.ballSelectorService.balls;
  }

  ngOnInit(): void {
    // when a ball is selected, change chosenBall to true
    this.chooseBallSubs = this.ballSelectorService.selectedBallNumber.subscribe(
      (selectedBall) => {
        this.balls = this.balls.map((ball) => {
          if (ball.ballNumber === selectedBall) {
            ball.chosenBall = true;
          }
          return ball;
        });
      }
    );

    // when a bet slip is full, disable all balls
    this.betIsFullSubs = this.betSplitService.betSlipFull.subscribe(
      (isfull) => {
        if (isfull) {
          this.balls = this.balls.map((ball) => {
            if (!ball.chosenBall) {
              ball.chosenBall = true;
            }
            return ball;
          });
        }
      }
    );
  }

  ngOnDestroy() {
    this.chooseBallSubs.unsubscribe();
    this.betIsFullSubs.unsubscribe();
  }
}
