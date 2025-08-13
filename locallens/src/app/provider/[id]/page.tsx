import RatingStars from "@/components/RatingStars";
import Link from "next/link";

export default function ProviderProfile() {
  return (
    <div className="container mx-auto px-4 py-6 md:py-10 grid gap-6">
      <div className="grid md:grid-cols-[160px_1fr_auto] items-center gap-4 card p-5">
        <div className="h-36 w-36 rounded-2xl bg-slate-200" />
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl md:text-2xl font-semibold tracking-tight">Rahul Electric Works</h1>
            <span className="badge border-green-200 text-green-700 bg-green-50">Verified</span>
          </div>
          <div className="text-sm text-slate-500">Electrician • Thane West • 7 yrs experience</div>
          <div className="mt-2"><RatingStars value={4} /></div>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/pay" className="button">Book / Pay</Link>
          <Link href="/review/rahul-electric" className="rounded-xl border border-[--border] px-4 py-3 text-sm font-medium">Write a review</Link>
        </div>
      </div>

      <section className="grid gap-3">
        <h2 className="text-lg font-semibold">About</h2>
        <div className="card p-5 text-slate-700 leading-relaxed">
          Reliable electrical services including installation, maintenance, and emergency repairs. Same-day visits in Thane.
        </div>
      </section>

      <section className="grid gap-3">
        <h2 className="text-lg font-semibold">Recent work</h2>
        <div className="grid grid-cols-3 gap-2 md:gap-3">
          <div className="h-24 md:h-32 rounded-xl bg-slate-200" />
          <div className="h-24 md:h-32 rounded-xl bg-slate-200" />
          <div className="h-24 md:h-32 rounded-xl bg-slate-200" />
        </div>
      </section>

      <section className="grid gap-3">
        <h2 className="text-lg font-semibold">Reviews</h2>
        <div className="card divide-y divide-[--border]">
          {[1, 2].map((i) => (
            <div key={i} className="p-5">
              <div className="flex items-center justify-between">
                <div className="font-medium">Asha {i}</div>
                <RatingStars value={4} />
              </div>
              <div className="text-sm text-slate-600 mt-1">Quick response and neat work. Highly recommended.</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}