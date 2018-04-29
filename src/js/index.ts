import '../css/style.css';
import Game from './game/game';

/**
 * wait for DOM to load
 */
const ready = (): Promise<any> =>
  document.readyState === 'interactive' || document.readyState === 'complete'
    ? Promise.resolve()
    : new Promise(resolve =>
        document.addEventListener('DOMContentLoaded', resolve)
      );

/**
 * main
 */
const main = (): void => {
  const element: HTMLElement = document.querySelector('[data-module="Game"]');
  const game: Game = new Game();
};

/**
 * init game when ready
 */
ready().then(main);
