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

(async function order() {
  try {
    const res1 = await placeOrder(orderDetail);
    const res2 = await prepareOrder(res1);
    const res3 = await pickUp(res2);
    const res4 = await delivery(res3);

    console.log(res4);
  } catch (error) {
    console.log(error);
  }
})();
