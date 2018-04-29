import Game from './game/game';

const ready = (): Promise<any> =>
  document.readyState === 'interactive' || document.readyState === 'complete'
    ? Promise.resolve()
    : new Promise(resolve =>
        document.addEventListener('DOMContentLoaded', resolve)
      );

const main = (): void => {
  const element: HTMLElement = document.querySelector('[data-module="Game"]');
  const game: Game = new Game();
};

ready().then(main);
