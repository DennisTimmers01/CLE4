interface playerConfig {
  animation: {
    frames: {
      left: Array<number>;
      right: Array<number>;
      default: number;
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
  movement: {
    velocity: {
      x: number;
      default: number;
      jump: number;
    };
  };
}

const config: playerConfig = {
  animation: {
    frames: {
      left: [0, 1, 2, 3],
      right: [5, 6, 7, 8],
      default: 4
    },
    frameRate: 10,
    loop: true
  },
  physics: {
    gravity: 300,
    bounce: 0.4,
    worldBound: true
  },
  player: {
    sprite: 'player',
    position: {
      x: 32,
      y: 32
    }
  },
  movement: {
    velocity: {
      x: 150,
      default: 0,
      jump: -300
    }
  }
};

export default config;
