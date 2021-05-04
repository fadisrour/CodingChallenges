const findHighestOrderValue = (orders) => {
    var numberOfOrders = orders.length;
    var ordersPrice = new Array(numberOfOrders);

    for (let i = 0; i < numberOfOrders; i++) {
        var order = orders[i];
        ordersPrice[i] = 0;
        for (let j = 0; j < order.length; j++) {
            ordersPrice[i] += order[j];
        }
    }

    var maxPrice = 0, indexOfMaxPrice = ordersPrice[0];
    
    for (let i = 1; i < numberOfOrders; i++) {
        if (ordersPrice[i] > maxPrice) {
            indexOfMaxPrice = i;
            maxPrice = ordersPrice[i];
        }
    }
    return indexOfMaxPrice;
}

console.log(findHighestOrderValue([[1, 2, 3], [2, 3, 4]])); // output: 1
console.log(findHighestOrderValue([[1.5], [2, 3], [10, 1]])); // output: 2
console.log(findHighestOrderValue([[1.5], [2, 3], [10, 1], [4, 6], [57, 20]]));
console.log(findHighestOrderValue([[1.5], [2, 3], [10, 1], [4, 200], [57, 20]]));