import 'pixi';
import 'p2';
import 'phaser';

import Boot from './state/Boot';
import Preload from './state/Preload';
import GameTitle from './state/GameTitle';
import Main from './state/Main';
import GameOver from './state/GameOver';

class Game extends Phaser.Game {
  constructor() {
    super('100%', '100%', Phaser.AUTO, 'body');

    /**
     * Add states to the game
     */
    this.state.add('Boot', Boot, false);
    this.state.add('Preload', Preload, false);
    this.state.add('GameTitle', GameTitle, false);
    this.state.add('Main', Main, false);
    this.state.add('GameOver', GameOver, false);

    /**
     * Start the game
     */
    this.init();
  }

  /**
   * Initiate the game.
   */
  init(): void {
    this.state.start('Boot');
  }

  /**
   * reset the game to its initial state.
   */
  restart(): void {
    this.state.restart();
  }
}

export default Game;
