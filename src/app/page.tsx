'use client';
import { useState } from "react";
import Hero from "./components/Hero";
import IntroReveal from "./components/backgrounds/IntroReveal";

export default function Page() {
    const [showHero, setShowHero] = useState(false);
    return (
        <main className="relative">
            <div 
                className="fixed inset-0"
                style={{
                    background: 'linear-gradient(to bottom, #AAAAB6 0%, #9A9AAE 12%, #8A8AA6 24%, #7A7A9E 36%, #6A6A96 48%, #5A5A8E 60%, #4A4A86 72%, #3A3A7E 84%, #2A2A76 96%, #1A1A6E 100%)',
                    zIndex: 0,
                }}
            >
            </div>
            <section className="relative min-h-screen" style={{ zIndex: 1 }}>
                {!showHero && <IntroReveal onComplete={() => setShowHero(true)} />}
                {showHero && <Hero />}
            </section>
        </main>
    );
}