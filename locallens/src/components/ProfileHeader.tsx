type ProfileHeaderProps = {
  name: string;
  photoUrl?: string;
  verified?: boolean;
  walletBalance?: number;
};

export default function ProfileHeader({ name, photoUrl, verified = true, walletBalance = 0 }: ProfileHeaderProps) {
  return (
    <div className="card p-5 flex items-center gap-4">
      <div className="size-16 rounded-2xl bg-slate-200 overflow-hidden">
        {photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={photoUrl} alt={name} className="h-full w-full object-cover" />
        ) : null}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold tracking-tight">{name}</h2>
          {verified ? <span className="badge border-green-200 text-green-700 bg-green-50">Verified</span> : null}
        </div>
        <div className="text-sm text-slate-500">Member since 2024</div>
      </div>
      <div className="text-right">
        <div className="text-xs text-slate-500">Wallet</div>
        <div className="text-lg font-semibold">₹{walletBalance.toFixed(2)}</div>
      </div>
    </div>
  );
}