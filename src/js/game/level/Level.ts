import { floor_level1, platform_level1, letters_level1 } from './levels/level1';

class Level {
  _game: Phaser.Game;
  _platforms: Phaser.Group;
  _letters: Phaser.Group;
  _currentLevel: number;
  _ledge: any;
  _letter: any;

  constructor(game: Phaser.Game) {
    this._game = game;
    this._currentLevel = 1;

    this._platforms = this._game.add.group();
    this._platforms.enableBody = true;

    this._letters = this._game.add.group();
    this._letters.enableBody = true;

    this._generateLevel();
  }

  private _createLedge(x: number, y: number): void {
    this._ledge = this._platforms.create(x, y, 'ground');
    this._ledge.body.immovable = true;
  }

  private _createPlatform(x: number, y: number): void {
    this._ledge = this._platforms.create(x, y, 'platform');
    this._ledge.body.immovable = true;
  }

  private _createLetter(x: number, y: number, name: string): void {
    this._letter = this._letters.create(x, y, name);
    this._letter.body.immovable = true;
  }

  private _generateLevel() {
    floor_level1.map(floor => this._createLedge(floor.x, floor.y));
    platform_level1.map(platform => this._createPlatform(platform.x, platform.y));
    letters_level1.map(letters =>
      this._createLetter(letters.x, letters.y, letters.name)
    );
  }
}

export default Level;
