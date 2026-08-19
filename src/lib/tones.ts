// Simple ambient tone generator used as the "music trigger" for each memory.
// Replace with real audio files whenever they are available.

let ctx: AudioContext | null = null;
let active: { stop: () => void } | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const Ctor =
    window.AudioContext ??
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctor) return null;
  if (!ctx) ctx = new Ctor();
  return ctx;
}

export function stopTone() {
  active?.stop();
  active = null;
}

/** Plays a soft arpeggio derived from the given frequencies. */
export function playTone(freqs: number[]) {
  stopTone();
  const audio = getCtx();
  if (!audio) return;
  void audio.resume();

  const master = audio.createGain();
  master.gain.value = 0;
  master.connect(audio.destination);
  master.gain.linearRampToValueAtTime(0.12, audio.currentTime + 1.2);

  const oscs = freqs.map((f, i) => {
    const osc = audio.createOscillator();
    osc.type = "sine";
    osc.frequency.value = f;
    const g = audio.createGain();
    g.gain.value = 0;
    g.gain.setTargetAtTime(0.5 / freqs.length, audio.currentTime + i * 0.35, 0.6);
    osc.connect(g).connect(master);
    osc.start();
    return osc;
  });

  active = {
    stop: () => {
      const t = audio.currentTime;
      master.gain.cancelScheduledValues(t);
      master.gain.setValueAtTime(master.gain.value, t);
      master.gain.linearRampToValueAtTime(0, t + 0.6);
      oscs.forEach((o) => o.stop(t + 0.7));
    },
  };
}
