import { level1 } from '../config/levelConfig';

class Level {
  _game: Phaser.Game;
  _platforms: Phaser.Group;
  _deathGroup: Phaser.Group;
  _currentLevel: number;
  _object: any;

  constructor(game: Phaser.Game) {
    this._game = game;
    this._currentLevel = 1;

    this._platforms = this._game.add.group();
    this._platforms.enableBody = true;

    this._deathGroup = this._game.add.group();
    this._deathGroup.enableBody = true;

    this._generateLevel();
  }

  private _createObject(
    group: Phaser.Group,
    x: number,
    y: number,
    name: string
  ) {
    this._object = group.create(x, y, name);
    this._object.body.immovable = true;
  }

  private _generateLevel() {
    const { floor, platforms, traps } = level1;

    floor.map(floor =>
      this._createObject(this._platforms, floor.x, floor.y, 'ground')
    );
    platforms.map(platform =>
      this._createObject(this._platforms, platform.x, platform.y, 'platform')
    );
    traps.map(trap =>
      this._createObject(this._deathGroup, trap.x, trap.y, trap.name)
    );
  }
}
export default Level;
