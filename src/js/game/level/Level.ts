import 'phaser';

class Level extends Phaser.State {
  map: Phaser.Tilemap;
  layer: Phaser.TilemapLayer;
  currentLevel: number;

  constructor() {
    super();
    this.currentLevel = 1;
  }

  /**
   * Load initial essets
   */
  preload() {
    this.game.load.tilemap(
      'level1',
      `../../../assets/levels/level${this.currentLevel}.json`,
      null,
      Phaser.Tilemap.TILED_JSON
    );
    this.game.load.image(
      'tiles',
      `../../../assets/levels/tiles-${this.currentLevel}.png`
    );
  }

  /**
   * Init level
   */
  create() {
    this.createMap();
    this.createLayer();
  }

  /**
   * add tilemap and tile images
   */
  createMap() {
    this.map = this.game.add.tilemap(`level${this.currentLevel}`);
    this.map.addTilesetImage(`level-${this.currentLevel}`, 'tiles');
  }

  /**
   * Create layer from tiles
   */
  createLayer() {
    this.layer = this.map.createLayer(`tilelaag${this.currentLevel}`);
    this.layer.fixedToCamera = false;
    this.layer.position.set(0, this.world.centerY / 2);
    this.layer.resizeWorld();
  }

  nextLevel() {
    this.currentLevel++;
  }

  previousLevel() {
    this.currentLevel--;
  }
}

export default Level;
