const romanToInt = function (s) {
  let output = [];
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    const current = symbols[s[i]];
    const next = symbols[s[i + 1]];
    if (current < next) {
      output.push(next - current);
      i++;
    } else {
      output.push(current);
    }
  }
  return output.reduce((acc, curr) => acc + curr, 0);
};

console.log(romanToInt("MCMXCIV"));
