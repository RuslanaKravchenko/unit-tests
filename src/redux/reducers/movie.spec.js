import reducer, { initialState, movieListSelector } from './movies';
import { fetchMoviesSuccess } from '../actions/movies';

describe('movie reducer', () => {
  it('should handle FETCH_MOVIES_SUCCESS action type', () => {
    const payload = [{ id: 'movie-id' }];
    const action = fetchMoviesSuccess(payload);
    const expectedState = {
      list: payload,
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});

describe('movieListSelector', () => {
  it('should return movie list from state', () => {
    const state = {
        movies: {
        list: [{ id: 'movie-id' }],
      },
    };
    expect(movieListSelector(state)).toEqual(state.movies.list)
  });
});
