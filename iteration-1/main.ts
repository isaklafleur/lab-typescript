// Iteration 1
// 1. Create an array of strings
let todos: Array<String> = [];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task: String) {
  todos.push(task);
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks(todoArray: Array<String>) {
  todoArray.forEach(todo => {
    console.log(todo);
  });
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(todotodelete) {
  const index = todos.indexOf(todotodelete);
  // if (index > -1) {
  todos.splice(index, 1);
  // }
}
// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks(todos);
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks(todos);
