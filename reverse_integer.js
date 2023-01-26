var reverse = function (x) {
  const s = parseInt(x.toString().split("").reverse().join(""));
  return s >= 2 ** 31 ? 0 : s * Math.sign(x);
};

console.log(reverse(-123));
