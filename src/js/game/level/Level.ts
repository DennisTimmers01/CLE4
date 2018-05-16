import 'phaser';

class Level extends Phaser.State {
  map: Phaser.Tilemap;
  layer: Phaser.TilemapLayer;

  preload() {
    this.game.load.tilemap(
      'level1',
      '../../../assets/levels/level1.json',
      null,
      Phaser.Tilemap.TILED_JSON
    );
    this.game.load.image('tiles', '../../../assets/levels/tiles-1.png');
  }

  create() {
    this.game.stage.backgroundColor = '#ff0';
    this.map = this.game.add.tilemap('level1');
    this.map.addTilesetImage('levelone', 'tiles');

    this.layer = this.map.createLayer('tilelaag1');
    this.layer.fixedToCamera = false;
    this.layer.position.set(0, this.world.centerY / 2);
    this.layer.resizeWorld();
  }
}

export default Level;
