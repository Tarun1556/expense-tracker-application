import { useEffect, useState } from "react";
import { FaWallet, FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import axios from "axios";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [entryType, setEntryType] = useState("Expense");

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/api/transactions");
    setTransactions(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addTransaction = async (text, amount) => {
    const signedAmount = entryType === "Expense" ? -Math.abs(amount) : Math.abs(amount);
    await axios.post("http://localhost:5000/api/transactions", { text, amount: signedAmount });
    fetchData();
  };

  const deleteTransaction = async (id) => {
    await axios.delete(`http://localhost:5000/api/transactions/${id}`);
    fetchData();
  };

  const total = transactions.reduce((acc, t) => acc + t.amount, 0);
  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((a, t) => a + t.amount, 0);

  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((a, t) => a + t.amount, 0);

  return (
    <div className="dashboard">
      <header className="app-header">
        <h1>💰 Expense Tracker</h1>
        <p>Track your income and expenses easily with a clean modern finance dashboard.</p>
      </header>

      <section className="summary-card">
        <div className="summary-value">
          <div className="summary-icon">
            <FaWallet size={20} color="#2563EB" />
          </div>
          <h2>Balance</h2>
          <p>₹{total}</p>
          <span className="value-note">Current available balance</span>
        </div>
        <div className="summary-value income">
          <div className="summary-icon">
            <FaArrowCircleUp size={20} color="#22C55E" />
          </div>
          <h2>Income</h2>
          <p>₹{income}</p>
          <span className="value-note">Money received</span>
        </div>
        <div className="summary-value expense">
          <div className="summary-icon">
            <FaArrowCircleDown size={20} color="#EF4444" />
          </div>
          <h2>Expenses</h2>
          <p>₹{Math.abs(expense)}</p>
          <span className="value-note">Money spent</span>
        </div>
      </section>

      <section className="dashboard-grid">
        <div className="table-card">
          <h2>Transactions</h2>
          <TransactionList transactions={transactions} deleteTx={deleteTransaction} />
        </div>

        <div className="form-card">
          <h2>Add Transaction</h2>
          <TransactionForm addTransaction={addTransaction} entryType={entryType} setEntryType={setEntryType} />
        </div>
      </section>
    </div>
  );
}
