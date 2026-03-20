/**
 * The above JavaScript code simulates an online food ordering process with functions for placing an
 * order, preparing the order, picking it up, and delivering it to the customer.
 * @param orderDetail - orderId: 121234,
 * @returns The final state of the `orderDetail` object after the order processing steps are completed
 * is being returned. This object will have updated properties reflecting the status of the order such
 * as `status`, `prepare`, `pick`, and `done`.
 */
const orderDetail = {
  orderId: 121234,
  food: ["Pizza", "Beef", "Kacci"],
  cost: 1020,
  customerName: "Foysal",
  orderLocation: "Doulatpur",
  restaurantLocation: "Kushtia",
  status: false,
  prepare: false,
  pick: false,
  done: false,
};

function placeOrder(orderDetail) {
  return new Promise((resolve, reject) => {
    console.log("Your payment is in progress");

    setTimeout(() => {
      console.log("Payment received and order get placed.");
      orderDetail.status = true;
      resolve(orderDetail);
    }, 3000);
  });
}

function prepareOrder(orderDetail) {
  return new Promise((resolve, reject) => {
    if (orderDetail.status) {
      console.log("Your food preparation started.");

      setTimeout(() => {
        console.log("Your order is now prepared.");
        orderDetail.prepare = true;
        resolve(orderDetail);
      }, 3000);
    } else {
      reject("Payment not payed yet");
    }
  });
}

function pickUp(orderDetail) {
  return new Promise((resolve, reject) => {
    if (orderDetail.prepare) {
      console.log(`Rider is heading to the restaurant`);

      setTimeout(() => {
        console.log("Order pickup successfully.");
        orderDetail.pick = true;
        resolve(orderDetail);
      }, 3000);
    } else {
      reject("Order not ready yet.");
    }
  });
}

function delivery() {
  return new Promise((resolve, reject) => {
    if (orderDetail.pick) {
      console.log("Order heading to your location.");

      setTimeout(() => {
        console.log("Order delivered successfully. Enjoy your food.");
        orderDetail.done = true;
        resolve(orderDetail);
      }, 3000);
    } else {
      reject("Rider not pick up yet.");
    }
  });
}

placeOrder(orderDetail)
  .then((orderDetail) => prepareOrder(orderDetail))
  .then((orderDetail) => pickUp(orderDetail))
  .then((orderDetail) => delivery(orderDetail))
  .catch((error) => console.log(error))
  .finally(() => console.log(orderDetail));

// JSON
const Person = ` {
  "name": "Foysal",
  "age": 23,
  "city": "Kushtia",
  "division": "Khulna"
}`;

// const myJson = JSON.stringify(Person);
const obj = JSON.parse(Person);
console.log(obj);
