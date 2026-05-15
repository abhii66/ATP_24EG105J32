//Searches for a specific value within an array and returns its location.
function search(exampleArray,key){
    for(let i=0;i<exampleArray.length;i++)
    {
        if(exampleArray[i]===key)
            return`${key} found at index ${i}` 
    }
    // Return a consistent message if the loop completes without a match
    return 'not found'
}
let exampleArray=[10,20,30,50]
//function call
let result= search(exampleArray,30)
console.log(result)
