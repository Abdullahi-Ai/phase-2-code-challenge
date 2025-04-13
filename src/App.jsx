import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './Form'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="content-box">
      <h1>Expense Tracker</h1>
      <p>Start taking control of your finances and life, Record categorize and analyze your spending.</p>
      <Form /> 
    </div>
    </div>
  );
}
export default App; 

