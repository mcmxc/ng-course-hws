interface HEX {
  hexCode: string;
  getColor(): string;
}
interface RGB {
  r: number;
  g: number;
  b: number;
  getColor(): string;
}

type Color = HEX | RGB;
type Direction = 'top' | 'right' | 'bottom' | 'left';

abstract class Car {
  constructor(
    public year: number,
    public engineVolume: number,
    public power: number,
    public isWorking: boolean,
    public color: Color
  ) {}

  move(direction: Direction, speed: number): void {
    if (!this.isWorking) this.startEngine();
    console.log(
      `car is moving to the ${direction} with a speed of ${speed} km/h`
    );
    this.stopEngine();
  }

  startEngine(): void {
    this.isWorking = true;
    console.log('car engine has been started');
  }

  stopEngine(): void {
    this.isWorking = false;
    console.log('car engine has been stopped');
  }

  get carColor(): string {
    return this.color.getColor();
  }
}

class BMW extends Car {
  manufacturer: string = 'BMW';
  constructor(
    public year: number,
    public engineVolume: number,
    public power: number,
    public isWorking: boolean,
    public color: Color,
    public maxSpeed: number // new property for this class
  ) {
    super(year, engineVolume, power, isWorking, color);
  }
  move(direction: Direction, speed: number): void {
    if (speed <= this.maxSpeed) {
      super.move(direction, speed);
    } else {
      console.log(`too fast for this ${this.manufacturer}, man`);
    }
  }
}

class Audi extends Car {
  manufacturer: string = 'Audi';
  constructor(
    public year: number,
    public engineVolume: number,
    public power: number,
    public isWorking: boolean,
    public color: Color,
    public maxSpeed: number
  ) {
    super(year, engineVolume, power, isWorking, color);
  }
  move(direction: Direction, speed: number): void {
    if (speed <= this.maxSpeed) {
      super.move(direction, speed);
    } else {
      console.log(`too fast for this ${this.manufacturer}, man`);
    }
  }
}
const initColorHex: HEX = {
  hexCode: '323232',
  getColor() {
    return `#${this.hexCode}`;
  }
};
const initColorRGB: RGB = {
  r: 155,
  g: 33,
  b: 205,
  getColor() {
    const { r, g, b } = this;
    return `RGB(${r}, ${g}, ${b})`;
  }
};

const x6: BMW = new BMW(2015, 3.3, 226, true, initColorHex, 285);

console.log(x6.carColor); // #323232
x6.move('top', 180); // car is moving to the top with a speed of 180 km/h; car engine has been stopped

const q7: Audi = new Audi(2016, 4.7, 290, false, initColorRGB, 320);

console.log(q7.carColor); // RGB(155, 33, 205)
q7.move('bottom', 200); //car engine has been started; car is moving to the bottom with a speed of 200 km/h; car engine has been stopped
q7.move('left', 330); //  too fast for this Audi, man
