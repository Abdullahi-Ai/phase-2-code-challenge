import React, { useState } from 'react';

const Form = () => {
  const [expense, setExpense] = useState({
    textDescription: '',
    category: '',
    amount: '',
    date: ''
  });

  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpense({
      ...expense,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses([...expenses, expense]);
    setExpense({
      textDescription: '',
      category: '',
      amount: '',
      date: ''
    });
  };

  const handleDelete = (index) => {
    const newExpenses = [...expenses];
    newExpenses.splice(index, 1);
    setExpenses(newExpenses);
  };

  const filteredExpenses = expenses.filter((exp) =>
    exp.textDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="form-container">
      <div className="header">
        <input
          type='search'
          placeholder="Search.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

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

      {filteredExpenses.length > 0 && (
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
              {filteredExpenses.map((exp, index) => (
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
