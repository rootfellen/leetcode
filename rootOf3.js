var checkTree = function (root) {
  return root.val === root.left.val + root.right.val;
};

console.log(checkTree([10, 6, 4]));
