"use client";

import { useState } from "react";
import RatingStars from "@/components/RatingStars";

export default function ReviewForm({ providerName }: { providerName: string }) {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);

  return (
    <form className="card p-5 grid gap-4">
      <div>
        <div className="text-sm text-slate-500">Reviewing</div>
        <div className="font-medium">{providerName}</div>
      </div>
      <div>
        <label className="text-sm text-slate-600 mb-1 block">Your rating</label>
        <RatingStars value={rating} onChange={setRating} size={28} />
      </div>
      <div>
        <label className="text-sm text-slate-600 mb-1 block">Feedback</label>
        <textarea className="input min-h-28" placeholder="Short feedback…" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div>
        <label className="text-sm text-slate-600 mb-1 block">Photos</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = () => setPhoto(reader.result as string);
            reader.readAsDataURL(file);
          }}
        />
        {photo ? (
          <div className="mt-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo} alt="Upload preview" className="h-32 w-32 rounded-xl object-cover border border-[--border]" />
          </div>
        ) : null}
      </div>
      <button className="button" type="button" onClick={() => alert("Review submitted (mock)")}>Submit review</button>
    </form>
  );
}