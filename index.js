// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  const drivers = ['Charoline', 'John', 'Charlie', 'Dave'];
console.log(returnFirstTwoDrivers(drivers)); 


const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  const driver = ['Alice', 'Bob', 'Charlie', 'Dave'];
console.log(returnLastTwoDrivers(drivers)); 

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const people = ['Alice', 'Bob', 'Charlie', 'David'];
console.log(selectingDrivers[0](driver));
console.log(selectingDrivers[1](driver));



function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  const doubleFare = createFareMultiplier(2); 
  const tripleFare = createFareMultiplier(3); 
  
  console.log(doubleFare(10)); 
  console.log(tripleFare(10));
  
// Define the createFareMultiplier function
function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  // Create fareDoubler by calling createFareMultiplier with 2
  const fareDoubler = createFareMultiplier(2);
  
  // Test fareDoubler
  console.log(fareDoubler(10)); 
  console.log(fareDoubler(5)); 
  
    

  const fareTripler = createFareMultiplier(3);

// Test fareTripler
console.log(fareTripler(10)); // Output: 30
console.log(fareTripler(5));


function selectDifferentDrivers(drivers, driverFunction) {
    return driverFunction(drivers);
  }
  
  // Test with an array of drivers
  const peopleDriver = ['Alice', 'Bob', 'Charlie', 'David'];
  
  // Call selectDifferentDrivers with returnFirstTwoDrivers
  console.log(selectDifferentDrivers(peopleDriver, returnFirstTwoDrivers)); // Output: ['Alice', 'Bob']
  
  // Call selectDifferentDrivers with returnLastTwoDrivers
  console.log(selectDifferentDrivers(peopleDriver, returnLastTwoDrivers)); 