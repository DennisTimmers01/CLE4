import level1 from './levels/level1';

class Level {
  _game: Phaser.Game;
  _platforms: Phaser.Group;
  _currentLevel: number;
  _ledge: any;

  constructor(game: Phaser.Game) {
    this._game = game;
    this._currentLevel = 1;

    this._platforms = this._game.add.group();
    this._platforms.enableBody = true;

    this._generateLevel();
  }

  private _createLedge(x: number, y: number): object {
    this._ledge = this._platforms.create(x, y, 'ground');
    this._ledge.body.immovable = true;
    return this._ledge;
  }

  private _generateLevel() {
    level1.map(platform => this._createLedge(platform.x, platform.y));
  }
}

export default Level;
