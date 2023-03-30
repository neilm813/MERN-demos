const heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const expected1 = 49;
// Explanation: heights1[1] and heights1[8] as container edges.
// Length = 8 - 1. Height = 7

const heights2 = [1, 1];
const expected2 = 1;

const heights3 = [4, 3, 2, 1, 4];
const expected3 = 16;

const heights4 = [1, 2, 1];
const expected4 = 2;

/* 
- The short wall height needs to be used in the area calculation: shorterWallHeight * (j - i)
- The two highest walls are not necessarily used because a wider container may hold more water (area)
- Since the a shorter wall may be used, how do I know when to skip a taller wall?
*/

/* 
Pseudocode

loop i
  loop j
    compare heights to find smaller height
    calculate area with smaller height
    update max if larger

return max area
*/

function findLargestContainerArea(heights) {
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      const leftWallHeight = heights[i];
      const rightWallHeight = heights[j];
      const shorterWallHeight = Math.min(leftWallHeight, rightWallHeight);
      const containerLength = j - i;
      const currentArea = shorterWallHeight * containerLength;

      if (currentArea > maxArea) {
        maxArea = currentArea;
      }
    }
  }
  return maxArea;
}

function findLargestContainerAreaTimeOptimized(heights) {
  let maxArea = 0;
  let leftIndex = 0;
  let rightIndex = heights.length - 1;

  while (leftIndex < rightIndex) {
    const leftWallHeight = heights[leftIndex];
    const rightWallHeight = heights[rightIndex];
    const shorterWallHeight = Math.min(leftWallHeight, rightWallHeight);
    const containerLength = rightIndex - leftIndex;
    const currentArea = shorterWallHeight * containerLength;

    if (currentArea > maxArea) {
      maxArea = currentArea;
    }

    if (leftWallHeight < rightWallHeight) {
      leftIndex += 1;
    } else {
      rightIndex -= 1;
    }
  }
  return maxArea;
}
