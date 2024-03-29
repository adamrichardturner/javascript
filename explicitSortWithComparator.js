const explicitSortWithComparator = (inputArray, order) => {
  
    const explicitComparator = (a, b) => {
      let indexA = order.length;
      let indexB = order.length;
      if (order.includes(a)) {
        indexA = order.indexOf(a);
      }
      if (order.includes(b)) {
        indexB = order.indexOf(b);
      }
      return indexA - indexB;
    }
    
    return inputArray.sort(explicitComparator).slice();
  }
  
  // Use this array to test your code:
  const inputArray = ['a', 'b', 'c', 'd', 'e', 'f', 'n', 'y', 'g']
  const order = ['a', 'n', 'd', 'y']
  console.log(explicitSortWithComparator(inputArray, order));
  
  module.exports = explicitSortWithComparator;