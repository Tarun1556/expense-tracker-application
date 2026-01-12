export default function TransactionList({ transactions, deleteTx }) {
  return (
    <ul>
      {transactions.map(t => (
        <li key={t._id} className={t.amount >= 0 ? "income" : "expense"}>
          {t.text} ₹{t.amount}
          <button onClick={() => deleteTx(t._id)}>X</button>
        </li>
      ))}
    </ul>
  );
}
