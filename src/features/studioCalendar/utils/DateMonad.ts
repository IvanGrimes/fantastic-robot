import {
  format,
  getDate,
  getMonth,
  getTime,
  setDate,
  setHours,
  setMinutes,
  setMonth,
} from 'date-fns';
import { Monad, Mapping } from '../../../utils/Monad';

export class DateMonad extends Monad<Date> {
  private readonly _value: Date;

  static lift = (v: Date) => new DateMonad(v);

  private constructor(value: Date | number) {
    super();

    if (typeof value === 'number') {
      this._value = new Date(value);
    } else {
      this._value = value;
    }
  }

  get value(): Date {
    return this._value;
  }

  get timestamp(): number {
    return getTime(this._value);
  }

  flatMap = (f: Mapping<Date>): DateMonad => DateMonad.lift(f(this._value));

  private setDay = (amount: number): DateMonad =>
    DateMonad.lift(setDate(this._value, getDate(this._value) + amount));

  addDays = (amount: number): DateMonad => {
    if (Math.sign(amount) === -1 || amount === Infinity) {
      throw new Error(
        `DateHandler.addDays except 'amount' be a positive number, but got: ${amount}`
      );
    }

    return this.setDay(amount);
  };

  truncateDays = (amount: number): DateMonad => {
    if (Math.sign(amount) === -1 || amount === Infinity) {
      throw new Error(
        `DateHandler.truncateDays except 'amount' be a positive number, but got: ${amount}`
      );
    }

    return this.setDay(-amount);
  };

  private setMonth = (amount: number): DateMonad =>
    DateMonad.lift(setMonth(this._value, getMonth(this._value) + amount));

  addMonths = (amount: number): DateMonad => {
    if (Math.sign(amount) === -1 || amount === Infinity) {
      throw new Error(
        `DateHandler.addMonths except 'amount' be a positive number, but got: ${amount}`
      );
    }

    return this.setMonth(amount);
  };

  truncateMonths = (amount: number): DateMonad => {
    if (Math.sign(amount) === -1 || amount === Infinity) {
      throw new Error(
        `DateHandler.truncateMonths except 'amount' be a positive number, but got: ${amount}`
      );
    }

    return this.setMonth(-amount);
  };

  setHours = (amount: number): DateMonad => {
    if (amount > 23 || Math.sign(amount) === -1 || amount === Infinity) {
      throw new Error(
        `DateHandler.setHours except 'amount' be a positive number, but got: ${amount}`
      );
    }

    return DateMonad.lift(setHours(this._value, amount));
  };

  setMinutes = (amount: number): DateMonad => {
    if (amount > 59 || Math.sign(amount) === -1 || amount === Infinity) {
      throw new Error(
        `DateHandler.setMinutes except 'amount' be a positive number, but got: ${amount}`
      );
    }

    return DateMonad.lift(setMinutes(this._value, amount));
  };

  toString = (template = 'DD MMMM, YYYY') => format(this._value, template);
}
