import Level from '../level/Level';

class Main extends Phaser.State {
  preload(): void {
    this.game.state.add('level', Level, false);
  }

  create(): void {
    this.game.state.start('level');
    console.log('created');
  }
  update(): void {}
}

export default Main;
