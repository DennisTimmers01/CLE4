import 'pixi';
import 'p2';
import 'phaser';

import Main from './state/Main';

class Game extends Phaser.Game {
  element: HTMLElement;

  constructor(element: HTMLElement) {
    super(1280, 720, Phaser.AUTO, element);

    /**
     * Add states to the game
     */
    this.state.add('Main', Main, false);

    /**
     * Start the game
     */
    this._init();
  }

  /**
   * Initiate the game.
   */
  private _init(): void {
    this.state.start('Main');
  }
}

export default Game;
