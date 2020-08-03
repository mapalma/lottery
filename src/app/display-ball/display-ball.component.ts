import { Component, OnInit, Input } from "@angular/core";
import { Ball } from "../ball/ball.model";

@Component({
  selector: "app-display-ball",
  templateUrl: "./display-ball.component.html",
  styleUrls: ["./display-ball.component.scss"],
})
export class DisplayBallComponent implements OnInit {
  @Input() ball: Ball;

  constructor() {}

  ngOnInit(): void {}
}
