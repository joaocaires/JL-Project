let activeAudio: HTMLAudioElement | null = null;

export function stopTone() {
  if (!activeAudio) return;
  activeAudio.pause();
  activeAudio.currentTime = 0;
  activeAudio = null;
}

export function playTone(src: string) {
  stopTone();
  if (typeof window === "undefined") return;

  const audio = new Audio(src);
  audio.preload = "auto";
  audio.volume = 0.35;
  audio.loop = false;
  activeAudio = audio;
  void audio.play();
}
