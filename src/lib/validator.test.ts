import { getNameValidator, getYearValidator } from './validators';

describe('getNameValidator()', () => {
  test('getNameValidator should throw an error if the name is too short', () => {
    const validateName = getNameValidator(() => {});
    expect(() => validateName('ab')).toThrow(
      'Name must be between 3 and 20 characters',
    );
  });

  test('getNameValidator should throw an error if the name is too long', () => {
    const validateName = getNameValidator(() => {});
    expect(() => validateName('a'.repeat(21))).toThrow(
      'Name must be between 3 and 20 characters',
    );
  });

  test('getNameValidator should trim whitespace', () => {
    const validateName = getNameValidator((value: string) => {
      expect(value).toBe('John Doe');
    });
    validateName('  John Doe  ');
  });

  test('getNameValidator should not throw an error if the name is valid', () => {
    const validateName = getNameValidator(() => {});
    expect(() => validateName('John Doe')).not.toThrow();
  });
});

describe('getYearValidator()', () => {
  test('getYearValidator should throw an error if the year is too old', () => {
    const validateYear = getYearValidator(() => {});
    expect(() => validateYear(1885)).toThrow(
      'Year must be between 1886 and the current year',
    );
  });

  test('getYearValidator should throw an error if the year is in the future', () => {
    const validateYear = getYearValidator(() => {});
    expect(() => validateYear(new Date().getFullYear() + 1)).toThrow(
      'Year must be between 1886 and the current year',
    );
  });

  test('getYearValidator should not throw an error if the year is valid', () => {
    const validateYear = getYearValidator(() => {});
    expect(() => validateYear(2020)).not.toThrow();
  });
});
