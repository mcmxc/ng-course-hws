import { RGB } from './../interfaces';
import { parseColor } from './../helpers';

class Color {
  public value: RGB;
  constructor(color: string) {
    this.value = parseColor(color);
  }

  set color(value: string) {
    this.value = parseColor(value);
  }

  get color() {
    const { r, g, b } = this.value;
    return `RGB(${r}, ${g}, ${b})`;
  }
}

export default Color;
