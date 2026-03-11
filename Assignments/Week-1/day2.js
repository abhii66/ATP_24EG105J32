let employees = [
  {
    eno: 101,
    ename: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    ename: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    ename: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    ename: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    ename: "Anitha",
    marks: [90, 85, 87],
  },
];

//Insert new Emp at 2nd position

employees.splice(2,0,{eno:2,ename:'lexus',marks:[65,73,81]})
console.log(employees)

// Remove an emp with name "Kiran"
for(let i in employees)
{
    if(employees[i].ename=='Kiran')
      employees.splice(i,1)
}
//    employees.splice(4,1) -> can also be acheived by direct index passing.
console.log(employees)

// Change the last mark 95 to 75 of emp  "Sneha"
//employees.splice(3,
employees[3].marks[2]=75
console.log(employees)