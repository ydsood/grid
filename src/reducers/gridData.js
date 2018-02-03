import type { Action } from '../actions/types';

type State = Array<string>;
const intialState: State = [];

export default function(state: State = intialState, action: Action): State {
  if (action.type === 'get-grid-data') {
    return action.payload.data;
  }
  return state;
}
