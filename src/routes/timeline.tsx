import { createFileRoute } from "@tanstack/react-router";
import { timeline } from "@/lib/memories";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Linha do Tempo — Nós dois" },
      {
        name: "description",
        content: "As datas marcantes do nosso relacionamento, com foto e história de cada uma.",
      },
      { property: "og:title", content: "Linha do Tempo — Nós dois" },
      {
        property: "og:description",
        content: "Data, foto e descrição de cada momento que nos trouxe até aqui.",
      },
    ],
  }),
  component: Timeline,
});

function Timeline() {
  return (
    <main className="relative min-h-screen px-6 py-24">
      <div className="veil pointer-events-none absolute inset-0 opacity-40" />
      <header className="relative mx-auto max-w-4xl">
        <h1 className="font-display text-5xl sm:text-6xl">
          Nossa <span className="text-ember italic">linha do tempo</span>
        </h1>
        <p className="mt-4 max-w-md text-sm text-muted-foreground">
          Tudo que aconteceu, na ordem em que o coração registrou.
        </p>
      </header>

      <ol className="relative mx-auto mt-20 max-w-4xl border-l border-border/70 pl-8 sm:pl-14">
        {timeline.map((e, i) => (
          <li key={e.date} className={`relative pb-20 ${i % 2 ? "sm:ml-16" : ""}`}>
            <span className="absolute -left-[2.35rem] top-3 h-3 w-3 rotate-45 border border-accent bg-primary sm:-left-[3.85rem]" />
            <p className="font-display text-xs uppercase tracking-[0.4em] text-accent-foreground">
              {e.date}
            </p>
            <div className="mt-5 grid gap-6 sm:grid-cols-[220px_1fr] sm:items-start">
              <img
                src={e.src}
                alt={e.title}
                loading="lazy"
                width={e.width}
                height={e.height}
                className="h-56 w-full border border-border/60 object-cover opacity-85 transition-opacity duration-500 hover:opacity-100"
              />
              <div>
                <h2 className="font-display text-3xl">{e.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {e.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
}
