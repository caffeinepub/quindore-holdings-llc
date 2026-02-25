import { useEffect, useRef } from 'react';

const tiers = [
    {
        number: '01',
        title: 'Parent Holding Entity',
        description:
            'Quindore Holdings LLC serves as the apex holding entity within the corporate structure. It holds legal ownership interests in all controlled subsidiaries and is responsible for centralized governance, capital allocation, and strategic oversight. The parent entity does not conduct direct commercial operations.',
    },
    {
        number: '02',
        title: 'Controlled Subsidiaries',
        description:
            'Each subsidiary is a legally distinct entity operating under the ownership and governance authority of Quindore Holdings LLC. Subsidiaries are subject to the compliance standards, financial reporting requirements, and strategic directives established at the holding company level.',
    },
    {
        number: '03',
        title: 'Independent Operating Platforms',
        description:
            'Within each subsidiary, one or more independent operating platforms may be established to conduct specific commercial activities. These platforms operate with defined mandates and are accountable to their respective subsidiary management structures, which in turn report to the holding company.',
    },
    {
        number: '04',
        title: 'Trade Name Operations',
        description:
            'Subsidiaries and their operating platforms may conduct business under registered trade names distinct from the legal entity name. All such trade name operations remain subject to the governance and compliance framework of Quindore Holdings LLC. Consumers and counterparties may interact with these trade names without direct reference to the parent entity.',
    },
];

export default function OperatingStructure() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.fade-in-section').forEach((el, i) => {
                            setTimeout(() => el.classList.add('is-visible'), i * 100);
                        });
                    }
                });
            },
            { threshold: 0.08 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="structure-overview" ref={sectionRef} className="section-padding" aria-label="Operating Structure">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Section header */}
                <div className="fade-in-section mb-16 md:mb-20">
                    <span className="section-label">Corporate Architecture</span>
                    <div className="flex items-end gap-8">
                        <h2
                            className="font-serif"
                            style={{
                                fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                                fontWeight: 500,
                                color: 'var(--color-text)',
                                maxWidth: '32rem',
                            }}
                        >
                            Operating Structure
                        </h2>
                        <div
                            className="hidden md:block flex-1 mb-3"
                            style={{ height: '1px', backgroundColor: 'var(--color-border)' }}
                        />
                    </div>
                    <p
                        className="font-sans mt-6"
                        style={{
                            color: 'var(--color-text-muted)',
                            fontSize: '0.9375rem',
                            maxWidth: '42rem',
                            lineHeight: 1.8,
                        }}
                    >
                        The corporate structure of Quindore Holdings LLC is organized across four distinct tiers, each with defined roles, responsibilities, and governance relationships.
                    </p>
                </div>

                {/* Tier grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ border: '1px solid var(--color-border)' }}>
                    {tiers.map((tier) => (
                        <div
                            key={tier.number}
                            className="fade-in-section p-8 lg:p-10 relative"
                            style={{
                                backgroundColor: 'var(--color-surface)',
                                borderRight: '1px solid var(--color-border)',
                                borderBottom: '1px solid var(--color-border)',
                            }}
                        >
                            {/* Gold accent top border */}
                            <div
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '2px',
                                    backgroundColor: 'var(--color-gold)',
                                    opacity: 0.35,
                                }}
                            />

                            {/* Tier number */}
                            <span
                                className="font-serif block mb-4"
                                style={{
                                    fontSize: '2.5rem',
                                    fontWeight: 400,
                                    color: 'var(--color-gold)',
                                    opacity: 0.35,
                                    lineHeight: 1,
                                    letterSpacing: '-0.02em',
                                }}
                            >
                                {tier.number}
                            </span>

                            <h3
                                className="font-serif mb-4"
                                style={{
                                    fontSize: '1.125rem',
                                    fontWeight: 500,
                                    color: 'var(--color-text)',
                                    letterSpacing: '0.01em',
                                }}
                            >
                                {tier.title}
                            </h3>

                            <p
                                className="font-sans"
                                style={{
                                    color: 'var(--color-text-muted)',
                                    fontSize: '0.9rem',
                                    lineHeight: 1.8,
                                }}
                            >
                                {tier.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Note */}
                <div
                    className="fade-in-section mt-10"
                    style={{
                        borderTop: '1px solid var(--color-border)',
                        paddingTop: '1.5rem',
                    }}
                >
                    <p
                        className="font-sans"
                        style={{
                            color: 'var(--color-text-muted)',
                            fontSize: '0.8125rem',
                            letterSpacing: '0.02em',
                            lineHeight: 1.7,
                        }}
                    >
                        For a detailed visual representation of the corporate hierarchy, see the{' '}
                        <a
                            href="/structure"
                            style={{ color: 'var(--color-gold)', textDecoration: 'none', borderBottom: '1px solid var(--color-gold-dim)' }}
                        >
                            Corporate Structure
                        </a>{' '}
                        page.
                    </p>
                </div>
            </div>
        </section>
    );
}
