// Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
// -------------------------------------------------------

// import { use } from "react";

// 🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

// 🎯 Task
//     1. Create a shallow copy of user
               let copyUser={...user}
//     2. Change:
//           i. name in the copied object
              copyUser.name='Lexus'
//           ii. preferences.theme in the copied object
              copyUser.theme='Light'
//           iii .Log both original and copied objects
            console.log(user)
            console.log(copyUser)
//           iv. Observe what changes and what doesn’t
//            