import React, { useState } from 'react';
import './App.css'

function App() {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactionType, setTransactionType] = useState('income');
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState('');
  const [transactions, setTransactions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (transactionType === 'income') {
      setBalance(balance + amount);
      setIncome(income + amount);
    } else {
      setBalance(balance - amount);
      setExpense(expense + amount);
    }
    setTransactions([...transactions, { type: transactionType, amount, description }]);
    setAmount(0);
    setDescription('');
  };

  return (
    <div style={{maxWidth: '800px', margin: '40px auto'}}>
      <h1> Personal Finance Tracker</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <input type='text' value={description} onChange={(e) => setDescription(e.target.value)}/>
        </label>
        <label>
          Amount:
          <input type='number' value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))}/>
        </label>
        <label>
          Type:
          <select value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
            <option value='income'>Income</option>
            <option value='expense'>Expense</option>
          </select>
        </label>
        <button type='submit'>Add Transaction</button>
      </form>
      <h2>Balance: {balance}</h2>
      <h2>Income: {income}</h2>
      <h2>Expense: {expense}</h2>
      <h2>Transaction:</h2>
      <ul>
        {transactions.map((transaction, index) =>(
          <li key={index}>
            {transaction.description}: {transaction.amount} ({transaction.type})
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;

