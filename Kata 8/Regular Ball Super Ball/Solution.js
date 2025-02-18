class Ball {
  constructor(ballType) {
    this.ballType = ballType === "super" ? "super" : "regular";
    return this;
  }
}
