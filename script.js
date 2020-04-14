var nums = [2, 7, 11, 15];
var array = [];
var target = 9;

var twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    array[i] = hash[target - nums[i]];
    if (hash[target - nums[i]] !== undefined)
      return [i, hash[target - nums[i]]];
    hash[nums[i]] = i;
  }
}

let hash={};
hash[9 - 2]=0;
hash[9 - 7]=1;
hash[9 - 11]=2;
hash[9 - 15]=3;
console.log(hash[9 - 2]);

