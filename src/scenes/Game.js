/// <reference path="../../typings/phaser.d.ts" />
import Phaser from 'phaser';

class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  // this will be auto used by Phaser when Phaser starts the scene. So you can pass some settings here.
  init(data) {}

  // place to preolad all the image assets.
  // 'logo' is the key used later in create method
  preload() {
    this.load.image('logo', 'assets/phaser3-logo.png');
  }

  // after preload method this one getting called.
  // this one is creating new Game object and in this case using its add method. 
  create(data) {
    // location and image key from preload method
    this.add.image(400, 300, 'logo');
  }
  // tick method, runs 60fps.
  update(time, delta) {}
}

export default Game;