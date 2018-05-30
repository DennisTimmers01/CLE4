class Player extends Phaser.Sprite {
  game: Phaser.Game;
  x: number;
  y: number;
  player: string;

  constructor(game: Phaser.Game, x: number, y: number, player: string) {
    super(game, x, y, player);
    this.game.add.existing(this);
  }
}

export default Player;
