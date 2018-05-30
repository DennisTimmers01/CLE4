class Player extends Phaser.State {
  private _player: Phaser.Sprite;
  private _jumpTimer: number;

  constructor() {
    super();

    this._jumpTimer = 0;
  }

  preload(): void {
    this.game.load.spritesheet(
      'player',
      '../../../assets/player/sprite.png',
      64,
      128
    );
  }

  create(): void {
    this._player = this.game.add.sprite(32, this.game.height - 150, 'player');
    this.game.physics.arcade.enable(this._player);

    this._player.body.bounce.y = 0.2;
    this._player.body.gravity.y = 200;
    this._player.body.collideWorldBounce = true;
    this._player.scale.set(0.7);

    this._player.animations.add('left', [0, 1, 2, 3], 10, true);
    this._player.animations.add('right', [5, 6, 7, 8], 10, true);

    this.game.camera.follow(this._player);
  }

  update(): void {
    if (this._player.body.y > this.game.height - 140) {
      this._player.body.y = this.game.height - 140;
    }
    const { LEFT, RIGHT, SPACEBAR } = Phaser.Keyboard;

    if (this.game.input.keyboard.isDown(LEFT)) {
      this._player.body.velocity.x = -150;
      this._player.animations.play('left');
    } else if (this.game.input.keyboard.isDown(RIGHT)) {
      this._player.body.velocity.x = 150;
      this._player.animations.play('right');
    } else {
      this._player.animations.frame = 4;
      this._player.body.velocity.x = 0;
    }

    if (
      this.game.input.keyboard.isDown(SPACEBAR) &&
      this.game.time.now > this._jumpTimer
    ) {
      this._player.body.velocity.y = -250;
      this._jumpTimer = this.game.time.now + 750;
    }
  }
}

export default Player;
