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


//Pseudocode:
//1. Create an empty set called 'complements'.
//2.For each Number(num) in the array:
  //3. Calculate the 'complement' by subtracting it from the 'target' (target - num).
  //4. If the 'complement' is found in the 'complements' set, return true.
  //5. If 'complement' is not found in 'complements' set, Number(num) is added to 'complements' set.
//6. Return false.


/*
  My function hasTargetSum first creates an empty set called complements to store the numbers from the given arrays.
  Then,it  goes ahead to create a for...of loop where for each number in the array,it calculates its complement by subtracting it from the target value.
  If the complement exists in the `complements` set,it means we found the pair of number that add up to the target, and we return `true`. 
  Otherwise, if the loop completes without finding a match,we return `false`.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log ("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log ("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log ("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));


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
