// 4.find the min from the array 
let marks=[90,78,65,98]
let i=0
let min=marks[i]
for(i=1;i<marks.length;i++)
    if(marks[i]<min)
        min=marks[i]
console.log(`minimum element is ${min}.`)