function efficientSolution(heights) {
    let totalWater = 0;
    let leftPointer = 0;
    let rightPointer = heights.length - 1;
    let leftBound = 0;
    let rightBound = 0;
    
    while (leftPointer < rightPointer) {
        if (heights[leftPointer] <= heights[rightPointer]) {
            leftBound = Math.max(heights[leftPointer], leftBound);
            totalWater += leftBound - heights[leftPointer];
            leftPointer++;
        } else {
            rightBound = Math.max(heights[rightPointer], rightBound);
            totalWater += rightBound - heights[rightPointer];
            rightPointer--;
        }
    }
    return totalWater;
}
  
const testArray = [4, 2, 1, 3, 0, 1, 2];
console.log(efficientSolution(testArray));

