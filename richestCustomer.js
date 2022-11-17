const maximumWealth = function (accounts) {
  let output = Math.max(
    ...accounts.map((account) => account.reduce((acc, curr) => acc + curr, 0))
  );
  return output;
};

console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
);
