import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";

export type Memory = {
  id: string;
  src: string;
  width: number;
  height: number;
  title: string;
  description: string;
  song: string;
  tone: number[];
  span: "tall" | "wide" | "square" | "hero";
};

export const memories: Memory[] = [
  {
    id: "primeiro-olhar",
    src: p1,
    width: 900,
    height: 1200,
    title: "O primeiro olhar",
    description:
      "O céu inteiro mudou de cor e eu não percebi — estava ocupado te olhando pela primeira vez.",
    song: "Nosso tema — o silêncio antes do sim",
    tone: [261.6, 329.6, 392.0],
    span: "tall",
  },
  {
    id: "maos",
    src: p2,
    width: 1200,
    height: 900,
    title: "Mãos que se acharam",
    description: "Descobrimos que existia um jeito certo de encaixar os dedos. Nunca mais soltei.",
    song: "Nosso tema — pele e sussurro",
    tone: [220.0, 277.2, 329.6],
    span: "wide",
  },
  {
    id: "rosa",
    src: p3,
    width: 900,
    height: 900,
    title: "Uma rosa sem motivo",
    description: "Não era aniversário, não era nada. Era só terça-feira e eu te amando.",
    song: "Nosso tema — vermelho vivo",
    tone: [293.7, 370.0, 440.0],
    span: "square",
  },
  {
    id: "danca",
    src: p4,
    width: 1200,
    height: 1500,
    title: "A dança no escuro",
    description: "Sem música, sem plateia. Só nós dois girando devagar na sala.",
    song: "Nosso tema — valsa de meia-noite",
    tone: [196.0, 246.9, 293.7],
    span: "hero",
  },
  {
    id: "cidade",
    src: p5,
    width: 1400,
    height: 900,
    title: "A cidade inteira acesa",
    description: "Todas aquelas luzes e ainda assim você era a coisa mais bonita da janela.",
    song: "Nosso tema — luzes fora de foco",
    tone: [246.9, 311.1, 370.0],
    span: "wide",
  },
  {
    id: "jantar",
    src: p6,
    width: 900,
    height: 1300,
    title: "Mesa para dois",
    description: "As velas queimaram até o fim e a gente nem viu o tempo passar.",
    song: "Nosso tema — chama baixa",
    tone: [174.6, 220.0, 261.6],
    span: "tall",
  },
];

export type TimelineEvent = {
  date: string;
  title: string;
  description: string;
  src: string;
  width: number;
  height: number;
};

export const timeline: TimelineEvent[] = [
  {
    date: "12 de março",
    title: "O primeiro encontro",
    description: "Um café que virou quatro horas de conversa e um adeus que demorou demais.",
    src: p1,
    width: 900,
    height: 1200,
  },
  {
    date: "27 de abril",
    title: "O primeiro 'eu te amo'",
    description: "Dito baixinho, quase com medo, e respondido antes mesmo de terminar a frase.",
    src: p2,
    width: 1200,
    height: 900,
  },
  {
    date: "09 de agosto",
    title: "Nossa primeira viagem",
    description: "Mala pequena, mapa errado, estrada certa. Rimos até o sol nascer.",
    src: p5,
    width: 1400,
    height: 900,
  },
  {
    date: "31 de dezembro",
    title: "A virada juntos",
    description: "Prometemos um ano inteiro e acabamos prometendo todos os outros também.",
    src: p4,
    width: 1200,
    height: 1500,
  },
];
