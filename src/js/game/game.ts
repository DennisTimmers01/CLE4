import 'pixi';
import 'p2';
import 'phaser';

import Main from './state/Main';

class Game extends Phaser.Game {
  element: HTMLElement;

  constructor(_element: HTMLElement) {
    super(800, 600, Phaser.AUTO, _element);

    this.state.add('main', Main);

    this._init();
  }

  /**
   * Init game state.
   */
  private _init(): void {
    this.state.start('main');
  }
}

export default Game;
