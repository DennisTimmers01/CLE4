import 'pixi';
import 'p2';
import 'phaser';

import Level from './level/Level';
import Player from './player/player'; 

class Game extends Phaser.Game {
  element: HTMLElement;

  constructor(element: HTMLElement) {
    super(1280, 720, Phaser.AUTO, element);

    /**
     * Add states to the game
     */
    this.state.add('Level', Level, false);

    this.state.add('player', Player, false);

    /**
     * Start the game
     */
    this._init();
  }

  /**
   * Initiate the game.
   */
  private _init(): void {
    this.state.start('Level');
    this.state.start('player');
  }
}

export default Game;
