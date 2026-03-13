function double(value) {
    return function execution(num) {
        return num * value;
    }
}

const n = double(20);
console.log(n(5));
