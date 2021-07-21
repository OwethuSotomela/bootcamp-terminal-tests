module.exports = function totalPhoneBill(logs) {
    var bill = logs.split(',');
    var counter = 0;

    for (var i = 0; i < bill.length; i++) {
        if (bill[i].includes("call")) {
            counter += 2.75;
        }
        else
            if (bill[i].includes("sms")) {
                counter += 0.65;
            }
    }
    return "R" + counter.toFixed(2)
}