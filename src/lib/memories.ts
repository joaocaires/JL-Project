import img1 from "@/assets/WhatsApp Image 2026-08-26 at 21.00.04 (2).jpeg";
import img2 from "@/assets/WhatsApp Image 2026-08-26 at 21.00.04 (1).jpeg";
import img3 from "@/assets/WhatsApp Image 2026-08-26 at 21.00.03.jpeg";
import img4 from "@/assets/WhatsApp Image 2026-08-26 at 21.00.07.jpeg";
import img5 from "@/assets/WhatsApp Image 2026-08-26 at 21.00.07 (1).jpeg";
import img6 from "@/assets/WhatsApp Image 2026-08-26 at 21.00.06.jpeg";
import img7 from "@/assets/WhatsApp Image 2026-08-26 at 21.00.06 (3).jpeg";
import img8 from "@/assets/WhatsApp Image 2026-08-26 at 21.00.06 (2).jpeg";
import img9 from "@/assets/WhatsApp Image 2026-08-26 at 21.00.06 (1).jpeg";
import img10 from "@/assets/WhatsApp Image 2026-08-26 at 21.00.05.jpeg";
import img11 from "@/assets/WhatsApp Image 2026-08-26 at 21.00.05 (4).jpeg";
import img12 from "@/assets/WhatsApp Image 2026-08-26 at 21.00.05 (3).jpeg";
import img13 from "@/assets/WhatsApp Image 2026-08-26 at 21.00.05 (2).jpeg";
import img14 from "@/assets/WhatsApp Image 2026-08-26 at 21.00.05 (1).jpeg";

import audio1 from "@/assets/audio/Sade - Pearls (Audio)(MP3_160K).mp3";
import audio2 from "@/assets/audio/Sade - Like a Tattoo (Audio)(MP3_160K).mp3";
import audio3 from "@/assets/audio/Nx Zero_ Fresno - Se Eu For Eu Vou Com Você (Versão Light)(MP3_160K).mp3";
import audio4 from "@/assets/audio/Fresno - Manifesto (Ao Vivo) ft. Emicida(MP3_160K).mp3";
import audio5 from "@/assets/audio/Drake - Yebba_s Heartbreak (Audio)(MP3_160K).mp3";
import audio6 from "@/assets/audio/angels(MP3_160K).mp3";
import audio7 from "@/assets/audio/Adele - Lovesong (Lyric Video)(MP3_160K).mp3";

export type Memory = {
  id: string;
  src: string;
  audioSrc: string;
  width: number;
  height: number;
  title: string;
  description: string;
  song: string;
  span: "tall" | "wide" | "square" | "hero";
};

export const memories: Memory[] = [
  {
    id: "primeiro-olhar",
    src: img3,
    audioSrc: audio1,
    width: 900,
    height: 1200,
    title: "Você chegou e ficou",
    description:
      "Cada pedacinho seu se encaixa em mim. Fomos feitos um para o outro e nada me tira essa certeza. Quero mais de nós dois, segurar a sua mão até o fim. Eu sou confiante no nosso amor e nada abala a força dessa união. Tenha a certeza de que,enquanto eu existir, eu vou te amar sempre mais. Que venham mais 365 dias! Obrigado por ser o meu abrigo e a minha alegria diária. Te amo!",
    song: "Sade - Pearls (Audio)(MP3_160K)",
    span: "tall",
  },
  {
    id: "maos",
    src: img2,
    audioSrc: audio2,
    width: 1200,
    height: 900,
    title: "Nossas mãos se escolheram",
    description: "Espero ser a cada manhã a minha melhor versão e merecer todo esse amor. Obrigado por tudo. Você me faz o homem mais feliz e completo que existe. Amo a nossa história. Feliz 1 ano de namoro.",
    song: "Sade - Like a Tattoo (Audio)(MP3_160K)",
    span: "wide",
  },
  {
    id: "rosa",
    src: img1,
    audioSrc: audio3,
    width: 900,
    height: 900,
    title: "Um gesto que virou amor",
    description: "Agradeço todos os dias por Deus ter nos permitido o encontro do acaso. No fundo, eu sei que estava escrito. Você é ainda melhor do que eu sonhei.",
    song: "Nx Zero_ Fresno - Se Eu For Eu Vou Com Você (Versão Light)(MP3_160K)",
    span: "square",
  },
  {
    id: "danca",
    src: img4,
    audioSrc: audio4,
    width: 1200,
    height: 1500,
    title: "A noite aprendeu nosso ritmo",
    description: "Que poder é esse de ser tudo o que eu sempre sonhei? Obrigado por existir, minha linda. Mais 365 dias para nós",
    song: "Fresno - Manifesto (Ao Vivo) ft. Emicida(MP3_160K)",
    span: "hero",
  },
  {
    id: "cidade",
    src: img5,
    audioSrc: audio5,
    width: 1400,
    height: 900,
    title: "O mundo brilhou mais com você",
    description: "Você me fez acordar para um mundo que eu não conhecia. Te amo!",
    song: "Drake - Yebba_s Heartbreak (Audio)(MP3_160K)",
    span: "wide",
  },
  {
    id: "jantar",
    src: img6,
    audioSrc: audio6,
    width: 900,
    height: 1300,
    title: "Onde mora a nossa calma",
    description: "Não consigo me ver sem você, minha vida. Parabéns para nós e para o nosso amor    ",
    song: "angels(MP3_160K)",
    span: "tall",
  },
  {
    id: "risos-na-varanda",
    src: img7,
    audioSrc: audio7,
    width: 900,
    height: 1200,
    title: "Seu riso vira casa",
    description: "Eu te amo como nunca amei ninguém, quero passar minha vida toda ao seu lado.",
    song: "Adele - Lovesong (Lyric Video)(MP3_160K)",
    span: "square",
  },
  {
    id: "cafes-longos",
    src: img8,
    audioSrc: audio1,
    width: 1200,
    height: 900,
    title: "Quando o tempo esquece a hora",
    description: "Desde que você chegou, tudo se transformou! Eu não sei mais como é a vida sem amor. Não sei e não quero descobrir! Você é quem eu quero para sempre. Você é meu grande amor. Te amo!",
    song: "Sade - Pearls (Audio)(MP3_160K)",
    span: "wide",
  },
  {
    id: "flores-escondidas",
    src: img9,
    audioSrc: audio2,
    width: 900,
    height: 900,
    title: "Tudo em você floresce",
    description: "Neste 1 ano juntos, seguimos crescendo, aprendendo um com o outro",
    song: "Sade - Like a Tattoo (Audio)(MP3_160K)",
    span: "square",
  },
  {
    id: "luzes-da-noite",
    src: img10,
    audioSrc: audio3,
    width: 1200,
    height: 1500,
    title: "Nós dois contra o escuro",
    description: "Que as declarações sejam diárias e o amor seja constante",
    song: "Nx Zero_ Fresno - Se Eu For Eu Vou Com Você (Versão Light)(MP3_160K)",
    span: "hero",
  },
  {
    id: "cidade-em-silencio",
    src: img11,
    audioSrc: audio4,
    width: 1400,
    height: 900,
    title: "A cidade cabe no abraço",
    description: "Nesse primeiro ano de namoro, meu amor por você só cresceu. Mal posso esperar para passar a vida toda ao seu lado!",
    song: "Fresno - Manifesto (Ao Vivo) ft. Emicida(MP3_160K)",
    span: "wide",
  },
  {
    id: "mesa-revisitada",
    src: img12,
    audioSrc: audio5,
    width: 900,
    height: 1300,
    title: "Seu amor alimenta o dia",
    description: "Meu amor, compartilhamos 1 ano de namoro e muita felicidade. Só peço que assim seja sempre, te amo!",
    song: "Drake - Yebba_s Heartbreak (Audio)(MP3_160K)",
    span: "tall",
  },
  {
    id: "abrazo-de-luz",
    src: img13,
    audioSrc: audio6,
    width: 900,
    height: 1200,
    title: "Você é meu lugar seguro",
    description: "Não podia estar mais feliz por comemorar nosso primeiro aniversário de namoro. No fim de 1 ano, já deu para perceber que pertencemos um ao outro.",
    song: "angels(MP3_160K)",
    span: "tall",
  },
  {
    id: "sempre-mais",
    src: img14,
    audioSrc: audio7,
    width: 1200,
    height: 900,
    title: "Quero viver isso de novo",
    description: "Eu desejo que você seja tão feliz como eu sou e que o nosso amor dure muitos e muitos anos, e ultrapasse a eternidade.",
    song: "Adele - Lovesong (Lyric Video)(MP3_160K)",
    span: "square",
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
    src: img1,
    width: 900,
    height: 1200,
  },
  {
    date: "27 de abril",
    title: "O primeiro 'eu te amo'",
    description: "Dito baixinho, quase com medo, e respondido antes mesmo de terminar a frase.",
    src: img2,
    width: 1200,
    height: 900,
  },
  {
    date: "09 de agosto",
    title: "Nossa primeira viagem",
    description: "Mala pequena, mapa errado, estrada certa. Rimos até o sol nascer.",
    src: img5,
    width: 1400,
    height: 900,
  },
  {
    date: "31 de dezembro",
    title: "A virada juntos",
    description: "Prometemos um ano inteiro e acabamos prometendo todos os outros também.",
    src: img4,
    width: 1200,
    height: 1500,
  },
];
