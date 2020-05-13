export abstract class Entity<N extends string, D extends {} = any> {
  constructor(readonly name: N, private readonly data: D) {
    this.name = name;
    this.data = data;
  }

  getName = () => this.name;

  is = (name: string) => this.getName() === name;

  getData = () => this.data;
}
