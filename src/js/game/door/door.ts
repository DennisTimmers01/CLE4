import { level1 } from '../config/levelConfig';
import Main from '../state/main';

class Door {
  game: Main;
  _game: Phaser.Game;
  _doors: Phaser.Group;
  _singleDoor: object;
  _player: any;

  constructor(game: Phaser.Game, player: any) {
    this._game = game;
    this._player = player;

    this._doors = this._game.add.group();
    this._doors.enableBody = true;

    this._generateDoor();
  }

  private _createDoor(x: number, y: number, name: string) {
    this._singleDoor = this._doors.create(x, y, name);
  }

  private _generateDoor() {
    const { door } = level1;
    door.map(door => this._createDoor(door.x, door.y, door.name));
  }

  public enterDoor(_player: object, _singleDoor: any) {
    var answser = prompt("Please enter the name:", "");
    const finalAnswser = answser.toLowerCase();
    if (finalAnswser == "open") {
        alert("Correct");
        this.game.state.restart();
    }
    else {
        alert("Wrong answer, try again!")
    }
  }
}

export default Door;