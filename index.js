function hasTargetSum(array, target) {
  //1 step
  const complements = new Set();

  for (let num of array) {
    //n steps
    const complement = target - num;
    if (complements.has(complement)) {
      return true;
    }
    //1 step
    complements.add(num);
  }
  //1 step
  return false;
}

//The Big O time complexity of the function hasTargetSum is O(n).


Pseudocode:
1. 

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log ("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log ("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log ("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));


  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
