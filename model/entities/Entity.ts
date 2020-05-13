export abstract class Entity<D extends {} = any> {
  protected constructor(
    private readonly name: string,
    private readonly data: D
  ) {
    this.name = name;
    this.data = data;
  }

  getName = () => this.name;

  is = (name: string) => this.getName() === name;

  getData = () => this.data;
}
