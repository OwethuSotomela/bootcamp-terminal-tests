module.exports = function countAllPaarl(regNum) {
    var num = regNum.split(', ');
    var list = [];
    
    for (var i = 0; i < num.length; i++) {
        var result = num[i];

        if (result.startsWith('CJ')) {
            list.push(result);
            console.log(list);
        }
    } 
    return list.length;
}
