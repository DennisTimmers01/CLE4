class Player {
  player: Phaser.Sprite;
  game: Phaser.Game;
  cursors: any;
  state: any;
  jumpState: any;

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
    this.jumpState = 0;

    if (this.cursors.left.isDown) {
      this.player.body.velocity.x = -150;
      this.player.animations.play('left');
      this.state = 0;
    }
    else if (this.cursors.right.isDown) {
      this.player.body.velocity.x = 150;
      this.player.animations.play('right');
      this.state = 1;
    }
    else {
      this.player.body.velocity.x = 0;
      this.player.animations.frame = 4;
      this.state = 2;
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.body.velocity.y = -200;
      this.jumpState = 1
      if (this.state = 0) {
        this.player.animations.frame = 5;
      } 
      else if (this.state = 1) {
        this.player.animations.frame = 3;
      }
      else {
        this.player.animations.frame = 4;
      }
    }
  }
}

export default Player;
