import { useEffect, useRef } from 'react';

export default function Hero() {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = contentRef.current;
        if (!el) return;
        const timer = setTimeout(() => {
            el.classList.add('is-visible');
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const handleContactScroll = () => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            className="relative flex items-center justify-center min-h-screen"
            style={{ paddingTop: '5rem' }}
            aria-label="Hero"
        >
            {/* Subtle overlay for depth */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(198,168,94,0.04) 0%, transparent 70%)',
                }}
            />

            <div
                ref={contentRef}
                className="fade-in-section relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center"
            >
                {/* Eyebrow label */}
                <span className="section-label mb-8 block">
                    Quindore Holdings LLC — Wyoming, United States
                </span>

                {/* Thin gold line above headline */}
                <div
                    className="mx-auto mb-10"
                    style={{
                        width: '3rem',
                        height: '1px',
                        backgroundColor: 'var(--color-gold)',
                        opacity: 0.6,
                    }}
                />

                {/* Main headline */}
                <h1
                    className="font-serif mb-8"
                    style={{
                        fontSize: 'clamp(2rem, 5vw, 3.75rem)',
                        fontWeight: 500,
                        lineHeight: 1.15,
                        color: 'var(--color-text)',
                        letterSpacing: '-0.01em',
                    }}
                >
                    Structured Ownership.{' '}
                    <br className="hidden sm:block" />
                    Disciplined Governance.{' '}
                    <br className="hidden sm:block" />
                    <span style={{ color: 'var(--color-gold)' }}>Long-Term Value.</span>
                </h1>

                {/* Subtext */}
                <p
                    className="font-sans mx-auto mb-12"
                    style={{
                        fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                        fontWeight: 300,
                        lineHeight: 1.8,
                        color: 'var(--color-text-muted)',
                        maxWidth: '42rem',
                        letterSpacing: '0.01em',
                    }}
                >
                    Quindore Holdings LLC operates as a U.S.-registered parent entity overseeing
                    independent digital operating subsidiaries under centralized strategic and
                    financial oversight.
                </p>

                {/* CTA */}
                <button
                    onClick={handleContactScroll}
                    className="btn-gold-outline"
                    aria-label="Navigate to Contact section"
                >
                    Contact
                </button>

                {/* Scroll indicator */}
                <div className="mt-20 flex flex-col items-center gap-2 opacity-30">
                    <div
                        style={{
                            width: '1px',
                            height: '3rem',
                            backgroundColor: 'var(--color-gold)',
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
