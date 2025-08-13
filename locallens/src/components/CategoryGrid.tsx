import Link from "next/link";

const categories = [
  { key: "plumber", name: "Plumber", color: "#dbeafe" },
  { key: "electrician", name: "Electrician", color: "#e0e7ff" },
  { key: "carpenter", name: "Carpenter", color: "#fae8ff" },
  { key: "ac", name: "AC Repair", color: "#dcfce7" },
  { key: "painter", name: "Painter", color: "#fef9c3" },
  { key: "appliances", name: "Appliances", color: "#fee2e2" },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {categories.map((c) => (
        <Link
          href={`/?category=${c.key}`}
          key={c.key}
          className="card group p-4 md:p-5 hover:shadow-md transition"
          style={{ background: c.color }}
        >
          <div className="h-10 w-10 rounded-xl bg-white/80 shadow-sm mb-3" />
          <div className="font-medium">{c.name}</div>
          <div className="text-xs text-slate-500">Near you</div>
        </Link>
      ))}
    </div>
  );
}