// Implementing adding, viewing, editing, and deleting expenses functionalities.
// Integrating local storage to save user.

document.addEventListener('DOMContentLoaded', () => {
  // Selecting elements
  const dateInput = document.getElementById('date');
  const expenseInput = document.getElementById('name');
  const categoryInput = document.getElementById('category');
  const amountInput = document.getElementById('amount');
  const addExpenseBtn = document.getElementById('add-expense');
  const cancelEditBtn = document.getElementById('cancel-edit');
  const totalExpenses = document.getElementById('total-expenses');
  const expensesTable = document.getElementById('expenses-table');

  // Declaring variables
  const expensesList = [];
  const total = 0;

  // Function to clear input fields
  function clearInputFields () {
    dateInput.value = '';
    expenseInput.value = '';
    categoryInput.value = '';
    amountInput.value = '';
  }

  // Function to display expenses
  function display () {
    // Clear available data
    expensesTable.innerHTML = '';

    if (expensesList.length !== 0) {
      expensesList.forEach((e, index) => {
        expensesTable.innerHTML += `
          <tr>
            <td>${e.date}</td>
            <td>${e.name}</td>
            <td>${e.category}</td>
            <td>${e.amount.toLocaleString()}</td>
            <td id="actions">
              <div>
                <button type="button" class="btn btn-warning btn-sm">Edit</button>
              </div>
              <div>
                <button type="button" class="btn btn-danger btn-sm">Delete</button>
              </div>
            </td>
          </tr>
        `;
      });
    } else {
      expensesTable.innerHTML = `
        <p style="font-weight:bold; font-size: 20px;">No expenses added!</p>
      `;
    }
  }

  // Function to add an expense
  function addExpense () {
    const dateValue = dateInput.value.trim();
    const expenseValue = expenseInput.value.trim();
    const categoryValue = categoryInput.value.trim();
    const amountValue = Number(amountInput.value);

    // Expense object
    const expense = {
      date: dateValue,
      name: expenseValue,
      category: categoryValue,
      amount: amountValue
    };

    // Update expensesList
    expensesList.push(expense);
    console.log(expense);
    clearInputFields();
    display();
  }

  // Event listener for adding an expense
  addExpenseBtn.addEventListener('click', addExpense);

  display();
});
