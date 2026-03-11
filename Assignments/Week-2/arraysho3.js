// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// Tasks:
//     1. filter() students who passed (marks ≥ 40)

let filterrr=students.filter( mark => mark.marks>=40)
console.log(filterrr)



//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D
let grades=students.map(function(element)
{
    if(element.marks>=90)
        return {grade:'A'}
    if(element.marks>=75)
        return {grade:'B'}
    if(element.marks>=60)
        return {grade:'C'}
    else return {grade:'D'}
})
console.log(grades)
//    3. reduce() to calculate average marks
let avg=students.reduce((acc,mark)=> acc+mark.marks,0) //calculates the average
console.log(avg/students.length)

//    4. find() the student who scored 92
let findd=students.find(score => score.marks===92)
console.log(findd)
//    5. findIndex() of student "Kiran"
let findI=students.findIndex(element => element.name==='Kiran')
console.log(findI)