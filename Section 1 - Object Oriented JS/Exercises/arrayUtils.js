class ArrayUtils {
    constructor() {
        throw new Error("ArrayUtils cannot be instantiated.");

    }
    static average(nums) {
        if (nums.length === 0) {
            throw new Error('Array cannot be empty');
        }
        let totalnums = 0;
        for (const num of nums) {
            totalnums += num;
        }
        return `The total average is ${totalnums / nums.length}`
    }

    static max(nums) {
        if (nums.length === 0) {
            throw new Error('Array cannot be empty');
        }

        let largeNum = nums[0];

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] > largeNum) {
                largeNum = nums[i];
            }
        }

        return `Largest Number is ${largeNum}`
    }
}

// Colt Solution

// class ArrayUtils {
//   constructor() {
//     throw new Error('ArrayUtils cannot be instantiated.');
//   }
 
//   static average(arr) {
//     if (arr.length === 0) throw new Error('Array cannot be empty.');
//     return arr.reduce((sum, num) => sum + num, 0) / arr.length;
//   }
 
//   static max(arr) {
//     return Math.max(...arr);
//   }
// }