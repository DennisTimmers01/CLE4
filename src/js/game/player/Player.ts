class Player extends Phaser.State {
  playerSprite: object;
  player: Phaser.Sprite;

  preload() {
    this.game.load.spritesheet(
      'player',
      '../../../assets/player/sprite.png',
      64,
      128
    );
  }

  create() {
    this.player = this.game.add.sprite(32, 32, 'player');
    this.game.physics.arcade.enable(this.player);

    this.player.body.bounce.y = 0.2;
    this.player.body.gravity.y = 300;
    this.player.body.collideWorldBounce = true;

    this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    this.player.animations.add('right', [5, 6, 7, 8], 10, true);
  }

  update() {}
}

export default Player;
