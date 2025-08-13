type Tx = {
  id: string;
  title: string;
  amount: number; // positive for debit from wallet
  date: string;
  status: "success" | "pending" | "failed";
};

export default function TransactionList({ items }: { items: Tx[] }) {
  return (
    <div className="card">
      <div className="p-4 border-b border-[--border] font-medium">Transactions</div>
      <ul className="divide-y divide-[--border]">
        {items.map((tx) => (
          <li key={tx.id} className="p-4 flex items-center justify-between">
            <div>
              <div className="font-medium">{tx.title}</div>
              <div className="text-xs text-slate-500">{tx.date}</div>
            </div>
            <div className="text-right">
              <div className={tx.amount > 0 ? "text-danger" : "text-success"}>{tx.amount > 0 ? `-₹${tx.amount.toFixed(2)}` : `+₹${Math.abs(tx.amount).toFixed(2)}`}</div>
              <div className="text-xs text-slate-500 text-right">{tx.status}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}