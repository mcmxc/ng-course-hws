import { RGB } from './interfaces';

export function parseColor(value: string): RGB {
  if (value.startsWith('RGB')) {
    const [r, g, b] = /\(([^)]+)\)/
      .exec(value)[1]
      .split(',')
      .map(el => Number(el));
    return { r, g, b };
  } else if (value.startsWith('#') && value.length === 7) {
    const [r, g, b] = value.match(/[A-Za-z0-9]{2}/g).map(v => parseInt(v, 16));
    return { r, g, b };
  } else {
    throw new Error('Color value should have either RGB() or full #HEX format');
  }
}

export function speedLimitCheck(speed: number, maxSpeed: number): number {
  return speed > maxSpeed ? maxSpeed : speed;
}
