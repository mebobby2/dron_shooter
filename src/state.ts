export default class State extends Phaser.State {

  preload() {
    this.game.load.image("BG", "assets/bg.jpg");
    this.game.load.atlas("Atlas", "assets/atlas.png", "assets/atlas.json");
  }

  create() {
    this.add.image(0, 0, "BG");
    this.add.sprite(320, 100, "Atlas", "dron1", this.world);
  }
}
