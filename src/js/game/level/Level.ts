import Player from '../player/Player';

class Level extends Phaser.State {
  private _map: Phaser.Tilemap;
  private _layer: Phaser.TilemapLayer;
  private _currentLevel: number;

  constructor() {
    super();
    this._currentLevel = 1;
  }

  /**
   * Load initial essets
   */
  preload(): void {
    this.game.load.tilemap(
      'level1',
      `../../../assets/levels/level${this._currentLevel}.json`,
      null,
      Phaser.Tilemap.TILED_JSON
    );

    this.game.load.image(
      'tiles',
      `../../../assets/levels/tiles_spritesheet.png`
    );

    this.game.load.image(
      'background',
      '../../../assets/levels/backgroundimg.jpg'
    );

    this.game.state.add('player', Player, false);
  }

  /**
   * Init level
   */
  create(): void {
    this._createBackground();
    this._createMap();
    this._createLayer();
    this.game.state.start('player', false);
  }

  /**
   * Create background for level
   */
  private _createBackground(): void {
    this.game.add.tileSprite(
      0,
      0,
      this.game.width,
      this.game.height,
      'background'
    );
  }

  /**
   * add tilemap and tile images
   */
  private _createMap(): void {
    this._map = this.game.add.tilemap(`level${this._currentLevel}`);
    this._map.addTilesetImage(`level-${this._currentLevel}`, 'tiles');
  }

  /**
   * Create layer from tiles
   */
  private _createLayer(): void {
    this._layer = this._map.createLayer(`tilelaag${this._currentLevel}`);
    this._layer.fixedToCamera = false;
    this._layer.position.set(0, this.world.centerY / 2);
    this._layer.resizeWorld();
  }
}

export default Level;
