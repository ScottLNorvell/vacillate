export const unique = arr => [...new Set(arr)];

export const shuffle = arr => arr
  .map(a => [Math.random(), a])
  .sort((a, b) => a[0] - b[0])
  .map(a => a[1]);

/**
 * Return shuffled array making sure no values are repeated
 * (important for vacillating!)
 */
export const noRepeatNext = (arr) => {
  const shuffled = shuffle(arr);
  return arr[arr.length - 1] === shuffled[0]
    ? [...shuffled.slice(1), shuffled[0]]
    : shuffled;
};

export const getNext = (arr, i) =>
  i === arr.length - 1
    ? [noRepeatNext(arr), 0]
    : [arr, i + 1];

export function* generateRandomPairs(a, b) {
  let aIndex = a.length - 1;
  let bIndex = b.length - 1;

  while (true) {
    [a, aIndex] = getNext(a, aIndex);
    [b, bIndex] = getNext(b, bIndex);

    yield [
      a[aIndex],
      b[bIndex],
    ];
  }
}

export const templates = [
  idea => `Just kidding: ${idea}`,
  idea => `No wait: ${idea}`,
  idea => `Actually: ${idea}`,
  idea => `What I really meant was: ${idea}`,
];
