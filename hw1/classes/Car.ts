import { Direction, Color } from './../types';

abstract class Car {
  protected year: number;
  protected engineVolume: number;
  protected power: number;
  private _color: Color;
  private isWorking: boolean;

  constructor(
    year: number,
    engineVolume: number,
    power: number,
    color: Color,
    isWorking: boolean
  ) {
    this.year = year;
    this.engineVolume;
    this.power = power;
    this._color = color;
    this.isWorking = isWorking;
  }

  move(direction: Direction, speed: number): void {
    if (!this.isWorking) this.startEngine();
    console.log(`car is moving to the ${direction} with a speed of ${speed} km/h`);
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

  get color() {
    return this._color.color;
  }

  set color(value: string) {
    this._color.color = value;
  }
}

export default Car;
