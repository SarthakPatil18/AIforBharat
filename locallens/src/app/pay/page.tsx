import PaymentForm from "@/components/PaymentForm";
import TransactionList from "@/components/TransactionList";

const sampleTx = [
  { id: "1", title: "Service: Switchboard repair", amount: 499, date: "10 Aug 2025, 4:22 PM", status: "success" as const },
  { id: "2", title: "Wallet add money", amount: -1000, date: "02 Aug 2025, 12:10 PM", status: "success" as const },
];

export default function PayPage() {
  return (
    <div className="container mx-auto px-4 py-6 md:py-10 grid gap-6 md:grid-cols-[1fr_420px]">
      <section className="grid gap-3">
        <h1 className="text-xl md:text-2xl font-semibold tracking-tight">UPI Payment</h1>
        <PaymentForm />
      </section>
      <aside className="grid gap-3">
        <h2 className="text-lg font-semibold">History</h2>
        <TransactionList items={sampleTx} />
      </aside>
    </div>
  );
}