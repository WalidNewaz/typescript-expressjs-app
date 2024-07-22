import Car from './Car';

/**
 * Represents a person in the system.
 */
export default class Person {
  private id: number;
  private name: string;
  private car: Car;

  constructor(id: number, name: string, car: Car) {
    this.id = id;
    this.name = name;
    this.car = car;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getCar(): Car {
    return this.car;
  }

  public greetPerson(): string {
    return `Hello, ${
      this.name
    }! You drive a ${this.car.year} ${this.car.make} ${this.car.model}.`;
  }
}
