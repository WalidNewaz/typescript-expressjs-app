import { formatName, formatYear } from '../lib/decorators';

/**
 * Represents a car in the system.
 */
export default class Car {
  private _id: number;
  private _make: string;
  private _model: string;
  private _year: number;
  private _owner: string;

  constructor(
    id?: number,
    make?: string,
    model?: string,
    year?: number,
    owner?: string,
  ) {
    this._id = id;
    this._make = make;
    this._model = model;
    this._year = year;
    this._owner = owner;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get make(): string {
    return this._make;
  }
  
  @formatName
  set make(value: string) {
    this._make = value;
  }

  // @formatName
  get model(): string {
    return this._model;
  }

  @formatName
  set model(value: string) {
    this._model = value;
  }

  get year(): number {
    return this._year;
  }

  @formatYear
  set year(value: number) {
    this._year = value;
  }

  get owner(): string {
    return this._owner;
  }

  set owner(value: string) {
    this._owner = value;
  }
}
