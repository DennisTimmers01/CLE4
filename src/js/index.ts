import '../css/style.css';
import Game from './game/game';

const ready = (): Promise<any> =>
  document.readyState === 'interactive' || document.readyState === 'complete'
    ? Promise.resolve()
    : new Promise(resolve =>
        document.addEventListener('DOMContentLoaded', resolve)
      );

const main = (): Game => {
  const element: HTMLElement = document.querySelector('[data-module="Game"]');
  return new Game(element);
};

ready().then(main);
