// Calculates the total sum of all numerical elements within an array.
let exampleArray=[10,30,20]
function sumOfArray(exampleArray){
    let sum=0
    //loop to calculate the sum
    for(let i=0;i<exampleArray.length;i++)
    sum+=exampleArray[i]
    return sum
}
// Execute function and store the result
let result=sumOfArray(exampleArray)
console.log(`${result} is sum of the Array.`)
