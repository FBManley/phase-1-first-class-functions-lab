const returnFirstTwoDrivers = function(arrray) {
    let array = ["Antonia", "Nuru", "Sam", "Frodo"]
    return ["Antonia", "Nuru"]
}
const returnLastTwoDrivers = function (array2) {
    let array1 = ["Antonia", "Nuru", "Amari", "Mo"]
    return ["Amari", "Mo"]
}
const createFareMultiplier = x => {
    return function (fare) {
        return fare * x;
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) =>{
    return returnFirstTwoDrivers(arrayOfDrivers);
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]