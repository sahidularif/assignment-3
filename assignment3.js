
// Repository link: https://github.com/sahidularif/assignment-3

// Problem-1 Kilometer To Meter Convert

function kilometerToMeter(kilometer) {
    // Check input validation...
    if (kilometer > 0 && kilometer !== '' && kilometer !== null) {
        var meter = kilometer * 1000;
    }
    else {
        console.log('*Error* Put Only Integer And Positive Input ');
    }
    return meter;
}


// Problem-2 Budget Calculator

function budgetCalculator(clock, mobile, laptop) {
    var clockBudget = clock * 50;
    var mobileBudget = mobile * 100;
    var laptopBudget = laptop * 500;
    var budget = clockBudget + mobileBudget + laptopBudget;  
    return budget;
}


// Problem-3 Hotel Cost

function hotelCost(day) {
    // Check input validation...
    if (day > 0 && day !== '' && day !== null) {
        var hotelExpense = 0;
        if (day <= 10) {
            var hotelExpense = day * 100;
        }
        else if (day > 10 && day <= 20) {
            var firt10Days = 10 * 100;
            var remaining = day - 10;
            var second10Days = remaining * 80;
            var hotelExpense = firt10Days + second10Days;
        }
        else {
            var firt10Days = 10 * 100;
            var second10Days = 10 * 80;
            var remaining = day - 20;
            var moredays = remaining * 50;
            var hotelExpense = firt10Days + second10Days + moredays;
        }
    }
    else {
        console.log('*Error* Put Only Integer And Positive Input ');
    }
    return hotelExpense;
}



// Problem-4 Mega Friend

function megaFriend(arr){
    var longestName = '';
    for(var i = 0; i < arr.length; i++){
        if(longestName.length < arr[i].length){
            longestName = arr[i];
        }
    }
    return longestName;
}
