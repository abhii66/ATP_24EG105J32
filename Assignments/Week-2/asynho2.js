// 2.OTP Countdown Simulator (Console App)
// ------------------------------------
        
//         Simulate OTP sending flow in Node.js:
        
//         Show “OTP Sent Successfully”
        
//         Start 10-second countdown
        
//         Allow resend only after countdown ends

console.log("OTP Sent Successfully")

let a=10 //countdown time
let countDown=setInterval(()=>{
    if(a==0){
        console.log("Resend OTP")
        clearInterval(countDown)
    }
    else{
        console.log(a)
        a=a-1 
    }
},1000)




// setTimeout(()=>{
//     for(let i=10;i!=0;i--){
//         console.log(i)
//     }
// },1000)
// for(let i=10;i!=0;i--){
//     setInterval(()=>{
//     console.log(i)
    
// },1000)
// }



// setInterval(()=> {
//     console.log("Resend OTP")
// },10000)