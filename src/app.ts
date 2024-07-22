// Models
import Person from './model/Person';
import Car from './model/Car';

// Static imports
import persons from './db/persons';
import cars from './db/cars';

export default class CarApp {
  public greetUser(id: number) {
    const personName = persons[id - 1]?.name as string;
    if (!personName) {
      return 'Person not found';
    }
    const carData = cars.find((car) => car.owner === personName);
    const car = new Car();
    car.id = carData.id;
    car.make = carData.make;
    car.model = carData.model;
    car.year = carData.year;
    car.owner = carData.owner;
    const person = new Person(id, personName, car);
    return person.greetPerson();
  }

  public getUser(id: number) {
    const personName = persons[id - 1]?.name as string;
    if (!personName) {
      return 'Person not found';
    }
    const carData = cars.find((car) => car.owner === personName);
    const car = new Car();
    car.id = carData.id;
    car.make = carData.make;
    car.model = carData.model;
    car.year = carData.year;
    car.owner = carData.owner;
    return {
      id,
      name: personName,
      car: {
        id: car.id,
        make: car.make,
        model: car.model,
        year: car.year,
      },
    };
  }
}
