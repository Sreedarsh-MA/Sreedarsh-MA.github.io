// Juice — confetti, sounds, and micro-animations. Loaded before app.js.
// Everything respects prefers-reduced-motion and the in-app sound toggle.
(function () {
  "use strict";

  const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- Confetti ----------
  let canvas = null;
  let ctx = null;
  let particles = [];
  let raf = 0;

  function ensureCanvas() {
    if (canvas) return;
    canvas = document.createElement("canvas");
    canvas.id = "juice-confetti";
    canvas.style.cssText = "position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:9999";
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();
  }

  const COLORS = ["#6ea1ff", "#7ee0a3", "#ffd166", "#ef767a", "#c792ea", "#4dd0e1"];

  function confetti(burst = 130) {
    if (reduced) return;
    ensureCanvas();
    const cx = canvas.width / 2;
    for (let i = 0; i < burst; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 4 + Math.random() * 9;
      particles.push({
        x: cx + (Math.random() - 0.5) * canvas.width * 0.3,
        y: canvas.height * 0.35 + (Math.random() - 0.5) * 60,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 6,
        w: 5 + Math.random() * 6,
        h: 3 + Math.random() * 5,
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.3,
        color: COLORS[(Math.random() * COLORS.length) | 0],
        life: 90 + Math.random() * 40,
      });
    }
    if (!raf) tick();
  }

  function tick() {
    raf = requestAnimationFrame(tick);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter((p) => p.life > 0 && p.y < canvas.height + 30);
    if (!particles.length) {
      cancelAnimationFrame(raf);
      raf = 0;
      return;
    }
    for (const p of particles) {
      p.life--;
      p.vy += 0.22;
      p.vx *= 0.99;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = Math.min(1, p.life / 40);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }
  }

  // ---------- Sounds (WebAudio, no assets) ----------
  let audio = null;
  function tone(freq, start, dur, type = "sine", gain = 0.08) {
    const t0 = audio.currentTime + start;
    const osc = audio.createOscillator();
    const g = audio.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g).connect(audio.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.05);
  }

  const SOUNDS = {
    flip: () => tone(520, 0, 0.07, "triangle", 0.05),
    good: () => { tone(660, 0, 0.1); tone(880, 0.08, 0.14); },
    again: () => tone(220, 0, 0.16, "sawtooth", 0.04),
    level: () => { tone(523, 0, 0.12); tone(659, 0.1, 0.12); tone(784, 0.2, 0.12); tone(1047, 0.3, 0.28); },
    chest: () => { tone(392, 0, 0.1); tone(523, 0.09, 0.1); tone(659, 0.18, 0.1); tone(784, 0.27, 0.24); },
    hit: () => tone(150 + Math.random() * 60, 0, 0.09, "square", 0.05),
    buy: () => { tone(700, 0, 0.08); tone(1050, 0.07, 0.12); },
    error: () => tone(180, 0, 0.14, "square", 0.04),
  };

  function sound(name) {
    try {
      if (window.store && store.sound === false) return;
      if (reduced) return;
      if (!audio) audio = new (window.AudioContext || window.webkitAudioContext)();
      if (audio.state === "suspended") audio.resume();
      (SOUNDS[name] || SOUNDS.flip)();
    } catch {
      // audio unavailable — stay silent
    }
  }

  // ---------- Animated count-up ----------
  function countUp(el, to, ms = 600) {
    if (!el) return;
    const from = parseInt(el.textContent.replace(/\D/g, ""), 10) || 0;
    if (reduced || from === to) {
      el.textContent = String(to);
      return;
    }
    const t0 = performance.now();
    const step = (t) => {
      const k = Math.min(1, (t - t0) / ms);
      el.textContent = String(Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3))));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  // ---------- Card flip ----------
  function flip(cardEl, midSwap) {
    if (!cardEl || reduced) {
      midSwap();
      return;
    }
    cardEl.classList.remove("flipping");
    void cardEl.offsetWidth;
    cardEl.classList.add("flipping");
    setTimeout(midSwap, 190);
    setTimeout(() => cardEl.classList.remove("flipping"), 420);
  }

  window.Juice = { confetti, sound, countUp, flip, reduced };
})();