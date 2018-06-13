import '../css/style.css';
import Game from './game/Game';

const ready = (): Promise<any> =>
  document.readyState === 'interactive' || document.readyState === 'complete'
    ? Promise.resolve()
    : new Promise(resolve =>
        document.addEventListener('DOMContentLoaded', resolve)
      );

const main = (): void => {
  document.querySelector('.mainMenu').classList.add('hidden');
  const element: HTMLElement = document.querySelector('[data-module="Game"]');
  new Game(element);
};

ready().then(main);

// var startbtn = document.querySelector(".start");
// startbtn.addEventListener("click", main);
