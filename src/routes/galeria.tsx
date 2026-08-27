import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { memories, type Memory } from "@/lib/memories";
import { playTone, stopTone } from "@/lib/tones";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria de Fotos — Nós dois" },
      {
        name: "description",
        content:
          "Um mosaico assimétrico das nossas fotos favoritas, cada uma com sua descrição e sua música.",
      },
      { property: "og:title", content: "Galeria de Fotos — Nós dois" },
      {
        property: "og:description",
        content: "Fotos em mosaico, com descrição e trilha sonora para cada memória.",
      },
    ],
  }),
  component: Galeria,
});

const spanClass: Record<Memory["span"], string> = {
  tall: "row-span-2",
  wide: "sm:col-span-2",
  square: "",
  hero: "sm:col-span-2 row-span-2",
};

function Galeria() {
  const [open, setOpen] = useState<Memory | null>(null);

  useEffect(() => {
    if (open) playTone(open.audioSrc);
    else stopTone();
    return () => stopTone();
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className="relative min-h-screen px-6 py-24">
      <div className="veil pointer-events-none absolute inset-0 opacity-40" />
      <header className="relative mx-auto max-w-6xl">
        <h1 className="font-display text-5xl sm:text-6xl">
          Galeria <span className="text-ember italic">de nós</span>
        </h1>
        <p className="mt-4 max-w-md text-sm text-muted-foreground">
          Toque em qualquer foto: ela abre grande e traz junto um pequeno texto.
        </p>
      </header>

      <div className="relative mx-auto mt-16 grid max-w-6xl auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-3">
        {memories.map((m) => (
          <button
            key={m.id}
            onClick={() => setOpen(m)}
            className={`group relative overflow-hidden border border-border/50 transition-all duration-500 hover:border-accent ${spanClass[m.span]}`}
          >
            <img
              src={m.src}
              alt={m.title}
              loading="lazy"
              width={m.width}
              height={m.height}
              className="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-4 text-left font-display text-lg">
              {m.title}
            </span>
          </button>
        ))}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-md"
          onClick={() => setOpen(null)}
        >
          <div
            className="animate-rise grid max-h-[90vh] w-full max-w-4xl gap-8 overflow-auto border border-border bg-card/80 p-6 md:grid-cols-[1.3fr_1fr]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={open.src}
              alt={open.title}
              width={open.width}
              height={open.height}
              className="max-h-[70vh] w-full object-contain"
            />
            <div className="flex flex-col justify-center">
              <h2 className="font-display text-3xl">{open.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {open.description}
              </p>
              <p className="mt-8 text-xs uppercase tracking-[0.3em] text-accent-foreground">
                ♪ {open.song}
              </p>
              <button
                onClick={() => setOpen(null)}
                className="mt-10 self-start border border-border px-5 py-2 text-xs uppercase tracking-[0.3em] transition-colors hover:border-accent hover:bg-primary"
              >
                fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
