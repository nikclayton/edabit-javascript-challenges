function tree(h) {
  const cTree = [];
  if(h === 1) {
    cTree.push("#")
    return cTree;
  }
  for (let i = 1; i < h + 1; i++) {
    let layer = "";
    for (let k = 1; k < h - i ; k++) {
      layer += " ";
    }
    for (let j = 0; j < h; j++) {
      if (j === 0) {
        layer += "#";
      } else  {
        layer += "##"
      }
    }
    for (let k = 1; k < h - i; k++) {
      layer += " ";
    }
    cTree.push(layer);
  }
  return cTree;
}

module.exports = tree;
