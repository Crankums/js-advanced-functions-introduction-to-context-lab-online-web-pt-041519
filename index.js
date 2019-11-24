// Your code here
let createEmployeeRecord = function(srcArray) {
  // the tests seem to describe an object
  return {
    firstName: srcArray[0],
    familyName: srcArray[1],
    title: srcArray[2],
    payPerHour: srcArray[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

let createEmployeeRecords = function(arr) {
    return arr.map(function(el){
      return createEmployeeRecord(el)
    })
}

let createTimeInEvent = function(employee, time) {
  let [date, hour] = time.split(' ')

  employee.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date
  })
  return employee
}

let createTimeOutEvent = function(employee, time) {
  let [date, hour] = time.split(' ')

  employee.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date
  })
  return employee
}

let hoursWorkedOnDate = function(employee, onDate){
  // find date
  let ofDate = employee.timeOutEvents.find(el => return el.date === date)
  

  // employee.timeOutEvents - employee.timeInEvents)
}
