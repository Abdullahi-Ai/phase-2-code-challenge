import React, { useState } from 'react';

const Form = () => {
  const [expense, setExpense] = useState({
    textDescription: '',
    category: '',
    amount: '',
    date: ''
  });

  const [expenses, setExpenses] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevExpense) => ({ ...prevExpense, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { textDescription, category, amount, date } = expense;
    if (textDescription && category && amount && date) {
      setExpenses([...expenses, expense]);
      setExpense({
        textDescription: '',
        category: '',
        amount: '',
        date: ''
      });
    }
  };

  const handleDelete = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  return (
    <div className="form-container">
      <div className="header">
      </div>
      <input type='search' />

      <div className="form-box">
        <h2>Add New Expense</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="textDescription">Enter the text expense description:</label>
            <input
              type="text"
              id="textDescription"
              name="textDescription"
              value={expense.textDescription}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="category">Enter the expense category:</label>
            <input
              type="text"
              id="category"
              name="category"
              value={expense.category}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="amount">Enter the Amount:</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={expense.amount}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={expense.date}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>

      {expenses.length > 0 && (
        <>
          <h2>Expenses</h2>
          <table border="1">
            <thead>
              <tr>
                <th>Expense</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((exp, index) => (
                <tr key={index}>
                  <td>{exp.textDescription}</td>
                  <td>{exp.category}</td>
                  <td>{exp.amount}</td>
                  <td>{exp.date}</td>
                  <td>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Form;
