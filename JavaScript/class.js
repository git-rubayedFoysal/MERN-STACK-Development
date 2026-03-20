// const obj2 = {
//   name: "Foysal",
//   age: 30,

//   sayHi: function () {
//     console.log(`Hi ${this.name}`);
//   },
// };

// const obj = {};
// // Object.setPrototypeOf(obj, obj2);
// obj.__proto__ = obj2;

// console.log(obj.name);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi ${this.name}`);
  }
}

class Customer extends Person {
  #balance;
  constructor(name, age, account, balance) {
    super(name, age);
    this.account = account;
    this.#balance = balance;
  }

  checkBalance() {
    return this.#balance;
  }
}

const c1 = new Customer("Rubayed", 23, 101, 10000);

console.log(c1.name);
c1.sayHi();
console.log(c1.checkBalance());

// static class
class MathHelper {
  static PI = 3.14159;

  static square(n) {
    console.log(n * n);
  }
}

console.log(MathHelper.PI);
MathHelper.square(4);
