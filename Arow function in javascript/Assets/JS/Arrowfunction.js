document.write("<h1>This is Arrow function</h1>");
console.log(
  "Arrow functions were introduced in ES6 Arrow functions allow us to write shorter function syntax:"
);
const ArrowFunctionExample = () => {
  console.log("I'm Arrow function");
};
ArrowFunctionExample();
const AdditionByArrowFUnction = (value1, value2) => {
  let sum = value1 + value2;
  return sum;
};
let resultofsum = AdditionByArrowFUnction(12, 34);
console.log(resultofsum);
/** Addition of Array value and numbers*/

var arraynew = [11, 12, 20, 25, 35];
let arrayAddition = (param) => {
  let sumarray = 0;
  for (let i = 0; i < arraynew.length; i++) {
    sumarray += arraynew[i];
    return sumarray;
  }
};
let finalarray = arrayAddition(arraynew);
console.log(finalarray);
/** Simpe function in where pass Array as parameter */
var myarray = ["Indore", "Chennai"];
myfun(myarray);
function myfun(myArray) {
  for (var i = 0; i < myArray.length; i++) {
    myArray[i] = myArray[i];
    console.log(myArray[i]);
  }
}
/***addition of array element  */
var addkaro = [10, 11, 12, 15, 18, 52];
function additionarrayelemnt(addarray) {
  let temp = 0;
  for (var j = 0; j < addarray.length; j++) {
    temp += addarray[j];
    console.log(j, "th Array index : ", addarray[j]);
  }
  return temp;
}
let result = additionarrayelemnt(addkaro);
console.log("addition of array element", result);
/** trhough function traverse nested array element  */ /*
let cubes = [
  ["Work", 9],
  ["Eat", 1],
  ["Commute", 2],
  ["Play Game", 1],
  ["Sleep", 7],
]; */
let cubes = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function printfunction(activities) {
  for (var i = 0; i < cubes.length; i++) {
    var cube = cubes[i];
    //  console.log("length", cubes[i].length);
    //  console.log(cubes[i]);
    for (var j = 0; j < cube.length; j++) {
      console.log("cube[" + i + "][" + j + "] = " + cube[j]);
    }
  }
}
printfunction(cubes);

/** object pass into the function */
var obj = {
  name: "priyanka",
  city: "indore",
  branch: "IT",
  colllege: "IET DAVV",
  vehicles: {
    car: "limousine",
    bike: "ktm-duke",
    plane: "lufthansa",
  },
  weekdays: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
};
function objectCalling(obj) {
  console.log(" ------first object-------- ");
  for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
  if (obj.hasOwnProperty("vehicles")) {
    console.log("------- Nested Object----------");
    for (const keys in obj.vehicles) {
      console.log(`${keys}: ${obj.vehicles[keys]}`);
    }
  }
  if (obj.hasOwnProperty("weekdays")) {
    console.log("----weekdays-----");
    for (let f = 0; f < obj.weekdays.length; f++) {
      console.log(obj.weekdays[f]);
    }
  }
}

objectCalling(obj);

function toCelsius(f) {
  return (5 / 9) * (f - 32);
}
document.getElementById("demo").innerHTML = toCelsius;
 