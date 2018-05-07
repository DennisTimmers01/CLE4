import 'pixi';
import 'p2';
import 'phaser';

class Game {
  element: HTMLElement;
  game: Phaser.Game;

  constructor() {
    this.game = new Phaser.Game(
      '100%',
      '100%',
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
