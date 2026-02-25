import { useEffect, useRef } from 'react';

export default function Contact() {
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
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="contact" ref={sectionRef} className="section-padding" aria-label="Contact">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="max-w-2xl">
                    <div className="fade-in-section">
                        <span className="section-label">Correspondence</span>
                        <h2
                            className="font-serif mb-6"
                            style={{
                                fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                                fontWeight: 500,
                                color: 'var(--color-text)',
                            }}
                        >
                            Contact
                        </h2>
                    </div>

                    <div className="fade-in-section">
                        <p
                            className="font-sans mb-10"
                            style={{
                                color: 'var(--color-text-muted)',
                                fontSize: '0.9375rem',
                                lineHeight: 1.8,
                                maxWidth: '36rem',
                            }}
                        >
                            For institutional inquiries, please direct correspondence to the address below. Quindore Holdings LLC does not maintain a public-facing customer service function. All communications are reviewed and responded to at the holding company level.
                        </p>
                    </div>

                    <div
                        className="fade-in-section"
                        style={{
                            borderTop: '1px solid var(--color-border)',
                            paddingTop: '2.5rem',
                        }}
                    >
                        <span
                            className="font-sans block mb-3"
                            style={{
                                fontSize: '0.6875rem',
                                fontWeight: 600,
                                letterSpacing: '0.16em',
                                textTransform: 'uppercase',
                                color: 'var(--color-gold)',
                            }}
                        >
                            Electronic Correspondence
                        </span>
                        <a
                            href="mailto:info@quindore.com"
                            className="font-serif"
                            style={{
                                fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)',
                                fontWeight: 400,
                                color: 'var(--color-text)',
                                textDecoration: 'none',
                                letterSpacing: '0.01em',
                                borderBottom: '1px solid var(--color-gold)',
                                paddingBottom: '2px',
                                transition: 'color 0.2s ease',
                                display: 'inline-block',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
                        >
                            info@quindore.com
                        </a>
                    </div>

                    <div
                        className="fade-in-section mt-10"
                        style={{
                            borderTop: '1px solid var(--color-border)',
                            paddingTop: '2rem',
                        }}
                    >
                        <span
                            className="font-sans block mb-3"
                            style={{
                                fontSize: '0.6875rem',
                                fontWeight: 600,
                                letterSpacing: '0.16em',
                                textTransform: 'uppercase',
                                color: 'var(--color-gold)',
                            }}
                        >
                            Registered Address
                        </span>
                        <address
                            className="font-sans not-italic"
                            style={{
                                color: 'var(--color-text-muted)',
                                fontSize: '0.9375rem',
                                lineHeight: 1.9,
                            }}
                        >
                            5830 E 2nd St, Ste 7000 #32674<br />
                            Casper, WY 82609<br />
                            United States
                        </address>
                    </div>
                </div>
            </div>
        </section>
    );
}
