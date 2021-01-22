// Problem-1 Kilometer To Meter Convert

function kilometerToMeter(kilometer){
    // Check input validation...
    if(kilometer > 0 && kilometer !== '' && kilometer !== null ){
        var meter = kilometer * 1000;
        return meter;
    }
    else
    console.log('*Error* Put Only Integer And Positive Input ');
}

// Problem-2 Budget Calculator

function budgetCalculator(clock, mobile, laptop){
    var clockBudget = clock * 50;
    var mobileBudget = mobile * 100;
    var laptopBudget = laptop * 500;
    var budget = clockBudget + mobileBudget + laptopBudget;
    return budget;
}
var result = budgetCalculator(10, 5, 15);
console.log(result);

// Problem-3 Hotel Cost

function hotelCost(expense) {
    // Check input validation...
    if(expense > 0 && expense !== '' && expense !==null){
        var hotelExpense = 0;
        if (expense <= 10) {
            var hotelExpense = expense * 100;
        }
        else if (expense > 10 && expense <= 20) {
            var firt10Days = 10 * 100;
            var remaining = expense - 10;
            var second10Days = remaining * 80;
            var hotelExpense = firt10Days + second10Days;
        }
        else {
            var firt10Days = 10 * 100;
            var second10Days = 10 * 80;
            var remaining = expense - 20;
            var moredays = remaining * 50;
            var hotelExpense = firt10Days + second10Days + moredays;
        }
    }
    else{
        console.log('*Error* Put Only Integer And Positive Input ');
    }
    return hotelExpense;
}
var result = hotelCost(11);
console.log(result);

// Problem-4 Mega Friend

var friendsName = ['Hello00llllll00', 'Hello world! I am using javascript'];
function megaFriend(friendsName) {
    var arrayLength = friendsName.length;
    var longestName = '';
    for (var i = 0; i < arrayLength; i++) {
        if (( friendsName[i].length) > longestName.length ) {
            longestName = friendsName[i];
        }
    }
    return longestName;
}
// var result = megaFriend(friendsName);
// console.log(result);
