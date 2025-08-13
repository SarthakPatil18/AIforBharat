export default function WalletCard({ balance = 0 }: { balance?: number }) {
  return (
    <div className="card p-5 flex items-center justify-between">
      <div>
        <div className="text-sm text-slate-500">Wallet Balance</div>
        <div className="text-2xl font-semibold">₹{balance.toFixed(2)}</div>
      </div>
      <button className="button">Add Money</button>
    </div>
  );
}