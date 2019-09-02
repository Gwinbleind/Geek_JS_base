const settings = {
  rowCount: 10,
  colCount: 10,
  startPositionX: 0,
  startPositionY: 0,
};
const player = {
  x: null,
  y: null,

  init(startX, startY) {
    this.x = startX;
    this.y = startY;
  },

  move(direction) {
    switch (direction) {
      case 2:
        if (this.y < game.settings.rowCount) {
          this.y++
        }
        break;
      case 4:
        if (this.x > 0) {
          this.x--
        }
        break;
      case 6:
        if (this.x < game.settings.colCount) {
          this.x++
        }
        break;
      case 8:
        if (this.y > 0) {
          this.y--
        }
    }
    game.moves[game.moves.length-1].moveTo = {x: this.x, y: this.y};
    game.moves.push(moveElem);
    game.moves[game.moves.length-1].moveFrom = game.moves[game.moves.length-2].moveTo;
  }
};
const moveElem = {
  [Symbol.iterator]: {}, //ЭЭЭЭ-ксперимент!
  index: 0,
  moveFrom: {
    x: 0,
    y: 0
  },
  moveTo: {
    x: 0,
    y: 0
  }
};

const game = {
  settings,
  player,
  moves: [],

  run() {
    this.player.init(this.settings.startPositionX, this.settings.startPositionY);
    this.moves.push(moveElem);
    this.moves[0].moveFrom = {x: this.settings.startPositionX, y: this.settings.startPositionY};

    while(true) {
      this.render();

      const direction = this.getDirection();

      if (direction === -1) {
        return alert('До свидания!');
      }

      this.player.move(direction);
    }
  },

  render() {
    let map = '';

    for (let row = 0; row < this.settings.rowCount; row++) {
      for (let col = 0; col < this.settings.colCount; col++) {
        if (this.player.y === row && this.player.x === col) {
          map += 'o ';
        } else {
          map += 'x ';
        }
      }
      map += '\n'
    }

    console.clear();
    console.log(map);
  },

  getDirection() {
    const availableDirections = [-1, 2, 4, 6, 8];

    while(true) {
      let stringDirection = prompt('Введите число, куда хотите переместиться, -1 для выхода, ход №х для просмотра ходов');
      const direction = parseInt(stringDirection);

      if (!availableDirections.includes(direction) && stringDirection.includes('ход №')) {
        let i = +stringDirection.slice(5,6);
        // console.log(this.moves[+stringDirection.slice(5,6)]);
        alert(`Ход №${i}: из ${this.moves[i].moveFrom.x}:${this.moves[i].moveFrom.y} в ${this.moves[i].moveTo.x}:${this.moves[i].moveTo.y}`);
      }
      if (!availableDirections.includes(direction)) {
        alert(`Для перемещения необходимо ввести одно из чисел: ${availableDirections.join(', ')}.`);
        continue;
      }

      return direction;
    }
  },
};

game.run();
