const invertTree = function (root) {
  if (!root || (!root.left && !root.right)) {
    return root;
  }

  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};
