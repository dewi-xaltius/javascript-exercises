// Task 5: Create a function to increase each expense by a given percentage and return the new array.
function increaseExpenses(expenses, percentage) {
    return expenses.map(expense => expense * (1 + percentage / 100));
  }
  
  let increasedExpenses = increaseExpenses(expenses, 10);
  console.log("Increased expenses by 10%:", increasedExpenses); // [55, 110, 165, 275, 330]
  