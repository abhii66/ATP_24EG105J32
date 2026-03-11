//function def
function biggest(a,b,c){
    let big=(a>b)? (a>c? a:c) : (b>c? b:c) //ternary operation
    return big
}

let res=biggest(10,30,20) //function call
console.log(`${res} is biggest number.`)