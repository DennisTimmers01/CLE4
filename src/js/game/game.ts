import 'pixi';
import 'p2';
import 'phaser';

import Level from './level/Level';

class Game extends Phaser.Game {
  element: HTMLElement;

  constructor(element: HTMLElement) {
    super('100%', '100%', Phaser.AUTO, element);

    /**
     * Add states to the game
     */
    this.state.add('Level', Level, false);

    /**
     * Start the game
     */
    this.init();
  }

  /**
   * Initiate the game.
   */
  init(): void {
    this.state.start('Level');
  }

  /**
   * reset the game to its initial state.
   */
  restart(): void {
    this.state.restart();
  }
}

export default Game;
