class Letter {
  _game: Phaser.Game;
  _letters: Phaser.Group;
  _letterArray: Array<string>;
  _singleLetter: object;
  _player: any;

  constructor(game: Phaser.Game, player: any) {
    this._game = game;
    this._player = player;
    this._letters = this._game.add.group();
    this._letters.enableBody = true;

    this._letterArray = ['o', 'p', 'e', 'n'];
  }

  public killLetter(_player: object, _singleLetter: any) {
    _singleLetter.kill();
  }
}

export default Letter;
