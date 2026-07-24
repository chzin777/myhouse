import { ApplianceShowcase } from "@/components/ApplianceShowcase";

export default function Home() {
  return (
    <div className="site-shell">
      <main className="showcase-scroll">
        <ApplianceShowcase />
      </main>
    </div>
  );
}
