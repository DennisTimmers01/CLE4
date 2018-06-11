import Player from '../player/Player';
import Level from '../level/Level';

class Main extends Phaser.State {
  _platforms: Level;
  _player: Player;
  _letters: any;
  _score: number;
  _collectedLetter: Array<string>;
  _collectedLetterText: any;

  constructor() {
    super();
    this._collectedLetter = [];
  }

  preload(): void {
    const { load } = this.game;
    load.image('e', './assets/e.png');
    load.image('p', './assets/p.png');
    load.image('n', './assets/n.png');
    load.image('o', './assets/o.png');
    load.image('skynew', './assets/skynew.png');
    load.image('ground', './assets/platform.png');
    load.image('platform', './assets/platformHalf.png');
    load.image('star', './assets/star.png');
    load.spritesheet('player', '../../assets/player/sprite.png', 64, 128);
  }

  create(): void {
    const { add, world } = this.game;

    world.setBounds(0, 0, 1600, 1000);
    add.sprite(0, 0, 'skynew');

    this._platforms = new Level(this.game);
    this._player = new Player(this.game);

    this._collectedLetterText = this.game.add.text(16, 16, 'score: 0');
  }

  update(): void {
    this.game.physics.arcade.collide(
      this._platforms._platforms,
      this._player._player
    );

    this.game.physics.arcade.overlap(
      this._player._player,
      this._platforms._letters,
      this._handleLetterPickup,
      null,
      this
    );

    this._player.playerMovement();
  }

  private _handleLetterPickup() {
    this._platforms._letters.kill();
    this._collectedLetter.push(this._platforms._letter.key);
    console.log(this._platforms._letter.key);
  }
}

export default Main;
