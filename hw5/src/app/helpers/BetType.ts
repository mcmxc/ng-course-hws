export class BetType {
  constructor(private label: string, private type: string, private pattern?: RegExp) {
    this.label = label;
    this.type = type;
    this.pattern = pattern;
  }
}
