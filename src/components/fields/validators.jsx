// @flow
export const email = (value: string) =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined);

const onlyNumberValidator = (value: string, expectedLength: number, fieldName: string) => {
  let errorMsg;
  if (!value) {
    return errorMsg;
  }
  if (value.length !== expectedLength) {
    errorMsg = `${fieldName} must be ${expectedLength} digits long`;
  }

  if (!/^\d+$/.test(value)) {
    errorMsg = `${fieldName} cannot contain any other digits`;
  }
  return errorMsg;
};

export const phone = (value: string) => onlyNumberValidator(value, 10, 'Phone number');

export const ssn = (value: string) => onlyNumberValidator(value, 9, 'Social Security Number');

export const zip = (value: string) => onlyNumberValidator(value, 5, 'Zip');

export const percentage = (value: string) => {
  if (!value) {
    return value;
  }

  return parseFloat(value) > 100 || parseFloat(value) < 0
    ? 'Percentage must be between 0% to 100%'
    : undefined;
};
