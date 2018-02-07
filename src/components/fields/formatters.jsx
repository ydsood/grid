// @flow

export const percentageFormatter = (value: number) => {
  if (!value) {
    return value || '';
  }
  return `${value * 100.0} %`;
};

export const phone = (value: string) => {
  if (!value) {
    return value || '';
  }
  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 3) {
    return onlyNums;
  }
  if (onlyNums.length <= 6) {
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
  }
  return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(6, 10)}`;
};

export const ssn = (value: string) => {
  if (!value) {
    return value || '';
  }
  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 3) {
    return onlyNums;
  }
  if (onlyNums.length <= 5) {
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
  }
  return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 5)}-${onlyNums.slice(5, 9)}`;
};

export const zip = (value: string) => {
  if (!value) {
    return value || '';
  }

  const onlyNums = value.replace(/[^\d]/g, '');

  return onlyNums.slice(0, 5);
};

export const date = (value: string) => {
  if (!value) {
    return value || '';
  }
  if (value.includes('T')) {
    const [x] = value.split('T');
    value = x;
  }
  return value;
};

export const number = (value: string) => {
  if (!value) {
    return value || '';
  }

  const onlyNums = value.replace(/[^\d]/g, '');
  return onlyNums;
};
