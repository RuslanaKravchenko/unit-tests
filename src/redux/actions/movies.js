import {
  FETCH_MOVIES_FAIL,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
} from '../constants/movies';

export const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES_REQUEST,
});
export const fetchMoviesSuccess = (payload) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload,
});
export const fetchMoviesFail = (payload) => ({
  type: FETCH_MOVIES_FAIL,
  payload,
});
