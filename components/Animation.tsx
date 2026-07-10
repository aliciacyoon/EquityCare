"use client";
import { useEffect, useRef, useState } from "react";

export default function HeartAnimation() {
  const [beat, setBeat] = useState(false);
  const [sparkles, setSparkles] = useState<{id:number;angle:number;dist:number;big:boolean}[]>([]);
  const spkId = useRef(0);

  // Heart center within the 320x320 container:
  // SVG is 240x222, left-offset = (320-240)/2 = 40, top-offset = (320-222)/2 = 49
  // Heart center in SVG coords (viewBox 100x92): ~(50, 42) → scaled to 240x222 → (120, 101)
  // Heart center in container: (40+120, 49+101) = (160, 150)
  const CX = 157, CY = 147;

  useEffect(() => {
    function doBeat() {
      setBeat(true);
      setTimeout(() => setBeat(false), 175);

      const newSparkles = Array.from({ length: 5 }, () => ({
        id: spkId.current++,
        angle: Math.random() * Math.PI * 2,
        dist: 65 + Math.random() * 30,
        big: Math.random() > 0.5,
      }));
      setSparkles(s => [...s, ...newSparkles]);
      setTimeout(() => {
        setSparkles(s => s.filter(sp => !newSparkles.find(n => n.id === sp.id)));
      }, 900);
    }

    const t = setTimeout(doBeat, 500);
    const iv = setInterval(doBeat, 1400);
    return () => { clearTimeout(t); clearInterval(iv); };
  }, []);

  return (
    <div style={{ position: "relative", width: 320, height: 320, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <style>{`
        @keyframes spkanim {
          0%   { opacity: 1; transform: translate(0,0) scale(1); }
          100% { opacity: 0; transform: translate(0,-32px) scale(0.2); }
        }
      `}</style>

      {sparkles.map(sp => {
        const lx = CX + Math.cos(sp.angle) * sp.dist;
        const ly = CY + Math.sin(sp.angle) * sp.dist * 0.68;
        return (
          <div key={sp.id} style={{
            position: "absolute", left: lx, top: ly,
            width: sp.big ? 8 : 5,
            height: sp.big ? 8 : 5,
            borderRadius: "50%",
            background: sp.big ? "#D23C50" : "#F4A0AE",
            animation: "spkanim 0.9s ease-out forwards",
            pointerEvents: "none",
          }} />
        );
      })}

      <svg
        viewBox="0 0 100 92"
        style={{
          width: 240, height: 222,
          transform: beat ? "scale(1.12)" : "scale(1)",
          transition: beat
            ? "transform 0.12s cubic-bezier(0.34,1.8,0.64,1)"
            : "transform 0.26s cubic-bezier(0.34,1.1,0.64,1)",
          filter: beat
            ? "drop-shadow(0 0 18px rgba(210,60,80,0.5))"
            : "drop-shadow(0 6px 16px rgba(210,60,80,0.22))",
        }}
      >
        <defs>
          <linearGradient id="hg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8607A" />
            <stop offset="100%" stopColor="#C02840" />
          </linearGradient>
        </defs>
        <path
          d="M50 82 C50 82 8 54 8 28 C8 14 18 6 30 6 C38 6 45 11 50 17 C55 11 62 6 70 6 C82 6 92 14 92 28 C92 54 50 82 50 82Z"
          fill="url(#hg)"
        />
        <polyline
          points="22,55 28,55 32,47 36,63 40,52 44,55 56,55 59,49 62,60 65,55 78,55"
          stroke="rgba(255,255,255,0.80)" strokeWidth="2" fill="none"
          strokeLinecap="round" strokeLinejoin="round"
        />
        <line x1="76" y1="16" x2="76" y2="26" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round"/>
        <line x1="71" y1="21" x2="81" y2="21" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
  );
}
