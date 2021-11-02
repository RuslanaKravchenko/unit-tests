import { createSelector } from 'reselect';
import { FETCH_MOVIES_SUCCESS } from '../constants/movies';

export const initialState = {
  list: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default reducer;

export const movieListSelector = (state) => state.movies.list;

export const sortedByVoteMovieListSelector = createSelector(
  movieListSelector,
  (movies) => [...movies].sort((a, b) => b.vote_average - a.vote_average)
);
