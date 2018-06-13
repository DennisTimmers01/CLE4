import { level1 } from '../config/levelConfig';

class Level {
  _game: Phaser.Game;
  _platforms: Phaser.Group;
  _deathGroup: Phaser.Group;
  _currentLevel: number;
  _death: any;
  _ledge: any;

  constructor(game: Phaser.Game) {
    this._game = game;
    this._currentLevel = 1;

    this._platforms = this._game.add.group();
    this._platforms.enableBody = true;

    this._deathGroup = this._game.add.group();
    this._deathGroup.enableBody = true;

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

  private _createDeath(x: number, y: number, name: string): void {
    this._death = this._deathGroup.create(x, y, name);
    this._death.body.immovable = true;
  }

  private _generateLevel() {
    const { floor, platforms, traps } = level1;

    floor.map(floor => this._createLedge(floor.x, floor.y));
    platforms.map(platform => this._createPlatform(platform.x, platform.y));
    traps.map(deaths => this._createDeath(deaths.x, deaths.y, deaths.name));
  }
}
export default Level;
