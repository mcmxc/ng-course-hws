import Car from './Car';
import { Direction, Color } from './../types';
import { speedLimitCheck } from './../helpers';

class BMW extends Car {
  public manufacturer: string = 'BMW';
  private _speed: number = 0;
  constructor(
    year: number,
    engineVolume: number,
    power: number,
    color: Color,
    isWorking: boolean,
    private maxSpeed: number
  ) {
    super(year, engineVolume, power, color, isWorking);
  }

  move(direction: Direction, speed: number) {
    super.move(direction, speedLimitCheck(speed, this.maxSpeed));
  }

  set speed(value) {
    this._speed = speedLimitCheck(value, this.maxSpeed);
  }

  get speed() {
    return this._speed;
  }
}

export default BMW;
