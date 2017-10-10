export class Tab {
  constructor(public label: string, public header: string, public content: string) {
    this.label = label;
    this.content = content;
    this.header = header;
  }
}
