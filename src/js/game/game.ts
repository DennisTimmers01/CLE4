import 'pixi';
import 'p2';
import 'phaser';

class Game {
  element: HTMLElement;
  game: Phaser.Game;
  platforms: any;
  ground: any;
  ledge: any;

  constructor() {
    this.game = new Phaser.Game(
      800,
      600,
      Phaser.AUTO,
      'body',
      {
        preload: this.preload,
        create: this.create,
        update: this.update
      },
      false,
      true,
      Phaser.Physics.ARCADE
    );
  }

  preload() {}

  create() {}

  update() {}
}

export default Game;
