const returnFirstTwoDrivers = function(arry){
  return arry.slice(0,2)
}

const returnLastTwoDrivers = function(arry){
  return arry.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
  return function(fare){
    return multiplier * fare
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, fN){
  return fN(drivers)
}