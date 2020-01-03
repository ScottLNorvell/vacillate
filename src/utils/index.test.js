import { unique, shuffle, noRepeatNext, getNext, generateRandomPairs } from './index';

afterEach(jest.resetAllMocks);

const coerceShuffleToReverse = () => {
  let i = 1;
  jest.spyOn(Math, 'random').mockImplementation(() => {
    i = i - 0.1;
    return i;
  });
};

describe('utils', () => {
  describe('unique', () => {
    it('is a function', () => {
      expect(unique).toBeInstanceOf(Function);
    });

    it('returns unique values', () => {
      expect(unique([1,1,1,2,4])).toEqual([1,2,4]);
    });
  });

  describe('shuffle', () => {
    it('is a function', () => {
      expect(shuffle).toBeInstanceOf(Function);
    });

    it('returns shuffled values (🤞)', () => {
      coerceShuffleToReverse();

      const initial = [1, 2, 3, 4, 5, 6, 7, 8];

      expect(shuffle(initial)).not.toBe(initial);
      expect(shuffle(initial)).not.toEqual(initial);
    });
  });

  describe('noRepeatNext', () => {
    it('is a function', () => {
      expect(noRepeatNext).toBeInstanceOf(Function);
    });

    it('returns a second shuffled array not repeating values (🤞)', () => {
      coerceShuffleToReverse();

      const initial = [1, 2, 3];

      const result = noRepeatNext(initial);

      expect(result).not.toBe(initial);
      expect(result).not.toEqual(initial);
      expect(result[0]).not.toEqual(3);
    });
  });

  describe('getNext', () => {
    it('is a function', () => {
      expect(getNext).toBeInstanceOf(Function);
    });

    it('returns the original array and incremented index if we are not at the end', () => {
      const initial = [1, 2, 3];

      const [result, index] = getNext(initial, 0);

      expect(index).toEqual(1);
      expect(result).toBe(initial);
    });

    it('returns a new non-repeated array and an index if we are at the end', () => {
      coerceShuffleToReverse();

      const initial = [1, 2, 3];

      const [result, index] = getNext(initial, 2);

      expect(index).toEqual(0);
      expect(result).not.toBe(initial);
      expect(result).toEqual([2, 1, 3]);
    });
  });

  describe('generateRandomPairs', () => {
    it('is a function', () => {
      expect(generateRandomPairs).toBeInstanceOf(Function);
    });

    it('generates random pairs from two arrays', () => {
      const arrA = [1, 2, 3];
      const arrB = [4, 5, 6];

      const iter = generateRandomPairs(arrA, arrB);

      const [a, b] = iter.next().value;

      expect(arrA).toContain(a);
      expect(arrB).toContain(b);
    });

    it('does not repeat when we reach the end', () => {
      coerceShuffleToReverse();

      const arrA = [1, 2, 3];
      const arrB = [4, 5, 6];

      const iter = generateRandomPairs(arrA, arrB);

      // shuffle through the first two values
      iter.next();
      iter.next();

      const [lastA, lastB] = iter.next().value;
      const [a, b] = iter.next().value;

      expect(a).not.toEqual(lastA);
      expect(b).not.toEqual(lastB);
    });
  });
});
