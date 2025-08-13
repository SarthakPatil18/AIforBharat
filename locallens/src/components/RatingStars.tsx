"use client";

import { useState } from "react";

type RatingStarsProps = {
  value?: number;
  size?: number;
  onChange?: (value: number) => void;
};

export default function RatingStars({ value = 0, size = 22, onChange }: RatingStarsProps) {
  const [hover, setHover] = useState<number | null>(null);
  const current = hover ?? value;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i + 1 <= current;
        return (
          <button
            key={i}
            type="button"
            aria-label={`Rate ${i + 1} stars`}
            onMouseEnter={() => setHover(i + 1)}
            onMouseLeave={() => setHover(null)}
            onClick={() => onChange?.(i + 1)}
            className="p-0.5"
          >
            <svg
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill={filled ? "#fbbf24" : "none"}
              stroke={filled ? "#f59e0b" : "#cbd5e1"}
              strokeWidth="1.5"
            >
              <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </button>
        );
      })}
    </div>
  );
}