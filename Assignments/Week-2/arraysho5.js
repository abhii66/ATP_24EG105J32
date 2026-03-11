// ASSIGNMENT 5: 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
// Tasks:
//     1. filter() all credit transactions
let filtered=transactions.filter(types => types.type==='credit')
console.log(filtered)

//     2. map() to extract only transaction amounts
let mappp=transactions.map(tran => tran.amount)
console.log(mappp)

//     3. reduce() to calculate final account balance
let reduced=transactions.reduce((acc,total) => acc+total.amount,0)
console.log(reduced)

//     4. find() the first debit transaction
let findd=transactions.find(types => types.type==='debit')
console.log(findd)

//     5. findIndex() of transaction with amount 10000
let findI=transactions.findIndex(am => am.amount===10000)
console.log(findI)