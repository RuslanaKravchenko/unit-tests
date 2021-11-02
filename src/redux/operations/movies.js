import { API_URL, API_KEY } from '../../constants';
import {
  fetchMoviesFail,
  fetchMoviesRequest,
  fetchMoviesSuccess,
} from '../actions/movies';

export const fetchMovieList = (page) => async (dispatch) => {
  try {
    dispatch(fetchMoviesRequest());

    const response = await fetch(
      `${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
    ).then((response) => response.json());

    dispatch(fetchMoviesSuccess(response.results));
  } catch (error) {
    dispatch(fetchMoviesFail(error));
  }
};
