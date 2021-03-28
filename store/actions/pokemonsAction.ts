import { SET_OFFSET, SET_LIMIT } from '../types';

export const setOffset = (offset) => (dispatch) => {
  dispatch({
    type: SET_OFFSET,
    payload: offset,
  });
};

export const setLimit = (limit) => (dispatch) => {
  dispatch({
    type: SET_LIMIT,
    payload: limit,
  });
};
