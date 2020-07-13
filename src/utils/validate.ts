export const ERRORS = {
  REQUIRED: "Обязательное поле",
  EMAIL: "Введите корректный емайл",
  PASSWORD: {
    MIN_LENGTH: "Минимальное количество символов 7",
    FORMAT: "Только буквы, цифры или _",
  },
};

const EMAIL_REGEX = /^(?!^\.)([a-zA-Z0-9_\-\.\+]{0,63}[a-zA-Z0-9_\-\+])@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]{1,254}\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
const PASSWORD_REGEX = /^[a-zA-Z_0-9]*$/;

export const required = (value: string) => (value ? undefined : ERRORS.REQUIRED);
export const email = (value: string) => (EMAIL_REGEX.test(value) ? undefined : ERRORS.EMAIL);
export const password = (value: string) => {
  let error = undefined;

  if (value.length < 7) {
    error = ERRORS.PASSWORD.MIN_LENGTH;
  } else if (!PASSWORD_REGEX.test(value)) {
    error = ERRORS.PASSWORD.FORMAT;
  }

  return error;
};

export const composeValidators = (...validators) => (value, allValues, meta) =>
  validators.reduce((error, validator) => error || validator(value, allValues, meta), undefined);
