import State from "./state";

export default class Game extends Phaser.Game {
  constructor() {
    super(640, 400, Phaser.CANVAS, "content", State);
  }
}
