import React from "react";
import ReviewForm from "@/components/ReviewForm";

export default function ReviewPage({ params }: { params: Promise<{ providerId: string }> }) {
  // Next.js app router can pass params as a promise; unwrap it using React.use in RSC
  const { providerId } = React.use(params);
  const providerName = providerId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <div className="container mx-auto px-4 py-6 md:py-10 grid gap-6">
      <h1 className="text-xl md:text-2xl font-semibold tracking-tight">Write a review</h1>
      <ReviewForm providerName={providerName} />
    </div>
  );
}