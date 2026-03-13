


// const great = function (name) {
//     console.log(`Hello ${name}`);
// }


// great("Foysal");

const add = (...num) => {
    let sum = 0;
    for (let n of num) {
        sum += n;
    }
    return sum;
}

console.log(add(10, 20, 40, 50));

// const cube = num => num * num * num;
// console.log(cube(3));
