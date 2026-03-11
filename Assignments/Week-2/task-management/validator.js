 //i. validator.js - Input validation
                      // TODO: Export these validation functions
                      
                      // 1. Validate task title (not empty, min 3 chars)
                      function validateTitle(title) {
                        if (!title || title.length < 3) {
                          return false;
                        }
                        return true;
                        }
                      
                      // 2. Validate priority (must be: low, medium, high)
                      function validatePriority(priority) {
                        const validPriorities = ['low', 'medium', 'high'];
                        return validPriorities.includes(priority);
                        }
                      
                      // 3. Validate due date (must be future date)
                        function validateDueDate(date) {
                        const today = new Date();
                        const dueDate = new Date(date);
                        return dueDate > today;
                        }

                      export {validateTitle,validatePriority,validateDueDate}

