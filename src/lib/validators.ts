export function getNameValidator(originalSet: (v: any) => void) {
  return function validateName(value: string) {
    if (value.length < 3 || value.length > 20) {
      throw new Error('Name must be between 3 and 20 characters');
    }
    originalSet.call(this, value.trim()); // Trim whitespace
  };
}

export function getYearValidator(originalSet: (v: any) => void) {
  return function validateYear(value: number) {
    if (value < 1886 || value > new Date().getFullYear()) {
      throw new Error('Year must be between 1886 and the current year');
    }
    originalSet.call(this, value);
  };
}
