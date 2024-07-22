import Car from './Car';

describe('Car', () => {
  let car: Car;

  beforeEach(() => {
    car = new Car();
  });

  it('should create an instance', () => {
    expect(car).toBeTruthy();
  });

  it('should have an id', () => {
    car.id = 1;
    expect(car.id).toEqual(1);
  });

  it('should have a make', () => {
    car.make = 'Toyota';
    expect(car.make).toEqual('Toyota');
  });

  it('should have a model', () => {
    car.model = 'Camry';
    expect(car.model).toEqual('Camry');
  });

  it('should have a year', () => {
    car.year = 2019;
    expect(car.year).toEqual(2019);
  });

  it('should have an owner', () => {
    car.owner = 'Alice';
    expect(car.owner).toEqual('Alice');
  });
});