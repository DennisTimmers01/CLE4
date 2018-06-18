import { level1 } from '../config/levelConfig';

class Letter {
  _game: Phaser.Game;
  _letters: Phaser.Group;
  _letterArray: Array<string>;
  _singleLetter: object;
  _player: any;

  constructor(game: Phaser.Game, player: any) {
    this._game = game;
    this._player = player;
    this._letterArray = [];

    this._letters = this._game.add.group();
    this._letters.enableBody = true;

    this._generateLetters();
  }

  private _createLetter(x: number, y: number, name: string) {
    this._singleLetter = this._letters.create(x, y, name);
  }

  private _generateLetters() {
    const { letters } = level1;
    letters.map(letter => this._createLetter(letter.x, letter.y, letter.name));
  }

  public killLetter(_player: object, _singleLetter: any) {
    _singleLetter.kill();
    this._letterArray.push(_singleLetter.key);
    console.log(this._letterArray)
  }
}

export default Letter;
