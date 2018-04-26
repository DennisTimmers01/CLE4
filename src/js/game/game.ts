/**
 * Game
 * @class
 */
class Game {
  /**
   * Element that renders the game
   */
  private element: HTMLElement;

  /**
   * @constructor
   * @param {HTMLElement} element
   */
  constructor(element: HTMLElement) {
    this.element = element;

    this.load();
  }

  /**
   * Load game
   */
  private load() {
    this.isLoaded();
  }

  /**
   * Notify to console if game is loaded
   */
  private isLoaded() {
    console.log('Game is loaded');
  }
}

export default Game;
