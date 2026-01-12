import { useEffect, useState } from "react";
import axios from "axios";
import Balance from "./Balance";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/api/transactions");
    setTransactions(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addTransaction = async (text, amount) => {
    await axios.post("http://localhost:5000/api/transactions", { text, amount });
    fetchData();
  };

  const deleteTransaction = async (id) => {
    await axios.delete(`http://localhost:5000/api/transactions/${id}`);
    fetchData();
  };

  const total = transactions.reduce((acc, t) => acc + t.amount, 0);
  const income = transactions
  .filter(t => t.amount > 0)
  .reduce((a, t) => a + t.amount, 0);

const expense = transactions
  .filter(t => t.amount < 0)
  .reduce((a, t) => a + t.amount, 0);


 return (
  <>
    <h1>Expense Tracker</h1>

    <div className="card">
      <div className="balance">₹{total}</div>
    </div>

    <div className="card">
      <p className="income">Income: ₹{income}</p>
      <p className="expense">Expense: ₹{Math.abs(expense)}</p>
    </div>

    <div className="card">
      <TransactionForm addTransaction={addTransaction} />
    </div>

    <div className="card">
      <TransactionList transactions={transactions} deleteTx={deleteTransaction} />
    </div>
  </>
);


}
