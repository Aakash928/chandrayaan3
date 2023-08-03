class Chandrayaan3 {
  constructor() {
    this.position = { x: 0, y: 0, z: 0 };
    this.direction = "N";
  }

  moveForward() {
    switch (this.direction) {
      case "N":
        this.position.y += 1;
        break;
      case "S":
        this.position.y -= 1;
        break;
      case "E":
        this.position.x += 1;
        break;
      case "W":
        this.position.x -= 1;
        break;
      case "Up":
        this.position.z += 1;
        break;
      case "Down":
        this.position.z -= 1;
        break;
      default:
        break;
    }
  }

  moveBackward() {
    switch (this.direction) {
      case "N":
        this.position.y -= 1;
        break;
      case "S":
        this.position.y += 1;
        break;
      case "E":
        this.position.x -= 1;
        break;
      case "W":
        this.position.x += 1;
        break;
      case "Up":
        this.position.z -= 1;
        break;
      case "Down":
        this.position.z += 1;
        break;
      default:
        break;
    }
  }

  turnRight() {
    switch (this.direction) {
      case "N":
        this.direction = "E";
        break;
      case "S":
        this.direction = "W";
        break;
      case "E":
        this.direction = "S";
        break;
      case "W":
        this.direction = "N";
        break;
        case "Up":
          this.direction = "E";
          break;
        case "Down":
          this.direction = "E";
          break;
      default:
        break;
    }
  }

  turnLeft() {
    switch (this.direction) {
      case "N":
        this.direction = "W";
        break;
      case "S":
        this.direction = "E";
        break;
      case "E":
        this.direction = "N";
        break;
      case "W":
        this.direction = "S";
        break;
      case "Up":
        this.direction = "W";
        break;
      case "Down":
        this.direction = "W";
        break;
      default:
        break;
    }
  }

  turnUp() {
    switch (this.direction) {
      case "N":
      case "S":
      case "E":
      case "W":
        this.direction = "Up";
        break;
      default:
        break;
    }
  }

  turnDown() {
    switch (this.direction) {
      case "N":
      case "S":
      case "E":
      case "W":
        this.direction = "Down";
        break;
      default:
        break;
    }
  }

  executeCommands(commands) {
    for (const command of commands) {
      switch (command) {
        case "f":
          this.moveForward();
          break;
        case "b":
          this.moveBackward();
          break;
        case "r":
          this.turnRight();
          break;
        case "l":
          this.turnLeft();
          break;
        case "u":
          this.turnUp();
          break;
        case "d":
          this.turnDown();
          break;
        default:
          break;
      }
    }
  }
}

module.exports = Chandrayaan3;
