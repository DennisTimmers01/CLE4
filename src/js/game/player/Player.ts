import config from './config';

class Player {
  _game: Phaser.Game;
  _player: Phaser.Sprite;
  _cursors: Phaser.CursorKeys;

  constructor(game: Phaser.Game) {
    this._game = game;

    this._createPlayer();

    this._game.camera.follow(this._player);
    this._cursors = this._game.input.keyboard.createCursorKeys();
  }

  private _createPlayer(): void {
    this._setPlayerSprite();
    this._setPhysics();
    this._setAnimation();
  }

  private _setPlayerSprite(): void {
    const { sprite, position } = config.player;
    this._player = this._game.add.sprite(position.x, position.y, sprite);
  }

  private _setPhysics(): void {
    const { gravity, bounce, worldBound } = config.physics;
    this._game.physics.arcade.enable(this._player);
    this._player.body.gravity.y = gravity;
    this._player.body.bounce.y = bounce;
    this._player.body.collideWorldBounds = worldBound;
  }

  private _setAnimation(): void {
    const { frames, frameRate, loop } = config.animation;
    this._player.animations.add('left', frames.left, frameRate, loop);
    this._player.animations.add('right', frames.right, frameRate, loop);
  }

  playerMovement(): void {
    if (this._cursors.left.isDown) {
      this._player.body.velocity.x = -150;
      this._player.animations.play('left');
    } else if (this._cursors.right.isDown) {
      this._player.body.velocity.x = 150;
      this._player.animations.play('right');
    } else {
      this._player.body.velocity.x = 0;
      this._player.animations.frame = 4;
    }

    if (this._cursors.up.isDown && this._player.body.touching.down) {
      this._player.body.velocity.y = -200;
    }
  }
}

export default Player;
