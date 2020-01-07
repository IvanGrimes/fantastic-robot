export class Validator {
  private error?: string;

  constructor(private readonly value?: string) {
    this.value = value;
  }

  private setError = (
    validation: (value: string) => boolean,
    message: string,
    required = false
  ) => {
    const isEmpty =
      required && !(validation as (value?: string) => boolean)(this.value);
    const invalid = this.value && !validation(this.value);

    if (isEmpty || invalid) {
      this.error = message;
    }
  };

  private hasNoError = () => !this.error;

  private guard = (fn: Function) => {
    if (this.hasNoError()) {
      fn();
    }

    return this;
  };

  min = (length: number, message: string) =>
    this.guard(() => this.setError(value => value.length >= length, message));

  max = (length: number, message: string) =>
    this.guard(() => this.setError(value => value.length <= length, message));

  alphabetical = (message: string) =>
    this.guard(() =>
      this.setError(value => {
        const regex = /^[а-яА-ЯёЁ]+$/gm;

        return regex.test(value);
      }, message)
    );

  phone = (message: string) =>
    this.guard(() => {
      // eslint-disable-next-line no-useless-escape
      const regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm;

      this.setError(value => regex.test(value), message);
    });

  email = (message: string) =>
    this.guard(() => {
      // eslint-disable-next-line no-useless-escape
      const regex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
      const check = (value: string) => {
        if (regex.test(value)) {
          const parts = value.split('@');

          if (value.length > 254) {
            return false;
          }
          if (parts[0].length > 64) {
            return false;
          }
          if (parts[1].split('.').some(part => part.length > 63)) {
            return false;
          }
        } else {
          return false;
        }

        return true;
      };

      this.setError(check, message);
    });

  required = (message: string) =>
    this.guard(() => this.setError(value => Boolean(value), message, true));

  getError = () => this.error;
}
