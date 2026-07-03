// SVG placeholder mockups — replace with real screenshots when available.
// To use a real screenshot: <Image src="/screenshots/aegis.png" fill className="object-cover" />

function colorVar(accent: string) {
  if (accent === "blue")   return "var(--color-signal)";
  if (accent === "teal")   return "var(--color-active)";
  if (accent === "red")    return "var(--color-alert)";
  if (accent === "purple") return "#a78bfa";
  return "var(--color-signal)";
}

export function NetworkMockup({ accent }: { accent: string }) {
  const c = colorVar(accent);
  const pts = [[40,60],[120,30],[200,70],[90,110],[170,130],[250,100],[60,150],[220,40],[150,170],[280,150]];
  const lines = [[0,1],[1,2],[0,3],[3,4],[4,2],[3,6],[4,8],[2,5],[5,9],[4,9],[1,7]];
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full">
      <rect width="320" height="200" fill="var(--color-ink)" />
      {lines.map(([a,b],i) => <line key={i} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]} stroke={c} strokeOpacity={0.35} strokeWidth={1} />)}
      {pts.map(([x,y],i) => <circle key={i} cx={x} cy={y} r={i%3===0?5:3.5} fill={c} fillOpacity={i%4===0?0.9:0.5} />)}
      <text x="16" y="190" fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-text-dim)">AGENT_NETWORK // REAL_TIME</text>
    </svg>
  );
}

export function TerminalMockup({ accent }: { accent: string }) {
  const c = colorVar(accent);
  const lines = [
    { label: "> input",  text: "Analyzing submitted text...", color: "var(--color-text-dim)" },
    { label: "> ai_prob", text: "0.94  ██████████░", color: c },
    { label: "> source",  text: "GPT-4 family (conf: 91%)", color: c },
    { label: "> risk",    text: "HIGH — campaign cluster #7", color: "var(--color-alert)" },
    { label: "> action",  text: "Flagged + logged ✓", color: "var(--color-active)" },
  ];
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full">
      <rect width="320" height="200" fill="var(--color-ink)" />
      <rect x="8" y="8" width="304" height="184" rx="6" fill="var(--color-panel)" stroke="var(--color-line)" strokeWidth="1" />
      <rect x="8" y="8" width="304" height="24" rx="6" fill={c} fillOpacity="0.15" />
      <circle cx="24" cy="20" r="4" fill="var(--color-alert)" fillOpacity="0.8" />
      <circle cx="38" cy="20" r="4" fill="#fbbf24" fillOpacity="0.8" />
      <circle cx="52" cy="20" r="4" fill="var(--color-active)" fillOpacity="0.8" />
      <text x="100" y="24" fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-text-dim)">SENTINEL-AI // DETECTION ENGINE</text>
      {lines.map((l, i) => (
        <g key={i}>
          <text x="20" y={52 + i * 26} fontFamily="var(--font-mono)" fontSize="8" fill="var(--color-text-dim)">{l.label}</text>
          <text x="80" y={52 + i * 26} fontFamily="var(--font-mono)" fontSize="8" fill={l.color}>{l.text}</text>
        </g>
      ))}
    </svg>
  );
}

export function VoiceMockup({ accent }: { accent: string }) {
  const c = colorVar(accent);
  const bars = [12,20,35,55,70,85,70,55,35,20,12,8,12,20,35,55,40,25,15,8];
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full">
      <rect width="320" height="200" fill="var(--color-ink)" />
      <circle cx="160" cy="90" r="48" fill={c} fillOpacity="0.08" stroke={c} strokeOpacity="0.3" strokeWidth="1" />
      <circle cx="160" cy="90" r="32" fill={c} fillOpacity="0.12" />
      <circle cx="160" cy="90" r="16" fill={c} fillOpacity="0.6" />
      <text x="160" y="94" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="var(--color-ink)" fontWeight="bold">F</text>
      {bars.map((h, i) => (
        <rect key={i} x={32 + i * 12.5} y={160 - h / 2} width="6" height={h} rx="3" fill={c} fillOpacity="0.6" />
      ))}
      <text x="160" y="186" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-text-dim)">FRIDAY // GPT-4o VOICE PIPELINE</text>
    </svg>
  );
}

export function HeatmapMockup({ accent }: { accent: string }) {
  const c = colorVar(accent);
  const emotions = ["Happy","Sad","Angry","Neutral","Fear","Surprise"];
  const vals     = [0.82, 0.12, 0.04, 0.67, 0.23, 0.44];
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full">
      <rect width="320" height="200" fill="var(--color-ink)" />
      <text x="16" y="26" fontFamily="var(--font-mono)" fontSize="10" fill="var(--color-text)">EMOTION FUSION — SPEECH + FACE</text>
      {emotions.map((em, i) => (
        <g key={em}>
          <text x="16" y={52 + i * 24} fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-text-dim)">{em}</text>
          <rect x="90" y={40 + i * 24} width={160 * vals[i]} height="14" rx="3" fill={c} fillOpacity={0.3 + vals[i] * 0.6} />
          <text x={96 + 160 * vals[i]} y={52 + i * 24} fontFamily="var(--font-mono)" fontSize="8" fill={c}>{Math.round(vals[i]*100)}%</text>
        </g>
      ))}
    </svg>
  );
}

export function BarChartMockup({ accent }: { accent: string }) {
  const c = colorVar(accent);
  const bars = [40,75,55,90,65,100,48];
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full">
      <rect width="320" height="200" fill="var(--color-ink)" />
      {[40,80,120,160].map((y) => <line key={y} x1="20" y1={y} x2="300" y2={y} stroke="var(--color-line)" strokeWidth={1} />)}
      {bars.map((h, i) => <rect key={i} x={30 + i * 38} y={170 - h} width={22} height={h} rx={2} fill={c} fillOpacity={0.7} />)}
      <text x="16" y="190" fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-text-dim)">REVENUE_BY_CATEGORY // POWER_BI</text>
    </svg>
  );
}

export function DonutMockup({ accent }: { accent: string }) {
  const c = colorVar(accent);
  const r = 55, circ = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full">
      <rect width="320" height="200" fill="var(--color-ink)" />
      <g transform="translate(110,100)">
        <circle r={r} fill="none" stroke="var(--color-line)" strokeWidth={14} />
        <circle r={r} fill="none" stroke={c} strokeWidth={14} strokeDasharray={`${circ*0.34} ${circ}`} strokeLinecap="round" transform="rotate(-90)" />
        <text textAnchor="middle" dy="6" fontFamily="var(--font-mono)" fontSize="16" fill="var(--color-text)">16.4%</text>
      </g>
      <g transform="translate(210,65)" fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-text-dim)">
        <text y="0">ATTRITION</text><text y="16">RATE</text>
      </g>
      <text x="16" y="190" fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-text-dim)">HR_ANALYTICS // 8_DAX_MEASURES</text>
    </svg>
  );
}

// Map slug → mockup component
export const mockupMap: Record<string, React.FC<{ accent: string }>> = {
  "sentinel-ai":        TerminalMockup,
  "aegis":              NetworkMockup,
  "friday-ai":          VoiceMockup,
  "sentiment-analysis": HeatmapMockup,
  "superstore-sales":   BarChartMockup,
  "hr-attrition":       DonutMockup,
};
