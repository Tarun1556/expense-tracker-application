import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function TransactionForm({ addTransaction, entryType, setEntryType }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const submit = (e) => {
    e.preventDefault();
    addTransaction(text, Number(amount));
    setText("");
    setAmount("");
  };

  return (
    <form className="transaction-form" onSubmit={submit}>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="type">Transaction Type</label>
          <select id="type" value={entryType} onChange={(e) => setEntryType(e.target.value)}>
            <option>Expense</option>
            <option>Income</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter description" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="0" />
      </div>

      <button type="submit">
        <FaPlus size={14} style={{ marginRight: 8 }} /> Add {entryType}
      </button>
    </form>
  );
}
