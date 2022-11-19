const isPalindrome = function (x) {
  let str = String(x).split("");
  let reversed = Number(str.reverse().join(""));
  return reversed === x ? true : false;
};

console.log(isPalindrome(10));
