import { floor_level1, platform_level1, letters_level1, deaths_level1 } from './levels/level1';

class Level {
  _game: Phaser.Game;
  _platformGroup: Phaser.Group;
  _letterGroup: Phaser.Group;
  _deathGroup: Phaser.Group;
  _currentLevel: number;
  _ledge: any;
  _letter: any;
  _death: any;

  constructor(game: Phaser.Game) {
    this._game = game;
    this._currentLevel = 1;

    this._platformGroup = this._game.add.group();
    this._platformGroup.enableBody = true;

    this._letterGroup = this._game.add.group();
    this._letterGroup.enableBody = true;

    this._deathGroup = this._game.add.group();
    this._deathGroup.enableBody = true;

    this._generateLevel();
  }

  private _createLedge(x: number, y: number): void {
    this._ledge = this._platformGroup.create(x, y, 'ground');
    this._ledge.body.immovable = true;
  }

  private _createPlatform(x: number, y: number): void {
    this._ledge = this._platformGroup.create(x, y, 'platform');
    this._ledge.body.immovable = true;
  }

  private _createLetter(x: number, y: number, name: string): void {
    this._letter = this._letterGroup.create(x, y, name);
    this._letter.body.immovable = true;
  }

  private _createDeath(x: number, y: number, name: string): void {
    this._death = this._deathGroup.create(x, y, name);
    this._death.body.immovable = true;
  }

  private _generateLevel() {
    floor_level1.map(floor => this._createLedge(floor.x, floor.y));
    platform_level1.map(platform => this._createPlatform(platform.x, platform.y));
    letters_level1.map(letters => this._createLetter(letters.x, letters.y, letters.name));
    deaths_level1.map(deaths => this._createDeath(deaths.x, deaths.y, deaths.name));
  }
}

export default Level;
