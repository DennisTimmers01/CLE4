class Ui {
    _game: Phaser.Game;
    _burgerBtn: any;
    _quitBtn: any;
    _resumeBtn: any;
    _pauseTxt: any;
    uiOverlay: any;
    game: any;

    constructor(game: Phaser.Game){
        this._game = game;
    }

    displayUi(): void {
        this._burgerBtn = this._game.add.button(1200, 20, 'hamburgerBtn', this.displayMenu, this, 0); //sets uiOverlay active
        this._burgerBtn.fixedToCamera = true;
    }

    displayMenu(): void {
        this._pauseTxt = this._game.add.sprite(315, 400, 'pauseTxt', 0);
        this._resumeBtn = this._game.add.button(315, 575, 'resumeBtn', this.closeMenu, this, 0);
        this._quitBtn = this._game.add.button(315, 750, 'quitBtn', this.quitGame, this, 0);
        this._pauseTxt.fixedToCamera = true;
        this._resumeBtn.fixedToCamera = true;
        this._quitBtn.fixedToCamera = true;
        this._game.paused = true;
    }
    closeMenu(): void{
        this._pauseTxt.kill();
        this._resumeBtn.kill();
        this._quitBtn.kill();
        this._game.paused = false;
    }
    quitGame(): void{
        location.reload(); 
    }
}
export default Ui;