import 'phaser';

class Player extends Phaser.State {
  playerSprite: object;
  player: Phaser.Sprite;

  preload() {
    this.playerSprite = this.game.load.image(
      'player',
      '../../../assets/dude.png'
    );
  }

  create() {
    this.player = this.game.add.sprite(
      this.game.width / 2,
      this.game.height / 2,
      'player'
    );
  }
}

export default Player;
