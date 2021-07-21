module.exports = function isWeekday(day){
    return day.startsWith('M')|| day.startsWith('T')|| day.startsWith('W')|| day.startsWith('T')|| day.startsWith('F')
  }
  