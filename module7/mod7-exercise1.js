// Task 5: Create a function to increase each expense by a given percentage and return the new array.
function increaseExpenses(expenses, percentage) {
    return expenses.map(expense => expense * (1 + percentage / 100));
  }
  
  let increasedExpenses = increaseExpenses(expenses, 10);
  console.log("Increased expenses by 10%:", increasedExpenses); // [55, 110, 165, 275, 330]
  
  // Task 5: Create a function to find a product by its name and print its details (name and price)
  function findProductByName(products, name) {
    let product = products.find(product => product.name === name);
    if (product) {
      console.log(`Product found: ${product.name}, Price: ${product.price}`);
    } else {
      console.log("Product not found");
    }
  }
  
  findProductByName(products, "Shoes"); // Product found: Shoes, Price: 60
  findProductByName(products, "Pants"); // Product not found