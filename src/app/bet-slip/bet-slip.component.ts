import { Component, OnInit } from "@angular/core";
import { Ball } from "../ball/ball.model";
import { BetSlipService } from "../bet-slip.service";
import { GameService } from "../game.service";
import { Subscription } from "rxjs";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { BallSelectorService } from "../ball-selector.service";

@Component({
  selector: "app-bet-slip",
  templateUrl: "./bet-slip.component.html",
  styleUrls: ["./bet-slip.component.scss"],
})
export class BetSlipComponent implements OnInit {
  selectedBalls: Ball[] = [];
  totalAmount: number = 0;
  isBetResumed = false; //show total and button to place bet on click 'ok' button
  isBetPlaced = false; //disable submit button when bet is placed
  maxBets = 8;

  betForm: FormGroup;

  selectedBallSubs: Subscription;
  clearBallsSubs: Subscription;

  constructor(
    private betSlipService: BetSlipService,
    private ballSelectorService: BallSelectorService,
    private gameService: GameService
  ) {}

  ngOnInit(): void {
    this.betForm = new FormGroup({
      amount: new FormControl(5, [Validators.required, Validators.min(5)]),
    });

    this.selectedBallSubs = this.betSlipService.addedBallNumber.subscribe(
      (ball) => {
        this.selectedBalls.push(new Ball(ball, true));
        this.updateBet();

        //if array length is greater or equal to max number of bets
        //call next on subject to disable balls on ball-selector component
        if (this.selectedBalls.length >= this.maxBets) {
          this.betSlipService.betSlipFull.next(true);
        }
      }
    );

    this.clearBallsSubs = this.betSlipService.clearBetSlip.subscribe(() => {
      // clear selectedBalls Array
      // clear flags
      this.selectedBalls = [];
      this.isBetResumed = false;
      this.isBetPlaced = false;
    });
  }

  updateBet() {
    this.totalAmount =
      this.betForm.get("amount").value * this.selectedBalls.length;
  }

  checkBet() {
    this.updateBet();
    this.isBetResumed = true;
  }

  onSubmit() {
    this.gameService.startGame(this.selectedBalls, this.totalAmount);
    this.ballSelectorService.disableBalls();
    this.isBetPlaced = true;
    this.betForm.reset();
    this.betForm.setValue({ amount: 5 });
  }

  ngOnDestroy() {
    this.selectedBallSubs.unsubscribe();
    this.clearBallsSubs.unsubscribe();
  }
}
