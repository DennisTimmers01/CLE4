import Player from '../player/Player';

class Level extends Phaser.State {
  private _map: Phaser.Tilemap;
  private _layer: Phaser.TilemapLayer;
  private _currentLevel: number;
  private _player: Phaser.Sprite;

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

    this.game.load.spritesheet(
      'player',
      '../../../assets/player/sprite.png',
      64,
      128
    );
  }

  /**
   * Init level
   */
  create(): void {
    this._createBackground();
    this._createMap();
    this._createLayer();
    this._player = new Player(this.game, 150, 132, 'player');
    this.game.camera.follow(this._player);
    this.game.physics.arcade.enable(this._player);
    this._player.body.bounce.y = 0.2;
    this._player.body.gravity.y = 200;
    this._player.body.collideWorldBounce = true;
    this._player.animations.add('left', [0, 1, 2, 3], 10, true);
    this._player.animations.add('right', [5, 6, 7, 8], 10, true);
  }

  update(): void {
    this.game.physics.arcade.collide(this._player, this._map);
    const { LEFT, RIGHT } = Phaser.Keyboard;

    if (this.game.input.keyboard.isDown(LEFT)) {
      this._player.body.velocity.x = -150;
      this._player.animations.play('left');
    } else if (this.game.input.keyboard.isDown(RIGHT)) {
      this._player.body.velocity.x = 150;
      this._player.animations.play('right');
    } else {
      this._player.animations.frame = 4;
      this._player.body.velocity.x = 0;
    }
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
