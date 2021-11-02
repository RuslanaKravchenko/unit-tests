import { add, div } from './math';

describe('add', () => {
  it('should return sum of numbers', () => {
    expect(add(2, 5)).toEqual(7);
  });

  it('should return sum of numbers in string type', () => {
    expect(add('2', '5')).toEqual(7);
  });

  it('should return number', () => {
    expect(add(5)).toEqual(5);
  });
});

describe('div', () => {
  it('should return div form two numbers', () => {
    expect(div(20, 5)).toEqual(4);
  });

  // it('should throw error', () => {
  //   expect(div(20, 0)).toThrowError('Error with div');
  // });
});
