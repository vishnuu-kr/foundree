import { useCallback, useRef } from "react";

// Web Audio API sci-fi short SFX generator
export function useSfx() {
  const audioCtxRef = useRef<AudioContext | null>(null);

  const initAudio = (() => {
      if (!audioCtxRef.current) {
        // @ts-ignore - Support for older Safari prefixes
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtxRef.current = new AudioContext();
      }
      return audioCtxRef.current;
  });

  const playHoverSound = useCallback(() => {
    try {
      const ctx = initAudio();
      if (ctx.state === "suspended") ctx.resume();

      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.1);

      gainNode.gain.setValueAtTime(0.05, ctx.currentTime); // very quiet
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    // eslint-disable-next-line no-empty
    } catch (e) {}
  }, []);

  const playClickSound = useCallback(() => {
    try {
      const ctx = initAudio();
      if (ctx.state === "suspended") ctx.resume();

      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = "square";
      osc.frequency.setValueAtTime(1200, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.15);

      gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    // eslint-disable-next-line no-empty
    } catch (e) {}
  }, []);

  const playBootSound = useCallback(() => {
    try {
      const ctx = initAudio();
      if (ctx.state === "suspended") ctx.resume();
      
      const vco1 = ctx.createOscillator();
      const vco2 = ctx.createOscillator();
      const vca = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      vco1.type = "sawtooth";
      vco2.type = "square";

      vco1.frequency.value = 110;
      vco2.frequency.value = 110.5; // detune slightly

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(100, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(2000, ctx.currentTime + 0.5);

      vca.gain.setValueAtTime(0, ctx.currentTime);
      vca.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.1);
      vca.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.0);

      vco1.connect(filter);
      vco2.connect(filter);
      filter.connect(vca);
      vca.connect(ctx.destination);

      vco1.start();
      vco2.start();
      vco1.stop(ctx.currentTime + 1.0);
      vco2.stop(ctx.currentTime + 1.0);
    // eslint-disable-next-line no-empty
    } catch (e) {}
  }, []);

  return { playHoverSound, playClickSound, playBootSound };
}