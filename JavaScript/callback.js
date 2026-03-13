/**
 * The JavaScript code simulates a food ordering process with functions for placing an order, preparing
 * the food, picking up the order, and delivering it to the customer.
 * @param orderDetail - The `orderDetail` object contains information about a food order, including the
 * order ID, food items, cost, customer name, order location, restaurant location, and various status
 * flags for order processing.
 * @param callback - A callback function is a function that is passed as an argument to another
 * function and is executed after the completion of that function. It allows you to perform actions
 * asynchronously and handle the result of an operation once it's done. In the provided code, callback
 * functions are used to handle the flow of the order
 */
const orderDetail = {
    orderId: 121234,
    food: ['Pizza', 'Beef', 'Kacci'],
    cost: 1020,
    customerName: 'Foysal',
    orderLocation: 'Doulatpur',
    restaurantLocation: 'Kushtia',
    status: false,
    prepare: false,
    pick: false,
    done: false
};

function placeOrder(orderDetail, callback) {
    console.log('Your payment is in progress');

    setTimeout(() => {
        console.log('Payment received and order get placed.');
        orderDetail.status = true;
        callback(orderDetail);
    }, 3000);
}

function prepareOrder(orderDetail, callback) {
    if (orderDetail.status) {
        console.log('Your food preparation started.');

        setTimeout(() => {
            console.log('Your order is now prepared.');
            orderDetail.prepare = true;
            callback(orderDetail);
        }, 3000);
    }
}

function pickUp(orderDetail, callback) {
    if (orderDetail.prepare) {
        console.log(`Rider is heading to the restaurant`);

        setTimeout(() => {
            console.log('Order pickup successfully.');
            orderDetail.pick = true;
            callback(orderDetail);
        }, 3000);
    }
}

function delivery() {
    if (orderDetail.pick) {
        console.log('Order heading to your location.');

        setTimeout(() => {
            console.log('Order delivered successfully. Enjoy your food.');
            orderDetail.done = true;
        }, 3000);
    }
}

placeOrder(orderDetail, (orderDetail) => {
    prepareOrder(orderDetail, (orderDetail) => {
        pickUp(orderDetail, (orderDetail) => {
            delivery(orderDetail);
        });
    });
});
