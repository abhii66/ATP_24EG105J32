function search(exampleArray,key){
    for(let i=0;i<exampleArray.length;i++)
    {
        if(exampleArray[i]==key)
            return`${key} found at index ${i}` 
    }
    return 'not found'
}
let exampleArray=[10,20,30,50]
let result= search(exampleArray,30)
console.log(result)