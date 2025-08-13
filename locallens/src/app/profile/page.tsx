import ProfileHeader from "@/components/ProfileHeader";
import WalletCard from "@/components/WalletCard";
import TransactionList from "@/components/TransactionList";

const sampleTx = [
  { id: "1", title: "Service: AC gas refill", amount: 1499, date: "12 Jul 2025, 6:00 PM", status: "success" as const },
  { id: "2", title: "Service: Tap replacement", amount: 299, date: "22 Jun 2025, 2:30 PM", status: "success" as const },
];

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-6 md:py-10 grid gap-6">
      <ProfileHeader name="Arjun Mehta" walletBalance={250} />

      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2 grid gap-4">
          <h2 className="text-lg font-semibold">Service history</h2>
          <TransactionList items={sampleTx} />
        </div>
        <div className="grid gap-4">
          <h2 className="text-lg font-semibold">Wallet</h2>
          <WalletCard balance={250} />
        </div>
      </div>
    </div>
  );
}