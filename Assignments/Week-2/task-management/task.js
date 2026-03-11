//ii. task.js - Task operations
                    // TODO: Import validator functions
                    import { validateTitle,validatePriority,validateDueDate } from './validator.js';
                    
                    const tasks = [];
                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                      if(!validateTitle(title) || !validatePriority(priority) || !validateDueDate(dueDate))
                      {
                        return "Invalid Task."
                      }
                      // If valid, add to tasks array
                       const task = {
                      title: title,
                      priority: priority,
                      dueDate: dueDate
                      };

                          tasks.push(task)
                      // Return success/error message
                          return "Success."
                        }
                    
                    // 2. Get all tasks
                    function getAllTasks() {
                      return tasks;
                    }
                    
                    // 3. Mark task as complete
                    // function completeTask(taskId) {
                    //   // Find task and mark as complete
                    //   return true
                    // }

                  // Export functions
                  export {addTask,getAllTasks}