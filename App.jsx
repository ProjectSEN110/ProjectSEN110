import React, { useState } from 'react';
import './App.css';

function App() {
const [transactions, setTransactions] = useState([]);
const [text, setText] = useState('');
const [amount, setAmount] = useState('');

const handleAddTransaction = (e) => {
e.preventDefault();
if (!text || !amount) return;

const newTransaction = { id: Date.now(), text, amount: parseFloat(amount), }; setTransactions([newTransaction, ...transactions]); setText(''); setAmount(''); 

};

const handleDelete = (id) => {
setTransactions(transactions.filter((item) => item.id !== id));
};

const income = transactions
.filter((item) => item.amount > 0)
.reduce((acc, item) => acc + item.amount, 0);

const expense = transactions
.filter((item) => item.amount < 0)
.reduce((acc, item) => acc + item.amount, 0);

return (
    <div className="container">
      <h2>Expense Tracker</h2>
    <div className="balance">
      <h3>Balance: ${income + expense}</h3>
    </div>
    <div className="summary">
      <div>Income: ${income}</div>
      <div>Expense: ${Math.abs(expense)}</div>
    </div>
    <form onSubmit={handleAddTransaction}>
  <input
    type="text"
    placeholder="Description"
    value={text}
    onChange={(e) => setText(e.target.value)}
  />
  <input
    type="number"
    placeholder="Amount (use - for expense)"
    value={amount}
    onChange={(e) => setAmount(e.target.value)}
  />
  <button type="submit">Add Transaction</button>
</form>
<ul className="list">
  {transactions.map((item) => (
    <li key={item.id} className={item.amount < 0 ? 'expense' : 'income'}>
      {item.text}: ${item.amount}
      <button onClick={() => handleDelete(item.id)}>x</button>
    </li>
  ))}
</ul>
</div>
);
}
export default App;





  