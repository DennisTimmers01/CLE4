import '../css/style.css';
import Game from './game/Game';

const ready = (): Promise<any> =>
  document.readyState === 'interactive' || document.readyState === 'complete'
    ? Promise.resolve()
    : new Promise(resolve =>
        document.addEventListener('DOMContentLoaded', resolve)
      );

const main = (): void => {
  const element: HTMLElement = document.querySelector('[data-module="Game"]');
  new Game(element);
};

ready().then(main);
