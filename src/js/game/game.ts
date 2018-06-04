import 'pixi';
import 'p2';
import 'phaser';

import Platform from './environment/platform';
import Player from './player/Player';

class Game {
  element: HTMLElement;
  game: Phaser.Game;
  platforms: any;
  ground: any;
  ledge: any;
  player: any;
  hitPlatform: any;

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

  preload() {
    const { load } = this.game;
    load.image('sky', './assets/sky.png');
    load.image('ground', './assets/platform.png');
    load.image('star', './assets/star.png');
    load.spritesheet('dude', './assets/dude.png', 32, 48);
  }

  create() {
    const { add, world } = this.game;

    this.player = new Player();

    add.sprite(0, 0, 'sky');
    add.sprite(0, 0, 'star');

    this.platforms = this.game.add.group();
    this.platforms.enableBody = true;

    Platform.createGround(this.platforms, 0, world.height - 30);
    Platform.createLedge(this.platforms, 400, 400);
    Platform.createLedge(this.platforms, -150, 250);

    this.player.createPlayer(this.game, 'dude');
    console.log(this.player);
  }

  update() {
    this.game.physics.arcade.collide(this.platforms, this.player.player);
  }
}

export default Game;
