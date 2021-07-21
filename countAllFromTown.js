module.exports = function countAllFromTown(regNum, regStri) {
    var regList = regNum.split(',');
    var list = [];
    
    for (var i = 0; i < regList.length; i++) {
        var reg = regList[i].trim();
        if (reg.startsWith(regStri)) {
            list.push(reg);
        }
    }
    return list.length;
}