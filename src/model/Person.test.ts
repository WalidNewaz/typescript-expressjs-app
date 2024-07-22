import Person from './Person';
import Car from './Car';

describe('Person', () => {
  it('should greet a person', () => {
    const toyota = new Car(1, 'Toyota', 'Corolla', 2010, 'Alice');
    const person = new Person(1, 'Alice', toyota);
    expect(person.greetPerson()).toBe(
      'Hello, Alice! You drive a 2010 Toyota Corolla.',
    );
  });

  it('should have an id', () => {
    const toyota = new Car(1, 'Toyota', 'Corolla', 2010, 'Alice');
    const person = new Person(1, 'Alice', toyota);
    expect(person.getId()).toBe(1);
  });

  it('should have a name', () => {
    const toyota = new Car(1, 'Toyota', 'Corolla', 2010, 'Alice');
    const person = new Person(1, 'Alice', toyota);
    expect(person.getName()).toBe('Alice');
  });

  it('should have a car', () => {
    const toyota = new Car(1, 'Toyota', 'Corolla', 2010, 'Alice');
    const person = new Person(1, 'Alice', toyota);
    expect(person.getCar()).toBe(toyota);
  });
});
