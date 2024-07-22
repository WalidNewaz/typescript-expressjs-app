import { formatName, formatYear } from './decorators';

describe('formatName', () => {
  it('should format the name of a person or car', () => {
    const target = {
      name: '  john doe  ',
    };
    const propertyKey = 'name';
    const originalSet = jest.fn();
    const descriptor = {
      set: originalSet,
    };
    formatName(target, propertyKey, descriptor);
    descriptor.set('  John Doe  ');
    expect(originalSet).toHaveBeenCalledWith('John Doe');
  });
});

describe('formatYear', () => {
  it('should format the year of a car', () => {
    const target = {
      year: 2020,
    };
    const propertyKey = 'year';
    const originalSet = jest.fn();
    const descriptor = {
      set: originalSet,
    };
    formatYear(target, propertyKey, descriptor);
    descriptor.set(2020);
    expect(originalSet).toHaveBeenCalledWith(2020);
  });
});
