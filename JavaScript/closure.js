function createAcc() {
    let balance = 500;

    return {
        deposit: function (amount) {
            if (typeof amount === 'number' && amount > 0) {
                balance += amount;
                return balance;
            }
        },
        withdraw: function (amount) {
            if (typeof amount === 'number' && amount > 0 && amount < balance) {
                balance -= amount;
                return balance;
            }
        },
        getBalance: function () {
            return balance;
        }
    };
}

// console.log(user.withdraw(200));
// console.log(user.getBalance());

const acc = createAcc();
console.log(acc.getBalance());

