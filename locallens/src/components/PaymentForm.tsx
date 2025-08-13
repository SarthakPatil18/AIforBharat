"use client";

import { useState } from "react";

export default function PaymentForm() {
  const [amount, setAmount] = useState(499);
  const [upiId, setUpiId] = useState("locallens@upi");
  const [note, setNote] = useState("Service Payment");
  const [processing, setProcessing] = useState(false);

  const handlePay = async () => {
    setProcessing(true);
    await new Promise((r) => setTimeout(r, 1200));
    setProcessing(false);
    alert("UPI payment simulated. Integrate with UPI intent or PSP SDK.");
  };

  return (
    <div className="card p-5 grid gap-4">
      <div>
        <label className="text-sm text-slate-600">Amount (₹)</label>
        <input type="number" className="input mt-1" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      </div>
      <div>
        <label className="text-sm text-slate-600">UPI ID</label>
        <input className="input mt-1" value={upiId} onChange={(e) => setUpiId(e.target.value)} />
      </div>
      <div>
        <label className="text-sm text-slate-600">Note</label>
        <input className="input mt-1" value={note} onChange={(e) => setNote(e.target.value)} />
      </div>
      <button className="button" onClick={handlePay} disabled={processing}>
        {processing ? "Processing…" : "Pay via UPI"}
      </button>
      <div className="text-xs text-slate-500">Secure UPI payment. We never store your credentials.</div>
    </div>
  );
}