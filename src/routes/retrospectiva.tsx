import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { memories } from "@/lib/memories";
import { playTone, stopTone } from "@/lib/tones";

export const Route = createFileRoute("/retrospectiva")({
  head: () => ({
    meta: [
      { title: "Retrospectiva — Nós dois" },
      {
        name: "description",
        content: "Nosso ano em slides: fotos, frases e música de fundo, no estilo retrospectiva.",
      },
      { property: "og:title", content: "Retrospectiva — Nós dois" },
      {
        property: "og:description",
        content: "Slides automáticos com as melhores memórias e trilha sonora.",
      },
    ],
  }),
  component: Retrospectiva,
});

function Retrospectiva() {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);
  const slide = memories[i]!;

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => setI((v) => (v + 1) % memories.length), 5000);
    return () => clearTimeout(t);
  }, [i, playing]);

  useEffect(() => {
    if (playing) playTone(slide.tone);
    return () => stopTone();
  }, [i, playing, slide.tone]);

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="veil pointer-events-none absolute inset-0 opacity-60" />

      <div className="absolute inset-x-0 top-0 z-20 flex gap-1 p-4">
        {memories.map((m, idx) => (
          <span key={m.id} className="h-[2px] flex-1 bg-secondary">
            <span
              className="block h-full bg-accent transition-all duration-500"
              style={{ width: idx <= i ? "100%" : "0%" }}
            />
          </span>
        ))}
      </div>

      <section className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-start justify-center gap-10 px-6 py-24 md:flex-row md:items-center">
        <img
          key={slide.id}
          src={slide.src}
          alt={slide.title}
          width={slide.width}
          height={slide.height}
          className="animate-rise max-h-[60vh] w-full max-w-sm border border-border/60 object-cover shadow-[var(--shadow-ember)] md:rotate-[-2deg]"
        />
        <div key={`${slide.id}-t`} className="animate-rise md:pl-6">
          <p className="text-xs uppercase tracking-[0.5em] text-accent-foreground">
            {String(i + 1).padStart(2, "0")} / {String(memories.length).padStart(2, "0")}
          </p>
          <h1 className="mt-6 font-display text-4xl sm:text-6xl">{slide.title}</h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            {slide.description}
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            ♪ {slide.song}
          </p>
        </div>
      </section>

      <div className="relative z-20 flex items-center justify-center gap-3 pb-12">
        <button
          onClick={() => setI((v) => (v - 1 + memories.length) % memories.length)}
          className="border border-border px-5 py-2 text-xs uppercase tracking-[0.3em] transition-colors hover:border-accent hover:bg-primary"
        >
          anterior
        </button>
        <button
          onClick={() => {
            setPlaying((p) => !p);
            if (playing) stopTone();
          }}
          className="border border-accent bg-primary px-6 py-2 text-xs uppercase tracking-[0.3em] text-primary-foreground transition-opacity hover:opacity-85"
        >
          {playing ? "pausar" : "reproduzir"}
        </button>
        <button
          onClick={() => setI((v) => (v + 1) % memories.length)}
          className="border border-border px-5 py-2 text-xs uppercase tracking-[0.3em] transition-colors hover:border-accent hover:bg-primary"
        >
          próximo
        </button>
      </div>
    </main>
  );
}
