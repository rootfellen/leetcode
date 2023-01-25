var fizzBuzz = function (n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    i % 3 == 0 && i % 5 == 0
      ? arr.push("FizzBuzz")
      : i % 5 == 0
      ? arr.push("Buzz")
      : i % 3 == 0
      ? arr.push("Fizz")
      : arr.push(i.toString());
  }
  return arr;
};
