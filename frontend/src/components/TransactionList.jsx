import { FaTrash } from "react-icons/fa";

export default function TransactionList({ transactions, deleteTx }) {
  if (!transactions.length) {
    return (
      <div className="empty-state">
        <span style={{ fontSize: "2rem" }}>📭</span>
        <h3>No transactions yet</h3>
        <p>Add your first income or expense to see it here.</p>
      </div>
    );
  }

  return (
    <div className="transactions-table-wrapper">
      <table className="transactions-table">
        <thead>
          <tr>
            <th>S.no.</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t, index) => (
            <tr key={t._id}>
              <td>{index + 1}</td>
              <td>{t.text}</td>
              <td>₹{Math.abs(t.amount)}</td>
              <td>
                <span className={`badge ${t.amount >= 0 ? "income" : "expense"}`}>
                  {t.amount >= 0 ? "Income" : "Expense"}
                </span>
              </td>
              <td>{t.date ? new Date(t.date).toLocaleDateString() : "-"}</td>
              <td>
                <button type="button" onClick={() => deleteTx(t._id)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
