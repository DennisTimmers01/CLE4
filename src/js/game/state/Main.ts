import Player from '../player/Player';
import Level from '../level/Level';

class Main extends Phaser.State {
  _platforms: Level;
  _player: Player;

  preload(): void {
    const { load } = this.game;
    load.image('sky', './assets/sky.png');
    load.image('ground', './assets/platform.png');
    load.image('star', './assets/star.png');
    load.spritesheet('player', '../../assets/player/sprite.png', 64, 128);
  }

  create(): void {
    const { add, world } = this.game;

    world.setBounds(0, 0, 1600, 600);
    add.sprite(0, 0, 'sky');
    add.sprite(800, 0, 'sky');

    this._platforms = new Level(this.game);
    this._player = new Player(this.game);
  }

  update(): void {
    this.game.physics.arcade.collide(
      this._platforms._platforms,
      this._player._player
    );
    this._player.playerMovement();
  }
}

export default Main;
