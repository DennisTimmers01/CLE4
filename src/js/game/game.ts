import 'pixi';
import 'p2';
import 'phaser';

class Game extends Phaser.Game {
  element: HTMLElement;

  constructor(_element: HTMLElement) {
    super(1280, 720, Phaser.AUTO, _element);

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
