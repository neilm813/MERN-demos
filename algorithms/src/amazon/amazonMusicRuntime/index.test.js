// '.' is shorthand for the index file located in same folder.
const { musicRuntime } = require('.');

describe('musicRuntime', () => {
  const busDuration1 = 300;
  const songDurations1 = [70, 120, 200, 45, 210, 40, 60, 50];
  const expected1 = [4, 6]; // 210, 60
  /* Explanation:
  There are multiple pairs that add up to 30 seconds before the bus duration.
  The pair at indexes 4 and 6 is the pair with the longest song that is chosen.
  */

  const busDuration2 = 300;
  const songDurations2 = [70, 120, 200, 230, 45, 210, 40, 60, 50];
  const expected2 = [3, 6]; // 230, 40
  /* Explanation:
  This is the pair with the longest song.
  */

  const busDuration3 = 300;
  const songDurations3 = [70, 120, 20, 23, 45, 21, 40, 60, 50];
  const expected3 = [-1, -1]; // not found.

  const testCases = [
    [[busDuration1, songDurations1], expected1],
    [[busDuration2, songDurations2], expected2],
    [[busDuration3, songDurations3], expected3],
  ];

  testCases.forEach((testData) => {
    test('finds the indexes of two songs that add up to the desired duration', () => {
      const [inputs, expectedOutput] = testData;

      // Pass the array of inputs in with spread so they are passed in as separate arguments
      const actual = musicRuntime(...inputs);
      expect(actual).toStrictEqual(expectedOutput);
    });
  });
});
