// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
// const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28

const temperatures = [32, 35, 28, 40, 38, 30, 42];
//1.filter() >35
let filtered=temperatures.filter(element => element>35)
console.log(`Above 35: ${filtered}`)

//2.map() 
//formula: (9/5*c)+32
let fahrenheit=temperatures.map( element=> element*9/5+32)
console.log(fahrenheit)

//3.reduce() to cal avg temp
let summ=temperatures.reduce(function(accumulator,element)
{
    return accumulator=accumulator+element
}
)
let reduced=summ/temperatures.length  //calculates average
console.log(reduced)

//4.find() for >40
let findd=temperatures.find(element=> element>40)
console.log(findd)

//5.findIndex() of 28
let findI=temperatures.findIndex(element=> element===28)
console.log(findI)
