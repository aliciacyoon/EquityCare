"use client" 
import { useEffect, useRef, useState } from "react";

const PILLARS = ["Prevention", "Education", "Access"];

export default function EquityCareHero() {
  const [beat, setBeat] = useState(false);
  const [pillars, setPillars] = useState([false, false, false]);
  const [sparkles, setSparkles] = useState<{id:number;angle:number;dist:number;big:boolean}[]>([]);
  const beatCount = useRef(0);
  const spkId = useRef(0);

  useEffect(() => {
    function doBeat() {
      setBeat(true);
      setTimeout(() => setBeat(false), 175);

      const newSparkles = Array.from({ length: 4 }, () => ({
        id: spkId.current++,
        angle: Math.random() * Math.PI * 2,
        dist: 42 + Math.random() * 20,
        big: Math.random() > 0.5,
      }));
      setSparkles(s => [...s, ...newSparkles]);
      setTimeout(() => {
        setSparkles(s => s.filter(sp => !newSparkles.find(n => n.id === sp.id)));
      }, 900);

      beatCount.current++;
      if (beatCount.current === 1) setPillars([true, false, false]);
      if (beatCount.current === 2) setPillars([true, true, false]);
      if (beatCount.current === 3) setPillars([true, true, true]);
    }

    const t = setTimeout(doBeat, 500);
    const iv = setInterval(doBeat, 1400);
    return () => { clearTimeout(t); clearInterval(iv); };
  }, []);

  return (
    <div style={{
      background: "#FAFAFA",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Inter','Helvetica Neue',sans-serif",
      padding: "2rem 1rem",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @keyframes spkanim {
          0%   { opacity: 1; transform: translate(0,0) scale(1); }
          100% { opacity: 0; transform: translate(0,-28px) scale(0.2); }
        }
      `}</style>

      {/* Very subtle bg wash */}
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 70% 55% at 50% 44%, rgba(220,82,100,0.05) 0%, transparent 70%)", pointerEvents:"none" }} />

      {/* Mobile Health badge */}
      <div style={{
        display:"flex", alignItems:"center", gap:8,
        background:"#FFF0F3",
        border:"1px solid rgba(210,60,80,0.18)",
        borderRadius:100, padding:"5px 18px",
        marginBottom:"2rem", position:"relative",
      }}>
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
          <circle cx="6.5" cy="6.5" r="6.5" fill="rgba(210,60,80,0.15)"/>
          <circle cx="6.5" cy="6.5" r="3" fill="#D23C50"/>
        </svg>
        <span style={{ fontSize:11, letterSpacing:"0.14em", color:"#C03050", fontWeight:600, textTransform:"uppercase" }}>
          Mobile Health Service
        </span>
      </div>

      {/* Heart */}
      <div style={{ position:"relative", width:200, height:200, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"0.5rem" }}>
        {sparkles.map(sp => {
          const lx = 65 + Math.cos(sp.angle) * sp.dist;
          const ly = 58 + Math.sin(sp.angle) * sp.dist * 0.68;
          return (
            <div key={sp.id} style={{
              position:"absolute", left:lx, top:ly,
              width: sp.big ? 6 : 4,
              height: sp.big ? 6 : 4,
              borderRadius:"50%",
              background: sp.big ? "#D23C50" : "#F4A0AE",
              animation:"spkanim 0.9s ease-out forwards",
              pointerEvents:"none",
            }} />
          );
        })}

        <svg
          viewBox="0 0 100 92"
          style={{
            width:108, height:100,
            transform: beat ? "scale(1.18)" : "scale(1)",
            transition: beat
              ? "transform 0.12s cubic-bezier(0.34,1.8,0.64,1)"
              : "transform 0.26s cubic-bezier(0.34,1.1,0.64,1)",
            filter: beat
              ? "drop-shadow(0 0 12px rgba(210,60,80,0.45))"
              : "drop-shadow(0 4px 10px rgba(210,60,80,0.18))",
          }}
        >
          <defs>
            <linearGradient id="hg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E8607A" />
              <stop offset="100%" stopColor="#C02840" />
            </linearGradient>
          </defs>
          {/* Heart shape */}
          <path
            d="M50 82 C50 82 8 54 8 28 C8 14 18 6 30 6 C38 6 45 11 50 17 C55 11 62 6 70 6 C82 6 92 14 92 28 C92 54 50 82 50 82Z"
            fill="url(#hg)"
          />
         
          {/* ECG line — the signature clinical detail */}
          <polyline
            points="22,55 28,55 32,47 36,63 40,52 44,55 56,55 59,49 62,60 65,55 78,55"
            stroke="rgba(255,255,255,0.80)" strokeWidth="2" fill="none"
            strokeLinecap="round" strokeLinejoin="round"
          />
          {/* Small cross icon top-right */}
          <line x1="76" y1="16" x2="76" y2="26" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round"/>
          <line x1="71" y1="21" x2="81" y2="21" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Wordmark */}
      <h1 style={{
        fontSize:"clamp(2.4rem,8vw,4rem)",
        fontWeight:700,
        letterSpacing:"-0.035em",
        margin:"0.5rem 0 0.15rem",
        color:"#1A1A1A",
        textAlign:"center",
        lineHeight:1,
        position:"relative",
      }}>
        Equity<span style={{ color:"#D23C50" }}>Care</span>
      </h1>

      <p style={{
        fontSize:"0.72rem",
        color:"#999",
        margin:"0.4rem 0 0",
        letterSpacing:"0.12em",
        textTransform:"uppercase",
        fontWeight:500,
        textAlign:"center",
        position:"relative",
      }}>
        Orange County
      </p>

      {/* Divider */}
      <div style={{ width:40, height:2, borderRadius:2, background:"#D23C50", margin:"1.5rem 0", opacity:0.4, position:"relative" }} />

      {/* Pillars */}
      <div style={{ display:"flex", alignItems:"center", gap:"clamp(10px,3vw,24px)", position:"relative" }}>
        {PILLARS.map((label, i) => (
          <div key={label} style={{ display:"flex", alignItems:"center", gap:"clamp(10px,3vw,24px)" }}>
            <span style={{
              fontSize:"clamp(0.82rem,2.2vw,1rem)",
              fontWeight:600,
              letterSpacing:"0.04em",
              textTransform:"uppercase",
              color: pillars[i] ? "#D23C50" : "transparent",
              transition:"color 0.5s ease, transform 0.55s cubic-bezier(0.34,1.4,0.64,1)",
              transform: pillars[i] ? "translateY(0)" : "translateY(5px)",
              display:"inline-block",
            }}>
              {label}
            </span>
            {i < 2 && (
              <span style={{ color:"rgba(210,60,80,0.3)", fontSize:"1rem", userSelect:"none" }}>•</span>
            )}
          </div>
        ))}
      </div>

      {/* Tagline */}
      <p style={{
        marginTop:"1.5rem",
        fontSize:"clamp(0.8rem,1.8vw,0.9rem)",
        color:"#888",
        textAlign:"center",
        maxWidth:320,
        lineHeight:1.8,
        letterSpacing:"0.01em",
        position:"relative",
      }}>
        Free pop-up health clinics across Orange County —<br />
        bringing care to where you are.
      </p>
    </div>
  );
}