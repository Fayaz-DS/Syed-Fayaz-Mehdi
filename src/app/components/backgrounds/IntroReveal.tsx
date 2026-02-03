'use client';

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";


export default function IntroReveal({ onComplete }: { onComplete?: () => void }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const timeout = setTimeout(() => {
            const topLetters = container.querySelectorAll(".top-letter");
            const bottomLetters = container.querySelectorAll(".bottom-letter");
            const overlay = container.querySelector(".overlay");
            const bottomSection = container.querySelector(".bottom-section");
            const allLetters = container.querySelectorAll(".letter");

            gsap.set(topLetters, { yPercent: 100, opacity: 0 });
            gsap.set(bottomLetters, { yPercent: 100, opacity: 0 });

            const tl = gsap.timeline();

            tl
            .to(topLetters, {
                yPercent: 0,
                opacity: 1,
                duration: 1.6,
                stagger: 0.2,
                ease: "power3.out",
            })
            .to(bottomLetters, {
                yPercent: 0,
                opacity: 1,
                duration: 1.6,
                stagger: 0.2,
                ease: "power3.out",
            }, "-=1.2")
            .to({}, { duration: 0.05 })
            .to(bottomSection, {
                top: "0%",
                duration: 0.9,
                ease: "power3.inOut",
            })
            .to(overlay, {
                yPercent: -100,
                duration: 0.9,
                ease: "power3.inOut",
            }, "<")
            .to(allLetters, {
                color: "#0D0D4A",
                duration: 0.8,
                ease: "power2.out",
                onComplete: () => {
                    setAnimationComplete(true);
                    if (onComplete) onComplete();
                }
            }, "-=0.7");
        }, 100);

        return () => clearTimeout(timeout);
    }, [onComplete]);

    return (
        <div 
            ref={containerRef} 
            style={{
                position: animationComplete ? 'absolute' : 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 50,
                overflow: 'hidden',
                height: '100vh',
                width: '100%',
            }}
        >
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to bottom, #AAAAB6 0%, #9A9AAE 12%, #8A8AA6 24%, #7A7A9E 36%, #6A6A96 48%, #5A5A8E 60%, #4A4A86 72%, #3A3A7E 84%, #2A2A76 96%, #1A1A6E 100%)',
                zIndex: 1,
            }} />
            <div 
                className="overlay" 
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: '#0D0D4A',
                    zIndex: 5,
                }}
            />
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
                    fontFamily: '"Cinzel", serif',
                }}>
                    <span className="top-letter letter" style={{ color: '#FAF9F6' }}>F</span>
                    <span style={{ color: 'transparent', fontSize: '25vw' }}>A</span>
                    <span className="top-letter letter" style={{ color: '#FAF9F6' }}>Y</span>
                    <span style={{ color: 'transparent', fontSize: '25vw' }}>A</span>
                    <span className="top-letter letter" style={{ color: '#FAF9F6' }}>Z</span>
                </div>
            </div>
            <div 
                className="bottom-section" 
                style={{
                    position: 'absolute',
                    top: '50%',
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
                    fontFamily: '"Cinzel", serif',
                }}>
                    <span style={{ color: 'transparent', fontSize: '25vw' }}>F</span>
                    <span className="bottom-letter letter" style={{ color: '#FAF9F6' }}>A</span>
                    <span style={{ color: 'transparent', fontSize: '25vw' }}>Y</span>
                    <span className="bottom-letter letter" style={{ color: '#FAF9F6' }}>A</span>
                    <span style={{ color: 'transparent', fontSize: '25vw' }}>Z</span>
                </div>
            </div>
        </div>
    );
}