class Player {
  player: Phaser.Sprite;
  game: Phaser.Game;
  cursors: any;

  constructor(game: Phaser.Game) {
    this.game = game;

    this.createPlayer();
  }

  createPlayer() {
    this.player = this.game.add.sprite(32, 35, 'player');
    this.game.physics.arcade.enable(this.player);
    this.player.body.bounce.y = 0.2;
    this.player.body.gravity.y = 300;
    this.player.body.collideWorldBounds = true;

    this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    this.player.animations.add('right', [5, 6, 7, 8], 10, true);
    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  playerMovement() {
    this.player.body.velocity.x = 0;

    if (this.cursors.left.isDown) {
      this.player.body.velocity.x = -150;
      this.player.animations.play('left');
    }
  }
}

export default Player;
