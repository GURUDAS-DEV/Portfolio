// Web Audio API Synthesizer for Mechanical Keyboard Keypress Sound
let audioCtx: AudioContext | null = null;

export function playMechanicalClick() {
  try {
    if (typeof window === "undefined") return;

    if (!audioCtx) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;

    // 1. High-frequency metallic snap (switch tactile actuation click)
    const bufferSize = Math.floor(audioCtx.sampleRate * 0.015); // 15ms burst
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;

    const filter = audioCtx.createBiquadFilter();
    filter.type = "highpass";
    const snapFreq = 2400 + (Math.random() * 400 - 200); // 2200Hz - 2600Hz shift
    filter.frequency.setValueAtTime(snapFreq, now);

    const noiseGain = audioCtx.createGain();
    noiseGain.gain.setValueAtTime(0.25, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.012);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(audioCtx.destination);

    noise.start(now);

    // 2. Low-frequency thock (mechanical switch bottoming out)
    const osc = audioCtx.createOscillator();
    const oscGain = audioCtx.createGain();

    osc.type = "sine";
    const baseFreq = 130 + (Math.random() * 20 - 10); // Slight pitch variation
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(35, now + 0.025);

    oscGain.gain.setValueAtTime(0.3, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);

    osc.connect(oscGain);
    oscGain.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.028);
  } catch {
    // Ignore autoplay restriction or context creation errors silently
  }
}
