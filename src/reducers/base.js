import { CHANGE_STATE } from '../constants';

const initialState = {
  state: false,
};

const ACTION_HANDLERS = {
  [CHANGE_STATE]: (state, action) => ({ state: action.state ? action.state : !state }),
};

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}