module.exports = function findItemsOver(itemList, threshold) {
    console.log(threshold);
    var itemList1 = [];
    for (var i = 0; i < itemList.length; i++) {
        if (itemList[i].qty > threshold) {
            itemList1.push(itemList[i]);
        }
    }
    return itemList1;
}

