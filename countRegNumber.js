module.exports = function countRegNumber(regNo){
    console.log(regNo);

  var regNumber = regNo.split(",");
    console.log(regNumber);

  console.log(regNumber.length);
  return regNumber.length;

}    