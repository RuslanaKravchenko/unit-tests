import React from 'react';
import { getMovieImagePath } from '../../utils/movies';
import styles from './MovieCard.module.css';

const MovieCard = ({ poster, title, average }) => (
  <div className={styles.card}>
    <img src={getMovieImagePath(poster)} alt={title} />
    <div className={styles.description}>
      <span className={styles.title}>{title}</span>
      <span className={styles.average}>{average}</span>
    </div>
  </div>
);

export default MovieCard;
