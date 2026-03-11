//iii. app.js - Main application
// TODO: Import task functions
import { addTask, getAllTasks } from './task.js';

// Test your module system
// 1. Add some tasks
console.log(addTask('Lexus', 'high', '2027-02-25'))
console.log(addTask('Ns', 'medium', '2025-03-21'))
console.log(addTask('Nexus', 'low', '2026-04-17'))
// 2. Display all tasks
let taskss = getAllTasks()
console.log(taskss)
// 3. Complete a task
// 4. Display all tasks again

