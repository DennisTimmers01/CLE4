class Platform {
  ground: any;
  ledge: any;

  createLedge(ctx: Phaser.Group, posX: number, posY: number) {
    this.ledge = ctx.create(posX, posY, 'ground');
    this.ledge.body.immovable = true;
    return this.ledge;
  }

  createGround(
    ctx: Phaser.Group,
    posX: number,
    posY: number,
    immovable: boolean = true
  ) {
    this.ground = ctx.create(posX, posY, 'ground');
    this.ground.body.immovable = true;
    this.ground.scale.setTo(2, 1);
    return this.ground;
  }
}

export default new Platform();
