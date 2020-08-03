import { Component, OnInit, Input } from "@angular/core";
import { Ball } from "./ball.model";
import { BallSelectorService } from "../ball-selector.service";
import { BetSlipService } from "../bet-slip.service";

@Component({
  selector: "app-ball",
  templateUrl: "./ball.component.html",
  styleUrls: ["./ball.component.scss"],
})
export class BallComponent implements OnInit {
  @Input() ball: Ball;

  balls: Ball[];

  constructor(
    private ballSelectorService: BallSelectorService,
    private betSplitService: BetSlipService
  ) {}

  ngOnInit(): void {}

  onBallClicked(num:number) {
    this.ballSelectorService.selectedBallNumber.next(num);
    this.betSplitService.addedBallNumber.next(num);
  }
}
