import { GET_TOP_AUTHORS_SUCCESS } from '../constants';

const initialState = {
  topAuthors: []
};

export const rootReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TOP_AUTHORS_SUCCESS:
      return {
        ...state,
        topAuthors: [...payload]
      };
    default:
      return state;
  }
};
