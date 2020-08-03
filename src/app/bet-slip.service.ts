import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BetSlipService {
  addedBallNumber = new Subject<number>();
  clearBetSlip = new Subject<number>();
  betSlipFull = new Subject<boolean>();

  constructor() {}
}
