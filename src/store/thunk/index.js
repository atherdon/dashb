import topAuthors from '../../data/top-authors';
import { GET_TOP_AUTHORS_SUCCESS, GET_TOP_AUTHORS_FAIL } from '../constants';

export const getTopAuthors = () => async (dispatch) => {
  try {
    dispatch({ type: GET_TOP_AUTHORS_SUCCESS, payload: topAuthors });
  } catch (e) {
    dispatch({ type: GET_TOP_AUTHORS_FAIL });
  }
};
