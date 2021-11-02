import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../MoviCard/MovieCard';
import { movieListSelector } from '../../redux/reducers/movies';
import styles from './MovieList.module.css';

const MovieList = () => {
  const movieList = useSelector(movieListSelector);

  return movieList.length ? (
    <ul className={styles.list}>
      {movieList.map((movie) => (
        <li key={movie.id} className={styles.item}>
          <MovieCard
            title={movie.title}
            average={movie.vote_average}
            poster={movie.poster_path}
          />
        </li>
      ))}
    </ul>
  ) : null;
};

export default MovieList;
