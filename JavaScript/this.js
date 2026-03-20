"use strict";

function meet(n1, n2) {
  console.log(this.name);
  console.log(n1 + n2);
}

const user = {
  name: "Rohit",
  greet: () => {
    console.log(this); // NOT user! → outer scope's this
  },
};

// user.greet();

const newUser = meet.bind(user, 10, 22);
newUser();

const stopwatch = {
  seconds: 0,
  start() {
    setInterval(() => {
      // regular function
      this.seconds++; // ❌ 'this' = setInterval's context
      console.log(this.seconds); // NaN
    }, 1000);
  },
};

stopwatch.start();
