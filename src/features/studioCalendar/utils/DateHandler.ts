import { format, getDate, setDate } from 'date-fns';
import { Monad, Mapping } from '../../../utils/Monad';

export class DateMonad extends Monad<Date> {
  static lift = (v: Date) => new DateMonad(v);

  private constructor(private readonly _value: Date = new Date()) {
    super();
  }

  get value() {
    return this._value;
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

  toString = (template = 'DD MMMM, YYYY') => format(this._value, template);
}
