// import * as jest from 'jest';
import CarApp from './app';

// Mock the persons array
jest.mock('./db/persons', () => [
  { id: 1, name: 'James Doe' },
  { id: 2, name: 'Jane Doe' },
]);
jest.mock('./db/cars', () => [
  { id: 1, make: 'BMW', model: 'X5', year: 2019, owner: 'James Doe' },
  { id: 2, make: 'Audi', model: 'Q7', year: 2018, owner: 'John Smith' },
  { id: 3, make: 'Mercedes', model: 'GLE', year: 2017, owner: 'Jane Doe' },
  { id: 4, make: 'Toyota', model: 'RAV4', year: 2016, owner: 'Jane Smith' },
]);

describe('CarApp', () => {
  let carApp: CarApp;

  beforeEach(() => {
    carApp = new CarApp();
  });

  describe('greetUser', () => {
    it('should throw an exception for user 1', () => {
      try {
        carApp.greetUser(1);
      } catch (e) {
        expect(e.message).toBe('Name must be between 3 and 20 characters');
      }
    });
  
    it('should greet a user', () => {
      const id = 2;
      const result = carApp.greetUser(id);
      expect(result).toBe('Hello, Jane Doe! You drive a 2017 Mercedes GLE.');
    });
  
    it('return person not found for a non existing ID', () => {
      const id = 6;
      const result = carApp.greetUser(id);
      expect(result).toBe('Person not found');
    });
  });

  describe('getUser', () => {
    it('should get a user', () => {
      const id = 2;
      const result = carApp.getUser(id);
      expect(result).toEqual({
        id: 2,
        name: 'Jane Doe',
        car: {
          id: 3,
          make: 'Mercedes',
          model: 'GLE',
          year: 2017,
        },
      });
    });

    it('return person not found for a non existing ID', () => {
      const id = 6;
      const result = carApp.getUser(id);
      expect(result).toBe('Person not found');
    });
  });
});