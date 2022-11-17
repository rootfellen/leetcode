const twoSum = function (nums, target) {
  let output = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] + nums[i] === target) {
        output.push(i, j);
      }
    }
  }
  return output;
};

console.log(twoSum([1, 2, 4], 6));
