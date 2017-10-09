export class Tab {
  constructor(
    public label: string,
    public header: string,
    public content: string,
    // public isActive: boolean
  ) {
    this.label = label;
    this.content = content;
    this.header = header;
    // this.isActive = isActive;
  }
}
