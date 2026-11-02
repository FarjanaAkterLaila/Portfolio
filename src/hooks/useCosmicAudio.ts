import { useState, useRef, useEffect, useCallback } from 'react';
import { CosmicAudioHook, SfxType } from '../types';

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}

export function useCosmicAudio(): CosmicAudioHook {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const filterRef = useRef<BiquadFilterNode | null>(null);
  const droneOsc1Ref = useRef<OscillatorNode | null>(null);
  const droneOsc2Ref = useRef<OscillatorNode | null>(null);
  const chimeTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const initAudioEngine = useCallback(() => {
    if (audioCtxRef.current) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;

    const ctx = new AudioCtx();
    audioCtxRef.current = ctx;

    // Master gain
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
    masterGain.connect(ctx.destination);
    masterGainRef.current = masterGain;

    // Warm Lowpass Filter
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(280, ctx.currentTime);
    filter.Q.setValueAtTime(3.5, ctx.currentTime);
    filter.connect(masterGain);
    filterRef.current = filter;

    // Drone Oscillator 1 (Root ~55Hz - Deep cosmic hum)
    const osc1 = ctx.createOscillator();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(55, ctx.currentTime);
    const gain1 = ctx.createGain();
    gain1.gain.setValueAtTime(0.35, ctx.currentTime);
    osc1.connect(gain1);
    gain1.connect(filter);
    droneOsc1Ref.current = osc1;

    // Drone Oscillator 2 (Harmonic Fifth ~82.41Hz - Warm celestial pad)
    const osc2 = ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(82.41, ctx.currentTime);
    const gain2 = ctx.createGain();
    gain2.gain.setValueAtTime(0.25, ctx.currentTime);
    osc2.connect(gain2);
    gain2.connect(filter);
    droneOsc2Ref.current = osc2;

    osc1.start();
    osc2.start();
  }, []);

  const playCrystallineChime = useCallback(() => {
    const ctx = audioCtxRef.current;
    if (!ctx || ctx.state !== 'running' || !masterGainRef.current) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    const freqs = [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50];
    const freq = freqs[Math.floor(Math.random() * freqs.length)];

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.08, now + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

    osc.connect(gain);
    gain.connect(masterGainRef.current);

    osc.start(now);
    osc.stop(now + 3.3);
  }, []);

  const playSfx = useCallback((type?: SfxType | string) => {
    const ctx = audioCtxRef.current;
    if (!ctx || !isPlaying || ctx.state !== 'running') return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.08);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.09);
    } else if (type === 'warp') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(660, now + 0.22);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.26);
    } else {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.linearRampToValueAtTime(880, now + 0.35);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.4);
    }
  }, [isPlaying]);

  const toggleAudio = useCallback(() => {
    initAudioEngine();
    const ctx = audioCtxRef.current;
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    setIsPlaying(prev => {
      const next = !prev;
      if (next && masterGainRef.current) {
        masterGainRef.current.gain.cancelScheduledValues(ctx.currentTime);
        masterGainRef.current.gain.exponentialRampToValueAtTime(0.5, ctx.currentTime + 1.2);
        if (chimeTimerRef.current) clearInterval(chimeTimerRef.current);
        chimeTimerRef.current = setInterval(() => {
          playCrystallineChime();
        }, 4500);
        playCrystallineChime();
      } else if (masterGainRef.current) {
        masterGainRef.current.gain.cancelScheduledValues(ctx.currentTime);
        masterGainRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
        if (chimeTimerRef.current) clearInterval(chimeTimerRef.current);
      }
      return next;
    });
  }, [initAudioEngine, playCrystallineChime]);

  useEffect(() => {
    return () => {
      if (chimeTimerRef.current) clearInterval(chimeTimerRef.current);
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        try {
          audioCtxRef.current.close();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  return { isPlaying, toggleAudio, playSfx };
}
