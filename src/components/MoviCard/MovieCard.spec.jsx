import React from 'react';
import { mount } from 'enzyme';
import MovieCard from './MovieCard';
import styles from './MovieCard.module.css';

describe('MovieCard', () => {
  it('should render correctly', () => {
    const wrapper = mount(<MovieCard />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render img element with specific path', () => {
    const poster = 'poster';
    const wrapper = mount(<MovieCard poster={poster} />);
    expect(wrapper.find('img').prop('src')).toEqual(
      'https://image.tmdb.org/t/p/w220_and_h330_face/' + poster
    );
  });

  it('should render title text', () => {
    const title = 'Title text';
    const wrapper = mount(<MovieCard title={title} />);
    expect(wrapper.find(`.${styles.title}`).text()).toEqual(title)
  });
});
