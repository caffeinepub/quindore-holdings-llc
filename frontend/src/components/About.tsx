import { useEffect, useRef } from 'react';

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.fade-in-section').forEach((el, i) => {
                            setTimeout(() => el.classList.add('is-visible'), i * 120);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="section-padding" aria-label="About Quindore Holdings">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Section header */}
                <div className="fade-in-section mb-16 md:mb-20">
                    <span className="section-label">About the Entity</span>
                    <div className="flex items-end gap-8">
                        <h2
                            className="font-serif"
                            style={{
                                fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                                fontWeight: 500,
                                color: 'var(--color-text)',
                                maxWidth: '28rem',
                            }}
                        >
                            A Holding Company by Structure and Purpose
                        </h2>
                        <div
                            className="hidden md:block flex-1 mb-3"
                            style={{ height: '1px', backgroundColor: 'var(--color-border)' }}
                        />
                    </div>
                </div>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left column */}
                    <div className="space-y-10">
                        <div className="fade-in-section">
                            <div
                                className="mb-4"
                                style={{
                                    width: '2rem',
                                    height: '1px',
                                    backgroundColor: 'var(--color-gold)',
                                    opacity: 0.6,
                                }}
                            />
                            <h3
                                className="font-serif mb-3"
                                style={{ fontSize: '1.1875rem', fontWeight: 500, color: 'var(--color-text)' }}
                            >
                                Parent Holding Company Role
                            </h3>
                            <p className="font-sans" style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem', lineHeight: 1.8 }}>
                                Quindore Holdings LLC functions exclusively as a parent holding entity. It does not engage in direct commercial operations, retail activities, or consumer-facing services. Its role is to hold ownership interests in subsidiary entities and provide centralized strategic direction.
                            </p>
                        </div>

                        <div className="fade-in-section">
                            <div
                                className="mb-4"
                                style={{
                                    width: '2rem',
                                    height: '1px',
                                    backgroundColor: 'var(--color-gold)',
                                    opacity: 0.6,
                                }}
                            />
                            <h3
                                className="font-serif mb-3"
                                style={{ fontSize: '1.1875rem', fontWeight: 500, color: 'var(--color-text)' }}
                            >
                                Centralized Governance
                            </h3>
                            <p className="font-sans" style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem', lineHeight: 1.8 }}>
                                All subsidiary entities operate under the governance framework established by Quindore Holdings LLC. This includes oversight of financial reporting, compliance obligations, and strategic alignment. Governance authority is exercised at the holding company level to ensure consistency and accountability across the portfolio.
                            </p>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="space-y-10">
                        <div className="fade-in-section">
                            <div
                                className="mb-4"
                                style={{
                                    width: '2rem',
                                    height: '1px',
                                    backgroundColor: 'var(--color-gold)',
                                    opacity: 0.6,
                                }}
                            />
                            <h3
                                className="font-serif mb-3"
                                style={{ fontSize: '1.1875rem', fontWeight: 500, color: 'var(--color-text)' }}
                            >
                                Long-Term Capital Discipline
                            </h3>
                            <p className="font-sans" style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem', lineHeight: 1.8 }}>
                                The company maintains a long-term orientation toward capital allocation and asset development. Investment decisions are evaluated against sustained value creation rather than short-term performance metrics. This discipline informs the selection, development, and management of all operating subsidiaries within the portfolio.
                            </p>
                        </div>

                        <div className="fade-in-section">
                            <div
                                className="mb-4"
                                style={{
                                    width: '2rem',
                                    height: '1px',
                                    backgroundColor: 'var(--color-gold)',
                                    opacity: 0.6,
                                }}
                            />
                            <h3
                                className="font-serif mb-3"
                                style={{ fontSize: '1.1875rem', fontWeight: 500, color: 'var(--color-text)' }}
                            >
                                Asset Development Focus
                            </h3>
                            <p className="font-sans" style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem', lineHeight: 1.8 }}>
                                Quindore Holdings LLC focuses on the structured development of digital operating assets. Each subsidiary is developed as an independent operating platform with its own commercial identity, management structure, and compliance obligations. The holding company provides the capital and governance framework within which these assets operate.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Disclaimer */}
                <div
                    className="fade-in-section mt-16 md:mt-20 p-6 md:p-8"
                    style={{
                        borderLeft: '2px solid var(--color-gold)',
                        backgroundColor: 'var(--color-surface)',
                    }}
                >
                    <p
                        className="font-sans"
                        style={{
                            color: 'var(--color-text-muted)',
                            fontSize: '0.875rem',
                            letterSpacing: '0.02em',
                            lineHeight: 1.7,
                        }}
                    >
                        <span style={{ color: 'var(--color-gold)', fontWeight: 500 }}>Notice: </span>
                        This domain does not process consumer transactions directly.
                    </p>
                </div>
            </div>
        </section>
    );
}
