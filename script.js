function threeSum(arr, target) {
  //your code here
  arr.sort(function (a, b) {
    return a - b;
  });
  let i, j, k;
  let nearest_target = 0,
    least_diff = Number.MAX_VALUE;
  for (i = 0; i < arr.length - 2; i++) {
    j = i + 1;
    k = arr.length - 1;
    while (j < k) {
      let sum = Number(arr[i]) + Number(arr[j]) + Number(arr[k]);
      let diff = Math.abs(sum - target);
      if (diff < least_diff) {
        least_diff = diff;
        nearest_target = sum;
      }
      if (sum == target) return nearest_target;
      else if (sum > target) k--;
      else j++;
    }
  }
  return nearest_target;
}
// let arr=['1','2','-4','-1'],target=1;
// console.log(threeSum(arr, target));
module.exports = threeSum;
