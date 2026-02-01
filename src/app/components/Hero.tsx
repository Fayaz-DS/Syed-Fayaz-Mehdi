import { GravityStarsBackground } from "./backgrounds/gravity-stars";

export const GravityStarsBackgroundDemo = () => {
  return (
    <GravityStarsBackground className="absolute inset-0 flex items-center justify-center rounded-xl" />
  );
};

export default function Hero() {
  return (
    <section className="absolute inset-0">
      {/* FAYAZ text centered and positioned exactly as in IntroReveal */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          zIndex: 10,
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '25vw',
          letterSpacing: '0.05em',
          lineHeight: 0.9,
          fontWeight: 600,
          fontFamily: 'Cinzel, serif',
        }}>
          <span style={{ color: '#0D0D4A' }}>F</span>
          <span style={{ color: '#0D0D4A', fontSize: '25vw' }}>A</span>
          <span style={{ color: '#0D0D4A' }}>Y</span>
          <span style={{ color: '#0D0D4A', fontSize: '25vw' }}>A</span>
          <span style={{ color: '#0D0D4A' }}>Z</span>
        </div>
      </div>
      <div className="hero-text">
        <h1>BEGINNING OF AN ERA</h1>
      </div>
      <div className="infring">
        <p>© 2026 fayaz.engineering</p>
      </div>
      {/* Ensure the background fills the entire section */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <GravityStarsBackground className="w-full h-full" style={{ color:'#000000', width: '100%', height: '100%' }} />
      </div>
    </section>
  );
}
