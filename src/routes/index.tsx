import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/p4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nós dois — um lugar para as nossas memórias" },
      {
        name: "description",
        content:
          "Um pequeno santuário romântico com nossa galeria de fotos, retrospectiva animada e a linha do tempo do nosso amor.",
      },
      { property: "og:title", content: "Nós dois — um lugar para as nossas memórias" },
      {
        property: "og:description",
        content: "Galeria, retrospectiva e linha do tempo de tudo que vivemos juntos.",
      },
    ],
  }),
  component: Home,
});

const cards = [
  {
    to: "/galeria" as const,
    n: "01",
    title: "Galeria de Fotos",
    text: "Instantes soltos, guardados fora de ordem — como a memória guarda.",
    offset: "md:mt-0",
  },
  {
    to: "/retrospectiva" as const,
    n: "02",
    title: "Retrospectiva",
    text: "Nosso ano inteiro em slides, com música e transições lentas.",
    offset: "md:mt-16",
  },
  {
    to: "/timeline" as const,
    n: "03",
    title: "Linha do Tempo",
    text: "As datas que mudaram tudo, uma depois da outra.",
    offset: "md:mt-8",
  },
];

function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="veil pointer-events-none absolute inset-0 opacity-70" />
      <img
        src={hero}
        alt=""
        aria-hidden
        width={1200}
        height={1500}
        className="pointer-events-none absolute -right-24 top-0 h-[110vh] w-auto object-cover opacity-25 mix-blend-screen"
      />

      <section className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
        <p className="animate-rise text-[0.7rem] uppercase tracking-[0.5em] text-muted-foreground">
          para você
        </p>
        <h1 className="animate-rise mt-8 font-display text-5xl leading-[1.05] sm:text-7xl">
          Existe um lugar
          <span className="text-ember block italic"> onde o tempo para</span>
          e ele tem o seu nome.
        </h1>
        <p className="animate-rise mt-8 max-w-xl text-balance text-sm leading-relaxed text-muted-foreground sm:text-base">
          Reuni aqui os pedaços da nossa história — as fotos, as músicas, as datas que eu não
          consigo esquecer. Fique à vontade, tudo isso é seu.
        </p>
        <div className="rule-hairline mt-16 w-40" />
      </section>

      <section className="relative mx-auto max-w-5xl px-6 pb-32">
        <h2 className="font-display text-3xl italic text-muted-foreground">Por onde começar</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className={`group relative block border border-border/60 bg-card/40 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent hover:shadow-[var(--shadow-ember)] ${c.offset}`}
            >
              <span className="font-display text-xs tracking-[0.4em] text-accent">{c.n}</span>
              <h3 className="mt-6 font-display text-2xl">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              <span className="mt-8 inline-block text-xs uppercase tracking-[0.3em] text-muted-foreground transition-colors group-hover:text-accent-foreground">
                abrir →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
