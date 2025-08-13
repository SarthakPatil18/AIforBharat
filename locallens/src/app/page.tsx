import AISearchBar from "@/components/AISearchBar";
import CategoryGrid from "@/components/CategoryGrid";
import ProviderCard from "@/components/ProviderCard";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6 md:py-10 grid gap-6">
      <section className="text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Find trusted local professionals</h1>
        <p className="text-slate-500 mt-1">Hyperlocal services with AI-powered clarity and digital accountability.</p>
      </section>

      <AISearchBar />

      <section className="grid gap-3">
        <h2 className="text-lg font-semibold">Popular categories</h2>
        <CategoryGrid />
      </section>

      <section className="grid gap-3">
        <h2 className="text-lg font-semibold">Near you</h2>
        <div className="grid gap-3">
          <ProviderCard />
          <ProviderCard />
        </div>
      </section>
    </div>
  );
}
