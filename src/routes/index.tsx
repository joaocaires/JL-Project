import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/p4.jpg";
import p1 from "@/assets/p1.jpg";
import p3 from "@/assets/p3.jpg";
import p5 from "@/assets/p5.jpg";


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

const storySections = [
  {
    id: "como-tudo-comecou",
    eyebrow: "Capítulo I",
    title: "Como tudo começou",
    text: "Escreva aqui sobre o começo. Pode ser o primeiro encontro, a primeira conversa, o primeiro olhar que demorou mais do que deveria.",
    src: p1,
    alt: "O primeiro olhar",
    layout: "left" as const,
  },
  {
    id: "o-que-a-gente-e",
    eyebrow: "Capítulo II",
    title: "O que a gente é",
    text: "Aqui cabe falar sobre vocês. Os gestos pequenos, as rotinas que viraram sagradas, o jeito que o outro tem de fazer qualquer lugar parecer casa.",
    src: p3,
    alt: "Uma rosa sem motivo",
    layout: "right" as const,
  },
  {
    id: "o-que-vem-depois",
    eyebrow: "Capítulo III",
    title: "O que vem depois",
    text: "Sonhos, planos, promessas. Use este espaço para descrever o futuro que vocês estão desenhando juntos, devagar, com as mãos dadas.",
    src: p5,
    alt: "A cidade inteira acesa",
    layout: "left" as const,
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
        className="pointer-events-none absolute -right-24 top-0 h-[110vh] w-auto object-cover opacity-15"
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

      <section className="relative mx-auto max-w-6xl px-6 py-24">
      <section className="relative mx-auto max-w-5xl px-6 pb-24">
        <Reveal>
          <h2 className="font-display text-3xl italic text-muted-foreground">Por onde começar</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.to} delay={i * 120} className={c.offset}>
              <Link
                to={c.to}
                className="group relative block h-full rounded-2xl border border-border/60 bg-card/40 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent hover:shadow-[var(--shadow-ember)]"
              >
                <span className="font-display text-xs tracking-[0.4em] text-accent">{c.n}</span>
                <h3 className="mt-6 font-display text-2xl">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                <span className="mt-8 inline-block text-xs uppercase tracking-[0.3em] text-muted-foreground transition-colors group-hover:text-accent-foreground">
                  abrir →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-24 pb-32">
        <Reveal className="mx-auto mb-20 max-w-xl text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.5em] text-muted-foreground">nossa história</p>
          <h2 className="mt-4 font-display text-3xl italic sm:text-4xl">
            Alguns capítulos ainda estão sendo escritos
          </h2>
        </Reveal>

        <div className="space-y-28">
          {storySections.map((s) => {
            const imageSide = s.layout === "left" ? "md:order-1" : "md:order-2";
            const textSide = s.layout === "left" ? "md:order-2 md:pl-12" : "md:order-1 md:pr-12";
            return (
              <Reveal as="article" key={s.id} className="grid items-center gap-10 md:grid-cols-2">
                <div className={`group relative ${imageSide}`}>
                  <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
                  <img
                    src={s.src}
                    alt={s.alt}
                    className="relative w-full rounded-2xl object-cover shadow-[var(--shadow-ember)] transition-transform duration-700 group-hover:scale-[1.02]"
                    style={{ aspectRatio: "4/5" }}
                    loading="lazy"
                  />
                </div>
                <div className={`${textSide}`}>
                  <p className="text-[0.7rem] uppercase tracking-[0.4em] text-accent">{s.eyebrow}</p>
                  <h3 className="mt-4 font-display text-3xl sm:text-4xl">{s.title}</h3>
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {s.text}
                  </p>
                  <div className="rule-hairline mt-8 w-24" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </main>
  );
}


