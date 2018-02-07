// @flow

const onlyNumberNormalizer = (value: string, valueLen: number) => {
  if (!value) {
    return value;
  }
  let onlyNums = value.replace(/[^\d]/g, '');
  if (valueLen !== 0) {
    onlyNums = onlyNums.slice(0, valueLen);
  }
  return onlyNums;
};

export const percentageNormalizer = (value: string) => {
  if (!value) return value;

  const stringValue = value.toString();
  let onlyNums = parseFloat(stringValue.replace(/[^\d\.]/g, ''));

  const MIN = 0;
  const MAX = 100;
  if (parseFloat(value) < MIN) onlyNums = MIN;
  if (parseFloat(value) > MAX) onlyNums = MAX;

  return onlyNums / 100.0;
};

export const phone = (value: string) => onlyNumberNormalizer(value, 10);

export const ssn = (value: string) => onlyNumberNormalizer(value, 9);

export const zip = (value: string) => onlyNumberNormalizer(value, 5);

export const number = (value: string) => onlyNumberNormalizer(value, 0);
