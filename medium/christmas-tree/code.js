function tree(h) {
  const cTree = [];
  for (let i = 1; i < h + 1; i++) {
    let layer = "";
    for (let k = 0; k < h - i ; k++) {
      layer += " ";
    }
    for (let j = 0; j < i; j++) {
      if (j === 0) {
        layer += "#";
      } else  {
        layer += "##"
      }
    }
    for (let k = 0; k < h - i; k++) {
      layer += " ";
    }
    cTree.push(layer);
  }
  return cTree;
}

module.exports = tree;
