class Player extends Phaser.State {
  private _player: Phaser.Sprite;

  preload(): void {
    this.game.load.spritesheet(
      'player',
      '../../../assets/player/sprite.png',
      64,
      128
    );
  }

  create(): void {
    this._player = this.game.add.sprite(32, this.game.height - 178, 'player');
    this.game.physics.arcade.enable(this._player);

    this._player.body.bounce.y = 0.2;
    this._player.body.gravity.y = 0;
    this._player.body.collideWorldBounce = true;

    this._player.animations.add('left', [0, 1, 2, 3], 10, true);
    this._player.animations.add('right', [5, 6, 7, 8], 10, true);

    this.game.camera.follow(this._player);
  }

  update(): void {
    const { LEFT, RIGHT, SPACEBAR } = Phaser.Keyboard;

    if (this.game.input.keyboard.isDown(LEFT)) {
      this._player.body.velocity.x = -150;
      this._player.animations.play('left');
    } else if (this.game.input.keyboard.isDown(RIGHT)) {
      this._player.body.velocity.x = 150;
      this._player.animations.play('right');
    } else if (this.game.input.keyboard.isDown(SPACEBAR)) {
      this._player.body.velocity.y = 50;
      this._player.animations.frame = 4;
    } else {
      this._player.animations.frame = 4;
      this._player.body.velocity.x = 0;
    }
  }
}

export default Player;
