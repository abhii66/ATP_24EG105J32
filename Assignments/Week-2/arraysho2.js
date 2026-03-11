// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:


// Tasks:
//     1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

//     4. find() the course "react"
//     5. findIndex() of "node"


const courses = ["javascript", "react", "node", "mongodb", "express"];

//1. filtering length > 5
let filtering=courses.filter( length => length.length>5) //stores the values satisfying the given condition in a new array.
console.log(filtering)

//2.map() to convert it to uppercase
let upcase=courses.map(upp => upp.toUpperCase())
console.log(upcase)

//4.find()
let findd=courses.find(course =>course==='react')
console.log(findd)

//5.findIndex()
let findI=courses.findIndex(course =>course==='node')
console.log(findI)