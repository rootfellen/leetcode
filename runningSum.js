const runningSum = function (nums) {
  let output = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    output.push((sum += nums[i]));
  }
  return output;
};

console.log(runningSum([1, 2, 3, 4]));
