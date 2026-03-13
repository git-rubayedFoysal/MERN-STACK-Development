// console.log(arr.sort((a, b) => a - b));

const arr = [10, 93, 45, 12, 19, 24, 48, 90];
const arr2 = [20, 19, 38, 21, 11, 18, 9, 2];


Array.prototype.cusSort = function (compare) {
    // Bubble Sort
    for (let i = 0; i < this.length - 1; i++) {
        let flag = false;
        for (let j = 1; j < this.length - i; j++) {
            if (compare(this[j - 1], this[j]) > 0) {
                //swap
                [this[j - 1], this[j]] = [this[j], this[j - 1]];
                flag = true;
            }
        }

        if (!flag) {
            break;
        }
    }

    return this;
}

console.log(arr.cusSort((a, b) => a - b));
// console.log(arr2.cusSort((a, b) => a - b));