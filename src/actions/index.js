import type Action from './types';

export function getData(): Action {
  return {
    type: 'get-data',
    payload: {
      data: [
        '**Test Data** number 1',
        '*Test Data* number #2 [testing link](https://www.google.com)',
      ],
    },
  };
}

export function testFn(): Action {
  return {
    type: 'test',
  };
}
