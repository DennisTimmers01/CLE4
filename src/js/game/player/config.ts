interface playerConfig {
  animation: {
    frames: {
      left: Array<number>;
      right: Array<number>;
    };
    frameRate: number;
    loop: boolean;
  };
  physics: {
    gravity: number;
    bounce: number;
    worldBound: boolean;
  };
  player: {
    sprite: string;
    position: {
      x: number;
      y: number;
    };
  };
}

const config: playerConfig = {
  animation: {
    frames: {
      left: [0, 1, 2, 3],
      right: [5, 6, 7, 8]
    },
    frameRate: 10,
    loop: true
  },
  physics: {
    gravity: 300,
    bounce: 0.2,
    worldBound: true
  },
  player: {
    sprite: 'player',
    position: {
      x: 32,
      y: 32
    }
  }
};

export default config;