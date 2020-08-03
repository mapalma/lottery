export class GameResults {
  constructor(
    public isWinnerNumber: boolean,
    public winnerNumber: number,
    public totalMoney?: number
  ) {}
}
