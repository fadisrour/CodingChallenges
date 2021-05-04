const calculateSeatsBookingPercentage = (firstRowSeatsNumber, bookedSeats) => {
    var NumberOfSeats = 0;

    for (let i = firstRowSeatsNumber; i >= 1; i--) {
        NumberOfSeats += i;
    }

    return parseInt(bookedSeats * 100 / NumberOfSeats) + "%";
}

console.log(calculateSeatsBookingPercentage(7, 7)); // output: 25%
console.log(calculateSeatsBookingPercentage(10, 20)); // output: 36%
console.log(calculateSeatsBookingPercentage(17, 31));