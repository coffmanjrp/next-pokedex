import { SET_OFFSET, SET_LIMIT } from '../types';

const initialState = {
  offset: 0,
  limit: 0,
};

const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OFFSET:
      return {
        ...state,
        offset: action.payload,
      };
    case SET_LIMIT:
      return {
        ...state,
        limit: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonsReducer;
