module.exports = function findItemsOver20(itemList) {
    var products = [];
    for (var i = 0; i < itemList.length; i++) {
        if (itemList[i].qty > 20) {
            products.push(itemList[i]);
        }
    }
    return products;
}
