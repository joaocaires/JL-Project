import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays } from "lucide-react";
import { timeline } from "@/lib/memories";
import { Reveal } from "@/components/Reveal";

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
    <main className="relative min-h-screen overflow-hidden px-6 py-24">
      <div className="veil pointer-events-none absolute inset-0 opacity-40" />

      <header className="relative mx-auto max-w-3xl text-center">
        <h1 className="font-display text-5xl sm:text-6xl">
          Timeline
          <span className="text-ember block italic">do Nosso Amor</span>
        </h1>
        <p className="mt-5 text-sm text-muted-foreground">
          Os marcos que escreveram nossa história, um capítulo por vez
        </p>
      </header>

      <div className="relative mx-auto mt-24 max-w-5xl">
        {/* linha central */}
        <span className="pointer-events-none absolute left-6 top-0 h-full w-px bg-gradient-to-b from-transparent via-accent/70 to-transparent md:left-1/2 md:-translate-x-1/2" />
        <span className="pointer-events-none absolute left-6 top-0 h-2 w-2 -translate-x-1/2 rounded-full border border-accent bg-background md:left-1/2" />

        <ol className="relative space-y-16">
          {timeline.map((e, i) => {
            const right = i % 2 === 1;
            return (
              <Reveal
                as="li"
                key={e.date}
                delay={80}
                className={`relative flex md:items-center ${
                  right ? "md:justify-end" : "md:justify-start"
                }`}
              >
                {/* marcador */}
                <span className="absolute left-6 top-8 z-10 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-background shadow-[0_0_24px_6px_color-mix(in_oklab,var(--accent)_35%,transparent)] md:left-1/2">
                  <span className="h-3.5 w-3.5 rounded-full border-2 border-accent" />
                </span>

                <article
                  className={`ml-14 w-full rounded-3xl border border-border/50 bg-card/50 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-ember)] md:ml-0 md:w-[calc(50%-3rem)] ${
                    right ? "md:ml-12" : "md:mr-12"
                  }`}
                >
                  <p className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-primary/20 px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-accent-foreground">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {e.date}
                  </p>
                  <h2 className="mt-5 font-display text-3xl">{e.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {e.description}
                  </p>
                  <img
                    src={e.src}
                    alt={e.title}
                    loading="lazy"
                    width={e.width}
                    height={e.height}
                    className="mt-6 h-64 w-full rounded-2xl border border-border/50 object-cover opacity-90 transition-opacity duration-500 hover:opacity-100"
                  />
                </article>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </main>
  );
}

