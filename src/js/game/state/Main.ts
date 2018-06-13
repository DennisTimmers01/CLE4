import Player from '../player/Player';
import Level from '../level/Level';
import Letter from '../letter/Letter';
import Door from '../door/door';

class Main extends Phaser.State {
  _letter: Letter;
  _platforms: Level;
  _deaths: Level;
  _player: Player;
  _door: Door;
  _score: number;
  _collectedLetterText: any;

  constructor() {
    super();
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
    load.image('lava', './assets/lavafinal.png');
    load.image('spikes', './assets/spikes.png');
    load.image('door', './assets/door.png');
    load.spritesheet('player', '../../assets/player/sprite.png', 64, 128);
  }

  create(): void {
    const { add, world } = this.game;

    world.setBounds(0, 0, 1600, 1000);
    add.sprite(0, 0, 'skynew');

    this._platforms = new Level(this.game);
    this._deaths = new Level(this.game);
    this._player = new Player(this.game);
    this._letter = new Letter(this.game, this._player._player);
    this._door = new Door(this.game, this._player._player);

    this._collectedLetterText = this.game.add.text(16, 16, 'score: 0');
  }

  update(): void {
    this.game.physics.arcade.collide(
      this._platforms._platforms,
      this._player._player
    );

    if (
      this.game.physics.arcade.collide(
        this._deaths._deathGroup,
        this._player._player
      )
    ) {
      this.game.state.restart();
    }

    this.game.physics.arcade.overlap(
      this._player._player,
      this._letter._letters,
      this._letter.killLetter,
      null,
      this
    );

    this.game.physics.arcade.overlap(
      this._player._player,
      this._door._doors,
      this._door.enterDoor,
      null,
      this
    );

    this._player.playerMovement();
  }
}

export default Main;
