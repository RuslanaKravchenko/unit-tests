import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MovieList from '../MovieList/MovieList';
import { fetchMovieList } from '../../redux/operations/movies';

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieList());
  }, [dispatch]);

  return <MovieList />;
};

export default MainPage;
