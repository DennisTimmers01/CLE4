import Platform from '../environment/Platform';
import Player from '../player/Player';

class Main extends Phaser.State {
  _platforms: Phaser.Group;
  _player: Player;

  preload(): void {
    const { load } = this.game;
    load.image('sky', './assets/sky.png');
    load.image('ground', './assets/platform.png');
    load.image('star', './assets/star.png');
    load.spritesheet('player', '../../assets/player/sprite.png', 64, 128);
  }

  create(): void {
    this.game.world.setBounds(0, 0, 1600, 600);
    const { add, world } = this.game;

    add.sprite(0, 0, 'sky');
    add.sprite(800, 0, 'sky');

    this._platforms = this.game.add.group();
    this._platforms.enableBody = true;

    Platform.createGround(this._platforms, 0, world.height - 30);
    Platform.createGround(this._platforms, 800, world.height - 30);

    Platform.createLedge(this._platforms, 400, 400);
    Platform.createLedge(this._platforms, -150, 250);
    Platform.createLedge(this._platforms, -150, 250);
    this._player = new Player(this.game);
  }

  update(): void {
    this.game.physics.arcade.collide(this._platforms, this._player._player);
    this._player.playerMovement();
  }
}

export default Main;
