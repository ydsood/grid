import type Action from './types';

export function getData(): Action {
  return {
    type: 'get-data',
    payload: {
      data: ['**Test** data', '*Hobby 2* **Test**']
    }
  };
}

export function getGridData(): Action {
  return {
    type: 'get-grid-data',
    payload: {
      data: [
        {
          name: 'Test 1',
          role: '8',
          phoneNumber: '1234567890'
        },
        {
          name: 'Test 2',
          role: '31',
          phoneNumber: '1234-890'
        },
        {
          name: 'Bene 1',
          role: '10',
          phoneNumber: '1234590'
        },
        {
          name: 'Bene 2',
          role: '10',
          phoneNumber: '1234567890'
        }
      ]
    }
  };
}

export function testFn(): Action {
  return {
    type: 'test'
  };
}
