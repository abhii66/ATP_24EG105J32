let exampleArray=[10,30,20]
function sumOfArray(exampleArray){
    let sum=0
    for(let i=0;i<exampleArray.length;i++)
    sum+=exampleArray[i]
    return sum
}
let result=sumOfArray(exampleArray)
console.log(`${result} is sum of the Array.`)