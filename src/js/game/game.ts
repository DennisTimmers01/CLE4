import 'pixi';
import 'p2';
import 'phaser';

import Platform from './environment/Platform';
import Player from './player/Player';

class Game {
  element: HTMLElement;
  game: Phaser.Game;
  platforms: any;
  ground: any;
  ledge: any;
  player: any;
  hitPlatform: any;

  constructor(element: HTMLElement) {
    this.game = new Phaser.Game(
      800,
      600,
      Phaser.AUTO,
      element,
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
    load.spritesheet('player', '../../assets/player/sprite.png', 64, 128);
  }

  create() {
    this.game.world.setBounds(0, 0, 1600, 600);
    const { add, world } = this.game;

    add.sprite(0, 0, 'sky');
    add.sprite(800, 0, 'sky');

    this.platforms = this.game.add.group();
    this.platforms.enableBody = true;

    Platform.createGround(this.platforms, 0, world.height - 30);
    Platform.createGround(this.platforms, 800, world.height - 30);

    Platform.createLedge(this.platforms, 400, 400);
    Platform.createLedge(this.platforms, -150, 250);
    Platform.createLedge(this.platforms, -150, 250);
    this.player = new Player(this.game);
  }

  update() {
    this.game.physics.arcade.collide(this.platforms, this.player.player);
    this.player.playerMovement();
  }
}

export default Game;
