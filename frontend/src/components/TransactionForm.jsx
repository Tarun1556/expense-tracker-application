import { useState } from "react";

export default function TransactionForm({ addTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const submit = e => {
    e.preventDefault();
    addTransaction(text, Number(amount));
    setText("");
    setAmount("");
  };

  return (
    <form onSubmit={submit}>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Description" />
      <input value={amount} onChange={e => setAmount(e.target.value)} type="number" placeholder="Amount" />
      <button>Add</button>
    </form>
  );
}
