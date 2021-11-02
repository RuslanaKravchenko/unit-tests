import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import { mount } from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import MovieList from '../MovieList/MovieList';
import MainPage from './MainPage';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('MainPage', () => {
  const dispatch = jest.fn();

  let store;
  const state = {
    movies: {
      list: [],
    },
  };

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatch);
    store = createMockStore(state);
  });

  it('should render MovieList component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
    expect(wrapper.exists(MovieList)).toEqual(true);
  });

  it('should dispatch fetch movie list action', () => {
    mount(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );

    expect(dispatch).toHaveBeenCalled();
  });
});
