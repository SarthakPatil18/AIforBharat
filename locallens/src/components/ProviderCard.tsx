import Link from "next/link";
import RatingStars from "@/components/RatingStars";

export default function ProviderCard() {
  return (
    <Link href="/provider/rahul-electric" className="card p-4 flex items-center gap-4 hover:shadow-md transition">
      <div className="size-14 rounded-xl bg-slate-200" />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <div className="font-medium">Rahul Electric Works</div>
          <span className="badge border-green-200 text-green-700 bg-green-50">Verified</span>
        </div>
        <div className="text-xs text-slate-500">Thane West • 2.1 km</div>
        <div className="mt-1">
          <RatingStars value={4} size={16} />
        </div>
      </div>
      <div className="text-sm text-[--accent] font-medium">View</div>
    </Link>
  );
}