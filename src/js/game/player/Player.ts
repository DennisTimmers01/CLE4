class Player {
  player: Phaser.Sprite;

  createPlayer(game: Phaser.Game, sprite: string) {
    this.player = game.add.sprite(32, game.world.height - 150, sprite);

    game.physics.arcade.enable(this.player);

    this.player.body.bounce.y = 0.2;
    this.player.body.gravity.y = 300;
    this.player.body.collideWorldBounds = true;

    this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    this.player.animations.add('right', [5, 6, 7, 8], 10, true);
  }
}

export default Player;
