function sumOfCubes(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    let cube = Math.cube(nums[i])
    total += cube;
  }

  return total;
}

module.exports = sumOfCubes;
