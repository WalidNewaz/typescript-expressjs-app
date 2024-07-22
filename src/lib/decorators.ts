import { getNameValidator, getYearValidator } from './validators';

/**
 * Accessor decorator to format the name of a person or car.
 * @param target
 * @param propertyKey
 * @param descriptor
 */
export function formatName(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  const originalSet = descriptor.set;
  descriptor.set = getNameValidator(originalSet);
}

/**
 * Accessor decorator to format the name of a person or car.
 */
export function formatYear(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  const originalSet = descriptor.set;
  descriptor.set = getYearValidator(originalSet);
}
